import 'dart:async';

import 'package:web_socket_channel/io.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import '../util/wx_log.dart';
import '../util/wx_debug.dart';

final String WebSocketURL = 'ws://'+WXDebug.serverIP+':'+WXDebug.socketPort;

enum SocketStatus {
  SocketStatusConnected,
  SocketStatusFailed,
  SocketStatusClosed,
}

class WXWebSocketManager {
  static WXWebSocketManager _socket;

  WXWebSocketManager._();

  factory WXWebSocketManager() {
    if (_socket == null) {
      _socket = new WXWebSocketManager._();
    }
    return _socket;
  }

  IOWebSocketChannel _webSocket;
  SocketStatus _socketStatus;
  Timer _heartBeat;
  num _heartTimes = 3000;
  num _reconnectCount = 60;
  num _reconnectTimes = 0;
  Timer _reconnectTimer;
  Function onError;
  Function onOpen;
  Function onMessage;

  get isConnected => _socketStatus == SocketStatus.SocketStatusConnected;

  void initWebSocket({Function onOpen, Function onMessage, Function onError}) {
    this.onOpen = onOpen;
    this.onMessage = onMessage;
    this.onError = onError;
    openSocket();
  }

  void openSocket() {
    closeSocket();
    _webSocket = IOWebSocketChannel.connect(WebSocketURL);
    WXLog.log('WebSocket', 'WebSocket connect: $WebSocketURL');
    _socketStatus = SocketStatus.SocketStatusConnected;
    _reconnectTimes = 0;
    if (_reconnectTimer != null) {
      _reconnectTimer.cancel();
      _reconnectTimer = null;
    }
    onOpen();
    _webSocket.stream.listen((data) => webSocketOnMessage(data),
        onError: webSocketOnError, onDone: webSocketOnDone);
  }

  webSocketOnMessage(data) {
    onMessage(data);
  }

  webSocketOnDone() {
    reconnect();
  }

  webSocketOnError(e) {
    WebSocketChannelException ex = e;
    _socketStatus = SocketStatus.SocketStatusFailed;
    onError(ex.message);
    closeSocket();
  }

  void initHeartBeat() {
    destroyHeartBeat();
    _heartBeat =
    new Timer.periodic(Duration(milliseconds: _heartTimes), (timer) {
      sentHeart();
    });
  }

  void sentHeart() {
    sendMessage('{"module": "HEART_CHECK", "message": "live"}');
  }

  void destroyHeartBeat() {
    if (_heartBeat != null) {
      _heartBeat.cancel();
      _heartBeat = null;
    }
  }

  void closeSocket() {
    if (_webSocket != null) {
      _webSocket.sink.close();
      destroyHeartBeat();
      _socketStatus = SocketStatus.SocketStatusClosed;
    }
  }

  void sendMessage(message) {
    if (_webSocket != null) {
      switch (_socketStatus) {
        case SocketStatus.SocketStatusConnected:
          // WXLog.log('WebSocket', 'WebSocket send message: $message');
          _webSocket.sink.add(message);
          break;
        case SocketStatus.SocketStatusClosed:
          WXLog.log('WebSocket', 'WebSocket closed');
          break;
        case SocketStatus.SocketStatusFailed:
          WXLog.log('WebSocket', 'WebSocket send failed');

          break;
        default:
          break;
      }
    }
  }

  void reconnect() {
    if (_reconnectTimes < _reconnectCount) {
      _reconnectTimes++;
      _reconnectTimer =
      new Timer.periodic(Duration(milliseconds: _heartTimes), (timer) {
        openSocket();
      });
    } else {
      if (_reconnectTimer != null) {
        WXLog.log('WebSocket', 'WebSocket reconnect failed');

        _reconnectTimer.cancel();
        _reconnectTimer = null;
      }
      return;
    }
  }
}
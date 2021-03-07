import 'dart:io';
import 'dart:convert' as convert;
import 'dart:io' show Platform;
import 'package:weex_flutter_demo/weex_flutter/bridge/wx_jsc_runtime_manager.dart';
import 'package:get_it/get_it.dart';

import '../util/wx_define.dart';
import '../util/wx_log.dart';
import '../util/wx_device_utils.dart';
import '../service/wx_navigate_service.dart';
import '../service/wx_focus_scope.dart';
import 'wx_downloader_manager.dart';
import '../manager/wx_web_socket_manager.dart';
import '../bridge/wx_jsc_runtime_manager.dart';

final GetIt locator = GetIt.instance;

class WXSdkEngine with WXJSMessageHandler{
  factory WXSdkEngine() => _getInstance();
  static WXSdkEngine get instance => _getInstance();
  static WXSdkEngine _instance;
  WXSdkEngine._internal() {}

  bool isFrameworkReady = false;

  static Object weexEnv;
  static WXSdkEngine _getInstance() {
    if (_instance == null) {
      _instance = new WXSdkEngine._internal();
    }
    return _instance;
  }

  initSDKEnvironment() {
    /// In development mode：live-reload
    if(Platform.isIOS || Platform.isAndroid) {
      WXWebSocketManager().initWebSocket(onOpen: () {
      }, onMessage: (data) {
        Map<String,dynamic> res = convert.jsonDecode(data);
        if(res != null && res.containsKey('REFRESH')) {
          WXLog.log("WebSocket","WebSocket REFRESH:$data['REFRESH']");

          Map<String, WXJSMessageHandler> handlers = WXJSCRuntimeManager().handlers;
          if(handlers!=null && handlers.isNotEmpty) {
            handlers.forEach((key, value) {
              if(key != 'root') {
                value.onMessage('reload', null);
              }
            });
          }
        } else {
          WXLog.log("WebSocket",'WebSocket onMessage:$data');
        }

      }, onError: (e) {
        WXLog.error("WebSocket",'WebSocket onError:$e');
      });
    }

    // init downloader
    WXDownloaderManager.initDownloadPath();
    //get_it
    setupLocator();
    if(weexEnv == null) {
      WXEnvironment().getInfo().then((value) {
        weexEnv = value;
        WXLog.log(kWXFlutterTag, weexEnv);

        WXJSCRuntimeManager.instance.loadFramework('root',this).then((value) {
          WXLog.log(kWXFlutterTag,'WxFlutter Framework is ready');
          isFrameworkReady = true;
        });
      });
    }
  }

  void setupLocator() {
    locator.registerSingleton(WXNavigateService());
    locator.registerSingleton(WXFocusScopeService());
  }

  @override
  void onMessage(String method, Map<String,dynamic > params) {
    // TODO: implement onMessage
    WXLog.log('', method+params.toString());
  }
}

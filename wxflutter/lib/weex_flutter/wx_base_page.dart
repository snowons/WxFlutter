import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:weex_flutter_demo/weex_flutter/manager/wx_sdk_engine.dart';
import 'package:weex_flutter_demo/weex_flutter/bridge/wx_channel.dart';
import 'package:weex_flutter_demo/weex_flutter/bridge/wx_jsc_runtime_manager.dart';
import 'package:weex_flutter_demo/weex_flutter/manager/wx_component_manager.dart';
import 'package:weex_flutter_demo/weex_flutter/util/wx_define.dart';
import 'package:weex_flutter_demo/weex_flutter/util/wx_log.dart';
import 'package:weex_flutter_demo/weex_flutter/util/wx_obj_parse.dart';
import 'manager/wx_web_socket_manager.dart';
import 'util/wx_debug.dart';
var _methodChannel = WXChannel("wx.flutter.method.channel/method");

class WXBasePage extends StatefulWidget {
  final Map<String, dynamic> args;

  WXBasePage(this.args);

  @override
  _MainPageState createState() {
    return _MainPageState(args);
  }
}

class _MainPageState extends State<WXBasePage> with WXJSMessageHandler {
  Map<String, dynamic> args = Map();
  String _bundleUrl = '';
  String _pageId = "";
  String _title = "";
  Color _appBarColor;
  Color _backgroundColor;
  Widget _tree;

  GlobalKey<RefreshIndicatorState> _refreshIndicatorKey;
  Completer<bool> _completer;

  WXComponentManager _factory;
  WXJSCRuntimeManager jscManager = new WXJSCRuntimeManager();

  _MainPageState(this.args) {
    _pageId = this.hashCode.toString();
    _factory = WXComponentManager(_pageId, _methodChannel);
  }

  void _updateTitle(Map<String, dynamic> map) {
    setState(() {
      _title = map['title'];
    });
  }

  void _setNavigationBarColor(Map<String, dynamic> map) {
    setState(() {
      _appBarColor = WXColor.parse(map['appBarColor'], defaultValue: Colors.blue);
    });
  }

  void _setBackgroundColor(Map<String, dynamic> map) {
    setState(() {
      _backgroundColor =
          WXColor.parse(map['backgroundColor'], defaultValue: Colors.grey[200]);
    });
  }

  void _create() async {
    if(args["title"] != null) {
      _updateTitle(args);
    }
    if(args["appBarColor"] != null) {
      _setNavigationBarColor(args);
    }
    if(args["_backgroundColor"] != null) {
      _setBackgroundColor(args);
    }

    if (WXSdkEngine.instance.isFrameworkReady) {

     if(WXDebug.isDebug && WXWebSocketManager().isConnected) {
       _bundleUrl = "http://${WXDebug.serverIP}:${WXDebug.serverPort}/dist${args['url']}";
     } else {
       _bundleUrl= "assets/bundlejs${args['url']}";
     }
     args['bundleUrl'] = _bundleUrl;
     await jscManager.renderPage(_pageId, args, this);


    } else {
      WXLog.error(kWXFlutterTag,
          "(WXSdkEngine.instance.isFrameworkReady = ${WXSdkEngine.instance.isFrameworkReady}");
    }
  }

  void reloadPage() {
    if(_bundleUrl != null && _bundleUrl.startsWith('http')) {
      _factory.clear();
      _callOnUnload();
      _create();
    }
  }

  void _createComponentTree(Map<String, dynamic> data) {
    var component = _factory.createComponentTree(null, data, id: _pageId);
    var tree = _factory.createWidgetTree(null, component, id: _pageId);
    setState(() {
      _tree = tree;
    });
  }

  @override
  void initState() {
    super.initState();
    _create();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
  }

  @override
  void dispose() {
    super.dispose();
    _factory.clear();
    _callOnUnload();
  }

  void _callOnUnload() {
    jscManager.dispose(_pageId);
  }

  Future<void> _onRefresh() {
    _methodChannel.invokeMethod("onPullDownRefresh", {"pageId": _pageId});
    _completer = new Completer<bool>();
    return _completer.future.then((bool success) {
      return success;
    });
  }

  @override
  Widget build(BuildContext context) {
    var child = _tree;
    if (null != _tree) {
      _refreshIndicatorKey = GlobalKey<RefreshIndicatorState>();
      child = RefreshIndicator(
          key: _refreshIndicatorKey, onRefresh: _onRefresh, child: _tree);
    }

    return Scaffold(
        key: PageStorageKey(_tree),
        appBar: AppBar(
          title: Text(_title),
          centerTitle: true,
          backgroundColor: _appBarColor,

        ),
        backgroundColor: _backgroundColor,
        body: child);
  }

  @override
  void onMessage(String method, Map<String, dynamic> params) {
    switch (method) {
      case 'createBody':
        _createComponentTree(params);
        break;
      case 'addElement':
        _factory.addElement(params, id: _pageId);
        break;
      case 'updateAttrs':
      case 'updateStyle':
        _factory.updateAttrs(params, id: _pageId);
        break;
      case 'updateTitle':
        _updateTitle(params);
        break;
      case 'callNativeComponent':
        _factory.callNativeComponent(params);
        break;
      case 'reload':
        reloadPage();
        break;
    }
  }
}

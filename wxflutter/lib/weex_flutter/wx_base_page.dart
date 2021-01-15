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

  String _pageId = "";
  String _title = "";
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

  void _create() async {
    String path = "assets/bundlejs/${args['type']}/${args['uri']}";
    String result = await rootBundle.loadString(path).then((result) {
      return result;
    });
    _updateTitle({"title": args["title"]});

    if (WXSdkEngine.instance.isFrameworkReady) {
      _initScript(result);
    } else {
      WXLog.log(kWXFlutterTag,
          "(WXSdkEngine.instance.isFrameworkReady = $WXSdkEngine.instance.isFrameworkReady");
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

  void _initScript(String script) {
    jscManager.renderPage(_pageId, script, this);
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
        ),
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
    }
  }
}

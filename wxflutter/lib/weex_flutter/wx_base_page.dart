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
import 'manager/wx_event_bus_manager.dart';
import 'util/wx_debug.dart';
import 'dart:convert';

var _methodChannel = WXChannel("wx.flutter.method.channel/method");

class WXBasePage extends StatefulWidget {
  final Map<String, dynamic> args;

  WXBasePage(this.args);

  @override
  WXMainPageState createState() {
    return WXMainPageState(args);
  }
}

class WXMainPageState extends State<WXBasePage> with WXJSMessageHandler {
  Map<String, dynamic> args = Map();
  Map<String, dynamic> tabBar;
  int _currentPageIndex = 0;
  String _bundleUrl = '';
  String _pageId = "";
  String _title = "";
  Color _appBarColor;
  Color _backgroundColor;
  Widget _tree;

  WXComponentManager _factory;
  WXJSCRuntimeManager jscManager = new WXJSCRuntimeManager();

  WXMainPageState(this.args) {
    _pageId = this.hashCode.toString();
    if (args['tabBar'] != null) {
      tabBar = json.decode(args['tabBar']);
    }

    _factory = WXComponentManager(_pageId, _methodChannel);
  }

  bool get isTabBar => tabBar != null;

  String get getPageId => _pageId;

  void _create() async {
    if (args["title"] != null) {
      updateTitle(args);
    }
    if (args["appBarColor"] != null) {
      setNavigationBarColor(args);
    }
    if (args["backgroundColor"] != null) {
      setBackgroundColor(args);
    }

    if (WXSdkEngine.instance.isFrameworkReady) {
      if (WXDebug.isDebug && WXWebSocketManager().isConnected) {
        _bundleUrl =
            "http://${WXDebug.serverIP}:${WXDebug.serverPort}/dist${args['url']}";
      } else {
        _bundleUrl = "assets/bundlejs${args['url']}";
      }
      args['bundleUrl'] = _bundleUrl;
      await jscManager.renderPage(_pageId, args, this);
    } else {
      WXLog.error(kWXFlutterTag,
          "(WXSdkEngine.instance.isFrameworkReady = ${WXSdkEngine.instance.isFrameworkReady}");
    }
  }

  void _createComponentTree(Map<String, dynamic> data) {
    var component = _factory.createComponentTree(null, data, id: _pageId);
    var tree = _factory.createWidgetTree(null, component, id: _pageId);
    setState(() {
      _tree = tree;
    });
  }

  void reloadPage() {
    if (_bundleUrl != null && _bundleUrl.startsWith('http')) {
      setState(() {
        this._currentPageIndex = 0;
      });
      _factory.clear();
      _callOnUnload();
      _create();
    }
  }

  void updateTitle(Map<String, dynamic> map) {
    setState(() {
      _title = map['title'];
    });
  }

  void setNavigationBarColor(Map<String, dynamic> map) {
    setState(() {
      _appBarColor =
          WXColor.parseColor(map['appBarColor'], defaultValue: Colors.blue);
    });
  }

  void setBackgroundColor(Map<String, dynamic> map) {
    setState(() {
      _backgroundColor = WXColor.parseColor(map['backgroundColor'],
          defaultValue: Colors.grey[200]);
    });
  }

  void _callOnUnload() {
    jscManager.dispose(_pageId);
  }
  
  /// build BottomNavigationBar
  Widget _bottomNavigationBar() {
    return BottomNavigationBar(
      type: BottomNavigationBarType.fixed,
      currentIndex: this._currentPageIndex,
      unselectedItemColor: WXColor.parseColor(tabBar['color']),
      selectedItemColor: WXColor.parseColor(tabBar['selectedColor']),
      backgroundColor: WXColor.parseColor(tabBar['backgroundColor']),
      items: _bottomNavigationBarItemList(),
      onTap: (int index) {
        WXEventBusManager().emit("tabBarClick", {"index": index});
        setState(() {
          this._currentPageIndex = index;
        });
      },
    );
  }

  List<BottomNavigationBarItem> _bottomNavigationBarItemList() {
    List<dynamic> list = tabBar['list'];
    List<BottomNavigationBarItem> items = [];
    for (int i = 0; i < list.length; i++) {
      var item = list[i];
      var value = {
        "icon": _currentPageIndex == i
            ? item['selectedIconPath']
            : item['iconPath'],
        "iconWidth": WXDouble.parseString(tabBar['iconWidth']),
        "iconHeight": WXDouble.parseString(tabBar['iconHeight']),
        "fontSize": WXDouble.parseString(tabBar['fontSize']),
        "text": item['text']
      };
      items.add(_bottomNavigationBarItem(value));
    }
    return items;
  }

  BottomNavigationBarItem _bottomNavigationBarItem(dynamic value) {
    return BottomNavigationBarItem(
      icon: Image.asset(
        value['icon'],
        width: value['iconWidth'],
        height:value['iconHeight'],
      ),
      title: Text(
        value['text'],
        style: TextStyle(fontSize:value['fontSize']),
      ),
    );
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

  @override
  Widget build(BuildContext context) {
    if (isTabBar) {
      return Scaffold(
        key: PageStorageKey(_tree),
        appBar: AppBar(
          title: Text(_title),
          centerTitle: true,
          backgroundColor: _appBarColor,
        ),
        body: _tree,
        backgroundColor: _backgroundColor,
        bottomNavigationBar: _bottomNavigationBar(),
      );
    } else {
      return Scaffold(
          key: PageStorageKey(_tree),
          appBar: AppBar(
            title: Text(_title),
            centerTitle: true,
            backgroundColor: _appBarColor,
          ),
          backgroundColor: _backgroundColor,
          body: _tree);
    }
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
      case 'removeElement':
        _factory.removeElement(params, id: _pageId);
        break;
      case 'updateAttrs':
      case 'updateStyle':
        _factory.updateAttrs(params, id: _pageId);
        break;
      case 'updateTitle':
        updateTitle(params);
        break;
      case 'setBackgroundColor':
        setBackgroundColor(params);
        break;
      case 'setNavigationBarColor':
        setNavigationBarColor(params);
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

import 'dart:async';
import '../util/wx_log.dart';
import '../model/wx_js_callback.dart';

class WXEventBusManager {
  factory WXEventBusManager() => _getInstance();
  static WXEventBusManager get instance => _getInstance();
  static WXEventBusManager _instance;
  WXEventBusManager._internal() {}

  static WXEventBusManager _getInstance() {
    if (_instance == null) {
      _instance = new WXEventBusManager._internal();
    }
    return _instance;
  }

  Map<Object, List<WXJSCallback>> events = {};

  void on(String eventName,WXJSCallback callback)  {
    if (eventName == null) {
      return;
    }
    if(events[eventName] != null) {
      events[eventName] = new List<WXJSCallback>();
    }
    events[eventName].add(callback);
  }

  void off(eventName,String pageId) {
    var list = events[eventName];
    if (eventName == null || list == null) {
      return;
    }
    if(pageId != null && pageId.isNotEmpty) {
      int len = list.length - 1;
      for (var i = len; i > -1; --i) {
        WXJSCallback callback = list[i];
        if(callback.pageId == pageId) {
          list.remove(callback);
        }
      }
    } else {
      events[eventName] = null;
    }
  }

  void emit(eventName, dynamic data) {
    var list = events[eventName];
    if (list == null) return;
    int len = list.length - 1;
    for (var i = len; i > -1; --i) {
      WXJSCallback callback = list[i];
      callback.invoke(data);
    }
  }
}

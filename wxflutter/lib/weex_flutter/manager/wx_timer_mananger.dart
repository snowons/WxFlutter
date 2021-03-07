import 'dart:async';
import '../util/wx_log.dart';
import '../model/wx_js_callback.dart';

class WXTimerManager {
  factory WXTimerManager() => _getInstance();
  static WXTimerManager get instance => _getInstance();
  static WXTimerManager _instance;
  WXTimerManager._internal() {}

  static WXTimerManager _getInstance() {
    if (_instance == null) {
      _instance = new WXTimerManager._internal();
    }
    return _instance;
  }

  Map<String, Timer> _timers = {};

  createTimer(WXJSCallback callback,int milliseconds) {
    const ms = const Duration(milliseconds: 1);
    var duration = milliseconds == null ? 0 : ms * milliseconds;
    String key = callback.pageId+callback.callbackId;
    Timer timer;
    if(!_timers.containsKey(key)) {
      timer = new Timer(duration, (){
        if (callback != null) {
          callback.invoke({'code': WXJSCallbackResult.kWXJSCallbackSuccess.index});
        }
        _timers.remove(key);
      });
      _timers.putIfAbsent(key, () => timer);
    } else {
      WXLog.log("Timer", 'Timer $key is exist]');
    }
  }

  createPeriodicTimer(WXJSCallback callback,int milliseconds) {
    const ms = const Duration(milliseconds: 1);
    var duration = milliseconds == null ? 0 : ms * milliseconds;
    String key = callback.pageId+callback.callbackId;
    Timer timer;
    if(!_timers.containsKey(key)) {
      timer = Timer.periodic(duration , (timer){
        if (callback != null) {
          callback.invoke({'code': WXJSCallbackResult.kWXJSCallbackSuccess.index},keepAlive: true);
        }
      });
      _timers.putIfAbsent(key, () => timer);
    } else {
      WXLog.log("Timer", 'Timer $key is exist]');
    }
  }

  clearTimer(WXJSCallback callback) {
    String key = callback.pageId+callback.callbackId;
    Timer timer;
    if(!_timers.containsKey(key)) {
      WXLog.error("Timer", 'Timer $key is not found]');

    } else {
      timer = _timers[key];
      if(timer.isActive){
        timer.cancel();
      }
      _timers.remove(key);
    }
  }

  void dispose(String pageId) {
    _timers.forEach((key, value) {
      if(key.startsWith(pageId)) {
        if(value.isActive){
          value.cancel();
        }
        _timers.remove(key);
      }
    });
  }
}

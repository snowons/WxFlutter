import '../annotation/annotation_obj.dart';
import '../annotation/reflector.dart';
import '../manager/wx_storage_manager.dart';
import '../model/wx_js_callback.dart';
import 'wx_module.dart';
import 'dart:async';
import '../manager/wx_timer_mananger.dart';

@Module('timer')
@Reflector()
class WXTimer extends WXModule {

  @JSMethod()
  void setTimeout(WXJSCallback callback,int milliseconds) {
    WXTimerManager().createTimer(callback, milliseconds);
  }

  @JSMethod()
  void clearTimeout(WXJSCallback callback) {
    WXTimerManager().clearTimer(callback);
  }

  @JSMethod()
  void setInterval(WXJSCallback callback,int milliseconds) {
    WXTimerManager().createPeriodicTimer(callback, milliseconds);
  }

  @JSMethod()
  void clearInterval(WXJSCallback callback) {
    WXTimerManager().clearTimer(callback);
  }
}

import '../annotation/annotation_obj.dart';
import '../annotation/reflector.dart';
import '../model/wx_js_callback.dart';
import 'wx_module.dart';
import '../manager/wx_event_bus_manager.dart';

@Module('eventBus')
@Reflector()
class WXEventBus extends WXModule {

  @JSMethod()
  void on(String eventName,WXJSCallback callback)  {
    WXEventBusManager().on(eventName, callback);
  }

  @JSMethod()
  void off(String eventName,String pageId)  {
    WXEventBusManager().off(eventName,pageId);
  }

  @JSMethod()
  void emit(String eventName,String value)  {
    WXEventBusManager().emit(eventName,value);
  }
}

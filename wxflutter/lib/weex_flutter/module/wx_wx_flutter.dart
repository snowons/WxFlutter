import '../bridge/wx_jsc_runtime_manager.dart';
import '../annotation/annotation_obj.dart';
import '../annotation/reflector.dart';
import '../model/wx_js_callback.dart';
import 'wx_module.dart';

@Module('wxFlutter')
@Reflector()
class WXWxFlutter extends WXModule {
  static final List commonMethodList = [
    'updateTitle',
    'setBackgroundColor',
    'setNavigationBarColor'];

  @JSMethod()
  void invoke(dynamic data,WXJSCallback callback) {
    String method = data['method'] ;
    String pageId = callback?.pageId;
    Map<String, WXJSMessageHandler> handlers = WXJSCRuntimeManager().handlers;
    bool find = commonMethodList.indexOf(method) >= 0 && handlers.containsKey(pageId);
    if(find) {
      WXJSMessageHandler handler = handlers[pageId];
      handler.onMessage(method,data);
    }
    if(callback != null) {
      callback.invoke({
        'code':find ? WXJSCallbackResult.kWXJSCallbackSuccess.index : WXJSCallbackResult.kWXJSCallbackFail.index,

      });
    }
  }
}

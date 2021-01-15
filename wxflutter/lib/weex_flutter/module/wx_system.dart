import 'package:get_it/get_it.dart';
import '../annotation/annotation_obj.dart';
import '../annotation/reflector.dart';
import '../model/wx_js_callback.dart';
import 'wx_module.dart';
import '../service/wx_focus_scope.dart';
@Module('system')
@Reflector()
class WXSystem extends WXModule {

  @JSMethod()
  void requestFocus( WXJSCallback callback) {
    GetIt.instance<WXFocusScopeService>().requestFocus();
  }
}

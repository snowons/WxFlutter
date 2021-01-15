
import 'package:flutter/cupertino.dart';
import 'package:get_it/get_it.dart';
import '../annotation/annotation_obj.dart';
import '../annotation/reflector.dart';
import '../model/wx_js_callback.dart';
import 'wx_module.dart';
import '../service/wx_navigate_service.dart';
import '../wx_base_page.dart';
@Module('navigate')
@Reflector()
class WXNavigate extends WXModule {
  @JSMethod()
  void push(Map model, WXJSCallback callback) {
    WXBasePage page = new WXBasePage({
      'title':model['title'],
      'uri':model['uri'],
      'url':model['url'],
      'path':model['path'],
      'type':model['type']
    });
    GetIt.instance<WXNavigateService>().push(new CupertinoPageRoute<void>(builder: (ctx) => page));
  }

  @JSMethod()
  void pop( WXJSCallback callback) {
    GetIt.instance<WXNavigateService>().pop();
  }
}

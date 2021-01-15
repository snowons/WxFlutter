import 'package:weex_flutter_demo/weex_flutter/util/wx_define.dart';

import 'wx_js_callback.dart';
import '../manager/wx_callback_manager.dart';
import '../util/wx_log.dart';

class WXModuleCallback implements WXJSCallback {
  @override
  String callbackId;

  @override
  String pageId;

  WXModuleCallback(this.callbackId, this.pageId);

  @override
  void invoke(Object data) {
    WXLog.log(kWXFlutterTag,'WXModuleCallback callbackId:$callbackId, pageId:$pageId, data: $data');
    WXCallbackManager.instance.exec(this.pageId, this.callbackId, data);
  }
}

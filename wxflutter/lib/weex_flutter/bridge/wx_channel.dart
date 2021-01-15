import 'dart:async';
import '../bridge/wx_jsc_runtime_manager.dart';

class WXChannel {
  final String pageId;
  WXChannel(this.pageId);

  Future<T> invokeMethod<T>(String method, [dynamic arguments]) async {
    assert(method != "__event__");
    var pageId = arguments["pageId"];

    String result = '';
    if (method == 'event') {
      result = WXJSCRuntimeManager.instance.handleEvent(pageId, arguments);
    }

    return Future.delayed(
        Duration(milliseconds: 100), () => Future.value(result as dynamic));
  }
}

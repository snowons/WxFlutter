enum WXJSCallbackResult {
  kWXJSCallbackSuccess,
  kWXJSCallbackFail,
}

abstract class WXJSCallback {
  String callbackId;
  String pageId;

  void invoke(dynamic data,{bool keepAlive = false});
}

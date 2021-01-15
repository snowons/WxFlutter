enum WXJSCallbackResult {
  kWXJSCallbackSuccess,
  kWXJSCallbackFail,
}

abstract class WXJSCallback {
  String callbackId;
  String pageId;

  void invoke(Object data);
}

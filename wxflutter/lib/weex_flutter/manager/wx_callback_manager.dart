import '../bridge/wx_jsc_runtime_manager.dart';

class WXCallbackManager {
  factory WXCallbackManager() => _getInstance();
  static WXCallbackManager get instance => _getInstance();
  static WXCallbackManager _instance;
  WXCallbackManager._internal() {}

  static WXCallbackManager _getInstance() {
    if (_instance == null) {
      _instance = new WXCallbackManager._internal();
    }
    return _instance;
  }

  exec(String pageId,String callbackId,dynamic value) {
      List<dynamic> arguments = [];
      arguments.add(callbackId);
      arguments.add(value);
      WXJSCRuntimeManager.instance.flutterCallJavaScript(pageId, "callback", arguments);
  }
}

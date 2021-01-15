import 'package:flutter/cupertino.dart';
import 'package:weex_flutter_demo/weex_flutter/bridge/wx_jsc_runtime_manager.dart';
import 'package:get_it/get_it.dart';

import '../util/wx_define.dart';
import '../util/wx_log.dart';
import '../util/wx_device_utils.dart';
import '../service/wx_navigate_service.dart';
import '../service/wx_focus_scope.dart';

final GetIt locator = GetIt.instance;

class WXSdkEngine with WXJSMessageHandler{
  factory WXSdkEngine() => _getInstance();
  static WXSdkEngine get instance => _getInstance();
  static WXSdkEngine _instance;
  WXSdkEngine._internal() {}

  bool isFrameworkReady = false;

  static Object weexEnv;
  static WXSdkEngine _getInstance() {
    if (_instance == null) {
      _instance = new WXSdkEngine._internal();
    }
    return _instance;
  }

  initSDKEnvironment() {
    //get_it
    setupLocator();
    if(weexEnv == null) {
      WXEnvironment().getInfo().then((value) {
        weexEnv = value;
        WXLog.log(kWXFlutterTag, weexEnv);

        WXJSCRuntimeManager.instance.loadFramework('root',this).then((value) {
          WXLog.log(kWXFlutterTag,'WxFlutter Framework is ready');
          isFrameworkReady = true;
        });
      });
    }
  }

  void setupLocator() {
    locator.registerSingleton(WXNavigateService());
    locator.registerSingleton(WXFocusScopeService());
  }

  @override
  void onMessage(String method, Map<String,dynamic > params) {
    // TODO: implement onMessage
    WXLog.log('', method+params.toString());
  }
}

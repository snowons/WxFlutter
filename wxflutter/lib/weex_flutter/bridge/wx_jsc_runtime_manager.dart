import 'dart:convert';

import 'package:flutter/services.dart' show rootBundle;
import 'package:reflectable/reflectable.dart';
import '../manager/wx_sdk_engine.dart';
import './wx_jsc_runtime.dart';
import '../annotation/reflector.dart';
import '../flutter_js/flutter_js.dart';
import '../flutter_js/javascriptcore/flutter_jscore.dart';
import '../manager/wx_component_factory.d.dart';
import '../manager/wx_module_factory.e.dart';
import '../util/wx_reflect_utils.dart';
import '../util/wx_define.dart';
import '../util/wx_log.dart';
import '../manager/wx_downloader_manager.dart';
import '../manager/wx_web_socket_manager.dart';
import '../util/wx_debug.dart';
import '../manager/wx_timer_mananger.dart';

abstract class WXJSMessageHandler {
  void onMessage(String method, Map<String, dynamic> params);
}

class WXJSCRuntimeManager {
  Map<String, JavascriptRuntime> vm = Map();

  Map<String, JSValue> pageInstances = Map();
  Map<String, WXJSMessageHandler> handlers = Map();

  factory WXJSCRuntimeManager() => _getInstance();

  static WXJSCRuntimeManager get instance => _getInstance();
  static WXJSCRuntimeManager _instance;

  WXJSCRuntimeManager._internal() {}

  static WXJSCRuntimeManager _getInstance() {
    if (_instance == null) {
      _instance = new WXJSCRuntimeManager._internal();
    }
    return _instance;
  }

  Future loadFramework(String pageId, WXJSMessageHandler handler) async {
    /// create framework vm
    JavascriptRuntime runtime = getJavascriptRuntime();
    vm.putIfAbsent(pageId, () => runtime);
    handlers.putIfAbsent(pageId, () => handler);
    setupBridge(runtime);

    /// load framework
    String loadString = await rootBundle
        .loadString("assets/js/wxflutter-weex-js-framework.js")
        .then((result) {
      return result;
    });
    _runJs(pageId, loadString);

    JSContext context = (runtime as WXJSCRuntime).context;
    JSValue value = JSValue.makeFromJSONString(
        context, JsonEncoder().convert([WXSdkEngine.weexEnv]));
    context.globalObject.setProperty(
        'WXEnvironment', value, JSPropertyAttributes.kJSPropertyAttributeNone);

    registerModules(pageId);
    registerComponents(pageId);

    debugObject(context.globalObject, 'globalObject');

    return new Future(() => null);
  }

  void registerModules(String pageId) {
    JavascriptRuntime runtime = getRuntime();
    JSContext context = (runtime as WXJSCRuntime).context;

    WXModuleFactoryImpl().innerMap.forEach((key, value) {
      Map map = value[0];
      var obj = {key: map['methods']};
      callJSMethod(
          "registerModules", context.globalObject, convertParams(context, obj));
    });
  }

  void registerComponents(String pageId) {
    JavascriptRuntime runtime = getRuntime();
    JSContext context = (runtime as WXJSCRuntime).context;

    WXComponentFactoryImpl().innerMap.forEach((key, value) {
      Map map = value[0];

      var obj = [
        {'methods': map['methods'], 'type': key}
      ];
      WXLog.log("registerComponents tag", obj);
      callJSMethod("registerComponents", context.globalObject,
          convertParams(context, obj));
    });
  }

  JSValuePointer convertParams(context, dynamic params) {
    return JSValuePointer(
        JSValue.makeFromJSONString(context, JsonEncoder().convert(params))
            .pointer);
  }

  void debugObject(JSObject object, String objName) {
    JSPropertyNameArray arr = object.copyPropertyNames();
    for (int x = 0; x < arr.count; x++) {
      String name = arr.propertyNameArrayGetNameAtIndex(x);
      WXLog.debug(
          kWXFlutterTag, '[DebugObject]' + objName + ' propertyName = ' + name);
    }
  }

  void dispose(pageId) {
    JavascriptRuntime runtime = getRuntime();
    JSContext context = (runtime as WXJSCRuntime).context;
    var obj = [pageId];
    callJSMethod(
        "destroyInstance", context.globalObject, convertParams(context, obj));
    pageInstances.remove(pageId);
    handlers.remove(pageId);
    WXTimerManager().dispose(pageId);
  }

  void setupBridge(JavascriptRuntime runtime) {
    /// __updateComponentData
    runtime.onMessage('__updateComponentData', (dynamic data) {
      try {
        dynamic args = data['args'];
        var pageId = data['pageId'];
        Map<String, dynamic> params = args[1];
        params.putIfAbsent('parentRef', () => args[0]);
        WXJSMessageHandler handler = handlers[pageId];
        handler.onMessage('__updateComponentData', params);
      } on Exception catch (e) {
        WXLog.error(kWXFlutterTag, 'Exception on __updateComponentData: $e');
      } on Error catch (e) {
        WXLog.error(kWXFlutterTag, 'Error on __updateComponentData: $e');
      }
    });

    /// callAddElement
    runtime.onMessage('addElement', (dynamic data) {
      try {
        dynamic args = data['args'];
        var pageId = data['pageId'];
        Map<String, dynamic> params = args[1];
        params.putIfAbsent('parentRef', () => args[0]);
        WXJSMessageHandler handler = handlers[pageId];
        handler.onMessage('addElement', params);
      } on Exception catch (e) {
        WXLog.error(kWXFlutterTag, 'Exception on callAddElement: $e');
      } on Error catch (e) {
        WXLog.error(kWXFlutterTag, 'Error on callAddElement: $e');
      }
    });

    /// callCreateBody
    runtime.onMessage('createBody', (dynamic data) {
      try {
        dynamic args = data['args'];
        var params = args[0];
        var pageId = data['pageId'];

        WXJSMessageHandler handler = handlers[pageId];
        handler.onMessage('createBody', params);
      } on Exception catch (e) {
        WXLog.error(kWXFlutterTag, 'Exception on callCreateBody: $e');
      } on Error catch (e) {
        WXLog.error(kWXFlutterTag, 'Error on callCreateBody: $e');
      }
    });

    /// callMoveElement
    runtime.onMessage('moveElement', (dynamic data) {
      try {
        WXLog.log(kWXFlutterTag, 'JS call callMoveElement: $data');
        dynamic args = data['args'];
        var pageId = data['pageId'];
        WXJSMessageHandler handler = handlers[pageId];
        handler.onMessage('moveElement', args);

      } on Exception catch (e) {
        WXLog.error(kWXFlutterTag, 'Exception on callMoveElement: $e');
      } on Error catch (e) {
        WXLog.error(kWXFlutterTag, 'Error on callMoveElement: $e');
      }
    });

    /// callRemoveElement
    runtime.onMessage('removeElement', (dynamic data) {
      try {
        WXLog.log(kWXFlutterTag, 'JS call removeElement: $data');
        dynamic args = data['args'];
        var pageId = data['pageId'];
        Map<String, dynamic> params = Map();
        params.putIfAbsent('args', () => args);
        WXJSMessageHandler handler = handlers[pageId];
        handler.onMessage('removeElement', params);

      } on Exception catch (e) {
        WXLog.error(kWXFlutterTag, 'Exception on callRemoveElement: $e');
      } on Error catch (e) {
        WXLog.error(kWXFlutterTag, 'Error on callRemoveElement: $e');
      }
    });

    /// callUpdateAttrs
    runtime.onMessage('updateAttrs', (dynamic data) {
      try {
        dynamic args = data['args'];
        Map<String, dynamic> params = args[1];
        params.putIfAbsent('ref', () => args[0]);
        var pageId = data['pageId'];

        WXJSMessageHandler handler = handlers[pageId];
        handler.onMessage('updateAttrs', params);
      } on Exception catch (e) {
        WXLog.error(kWXFlutterTag, 'Exception on callUpdateAttrs: $e');
      } on Error catch (e) {
        WXLog.error(kWXFlutterTag, 'Error on callUpdateAttrs: $e');
      }
    });

    /// callUpdateStyle
    runtime.onMessage('updateStyle', (dynamic data) {
      try {
        dynamic args = data['args'];
        Map<String, dynamic> params = args[1];
        params.putIfAbsent('ref', () => args[0]);
        var pageId = data['pageId'];

        WXJSMessageHandler handler = handlers[pageId];
        handler.onMessage('updateStyle', params);
      } on Exception catch (e) {
        WXLog.error(kWXFlutterTag, 'Exception on callUpdateStyle: $e');
      } on Error catch (e) {
        WXLog.error(kWXFlutterTag, 'Error on callUpdateStyle: $e');
      }
    });

    /// createFinish
    runtime.onMessage('createFinish', (dynamic data) {
      try {
        /// TODO
        // dynamic args = data['args'];
        // var pageId = data['pageId'];
        //
        // WXJSMessageHandler handler = handlers[pageId];
        // handler.onMessage('createFinish', null);
        WXLog.log(kWXFlutterTag, 'createFinish: ##');
      } on Exception catch (e) {
        WXLog.error(kWXFlutterTag, 'Exception on createFinish: $e');
      } on Error catch (e) {
        WXLog.error(kWXFlutterTag, 'Error on createFinish: $e');
      }
    });

    /// callNativeComponent
    runtime.onMessage('callNativeComponent', (dynamic data) {
      try {
        var pageId = data['pageId'];
        WXJSMessageHandler handler = handlers[pageId];
        handler.onMessage('callNativeComponent', data);
      } on Exception catch (e) {
        WXLog.error(kWXFlutterTag, 'Exception on callNativeComponent: $e');
      } on Error catch (e) {
        WXLog.error(kWXFlutterTag, 'Error on callNativeComponent: $e');
      }
    });

    /// callNativeModule
    runtime.onMessage('callNativeModule', (dynamic data) {
      try {
        String module = data['module'];
        String method = data['method'];
        bool lastIsCallback = true;
        if(module == 'timer') {
          lastIsCallback = false;
        }
        if (WXModuleFactoryImpl().innerMap.containsKey(module)) {
          Map m = WXModuleFactoryImpl().innerMap[module][0];
          Type clazz = m['clazz'];
          dynamic instance = WXModuleFactoryImpl().instanceFromClazz(clazz);
          InstanceMirror instanceMirror = reflector.reflect(instance);
          List<dynamic> params =
              WXReflectUtils.genInstanceMethodParams(data, clazz, reflector,lastIsCallback: lastIsCallback);
          instanceMirror.invoke(method, params);
        }
        List<dynamic> args = data['args'];
        WXLog.debug(kWXFlutterTag, 'JS call callNativeModule: $args');
      } on Exception catch (e) {
        WXLog.error(kWXFlutterTag, 'Exception on callNativeModule: $e');
      } on Error catch (e) {
        WXLog.error(kWXFlutterTag, 'Error on callNativeModule: $e');
      }
    });
  }

  JavascriptRuntime getRuntime({String vmId = 'root'}) {
    if (vm.length > 0) {
      return vm[vmId ?? 'root'];
    }
  }

  JSValue _runJs(String pageId, String script) {
    JavascriptRuntime runtime = getRuntime();
    JsEvalResult runJSResult = runtime.evaluate(script);
    JSValue resultValue = JSValuePointer(runJSResult.rawResult)
        .getValue((runtime as WXJSCRuntime).context);
    return resultValue;
  }

  String handleEvent(String pageId, [dynamic arguments]) {
    flutterCallJavaScript(pageId, 'fireEvent', arguments['event']);
  }

  /// pageId 每一个页面的 runtime id
  /// method: 'callback','fireEventSync','fireEvent','componentHook'
  /// arguments: 结构如下
  ///   ref, 事件名，  参数{}
  /// [ 8 , click ,  { position :  { y : 188 , width : 750 , height : 36 , pageY : 19.33331298828125 , x : 0 , pageX : 143.3333129882812 }  , timestamp : 1605750127053.335 }  ,  {  }  ]
  void flutterCallJavaScript(String pageId, String method, dynamic arguments) {
    JavascriptRuntime runtime = getRuntime();
    JSContext context = (runtime as WXJSCRuntime).context;

    /// 调用JS 参数结构
    /// [id,[{method:"fireEvent",module:'',args:[8,click,{}]}
    List<JSValue> array = List();
    JSValue id = JSValue.makeString(context, pageId);
    array.add(id);

    List<Map<String, dynamic>> tasks = List();
    Map<String, dynamic> params = Map();
    params.putIfAbsent("method", () => method);
    params.putIfAbsent("args", () => arguments as List<dynamic>);
    tasks.add(params);
    JSValue data =
        JSValue.makeFromJSONString(context, JsonEncoder().convert(tasks));
    array.add(data);
    callJSMethod("__WEEX_CALL_JAVASCRIPT__", context.globalObject,
        JSValuePointer.array(array));
  }

  Future renderPage(String pageId, Map<String, dynamic> options, WXJSMessageHandler handler,{reload=false}) async {
    JavascriptRuntime runtime = getRuntime();
    if(!handlers.containsKey(pageId)) {
      handlers.putIfAbsent(pageId, () => handler);
    }  
 
    String script = '';
    String bundleUrl = '';
    if(WXDebug.isDebug && WXWebSocketManager().isConnected) {
      script = await WXDownloaderManager.instance.getJSBundle(options['bundleUrl']).then((value) {
        return value;
      });
    } else {
      script = await rootBundle.loadString(options['bundleUrl']).then((result) {
        return result;
      });
    }
    if(pageInstances.containsKey(pageId)) {
      pageInstances.remove(pageId);
    }
    JSValue instance = createInstance(pageId, script,bundleUrl,options);
    pageInstances.putIfAbsent(pageId, () => instance);
  }

  JSValue createInstance(String pageId, String script,String url,Map<String, dynamic> args) {
    JavascriptRuntime runtime = getRuntime();
    JSContext context = (runtime as WXJSCRuntime).context;

    var immutableOptions = {
      'options':args,
      'bundleType': 'Vue',
      'bundleUrl':url,
      'debug': WXDebug.isDebug,
      'env': WXSdkEngine.weexEnv
    };

    List<JSValue> array = List();
    JSValue id = JSValue.makeString(context, pageId);
    JSValue options =
        JSValue.makeFromJSONString(context, JsonEncoder().convert(immutableOptions));
    JSValue data = JSValue.makeString(context, JsonEncoder().convert([]));
    array.add(id);
    array.add(options);
    array.add(data);

    JSValuePointer params = JSValuePointer.array(array);
    JSValue instanceContext =
        callJSMethod("createInstanceContext", context.globalObject, params);

    JSPropertyNameArray arr = instanceContext.toObject().copyPropertyNames();

    for (int x = 0; x < arr.count; x++) {
      String name = arr.propertyNameArrayGetNameAtIndex(x);
      if (name == 'Vue') {
        context.globalObject.prototype =
            instanceContext.toObject().getProperty(name);
      }
      context.globalObject.setProperty(
          name,
          instanceContext.toObject().getProperty(name),
          JSPropertyAttributes.kJSPropertyAttributeNone);
    }

    // debugObject(instanceContext.toObject(), 'createInstanceContext');

    // debugObject(context.globalObject, 'globalObject');
    // JSValue result =  context.evaluate(jsBundleString);
    // print("result = "+result.string);
    _runJs(pageId, script);
    return instanceContext;
  }

  JSValue callJSMethod(String method, JSObject obj, JSValuePointer args) {
    JSContext context = obj.context;
    JSValue _jsMethod = context.globalObject.getProperty(method);
    JSValuePointer exception = JSValuePointer();

    JSValue result =
        _jsMethod.toObject().callAsFunction(obj, args, exception: exception);

    JSValue exceptionValue = exception.getValue(context);
    if (exceptionValue.isObject) {
      String result =
          'ERROR: ${exceptionValue.toObject().getProperty("message").string}';
      WXLog.error('[Flutter Calling JS]', '[$method], result=  $result');
    } else {
      WXLog.debug('[Flutter Calling JS]', '[$method], result = $result');
    }
    return result;
  }
}

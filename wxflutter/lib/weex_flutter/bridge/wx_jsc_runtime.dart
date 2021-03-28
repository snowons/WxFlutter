import 'dart:convert';
import 'dart:ffi';
import 'dart:typed_data';
import 'package:ffi/ffi.dart';
import '../flutter_js/javascript_runtime.dart';
import '../flutter_js/javascriptcore/binding/js_context_ref.dart';
import '../flutter_js/javascriptcore/binding/js_object_ref.dart'
as jsObject;
import '../flutter_js/javascriptcore/binding/js_string_ref.dart';
import '../flutter_js/javascriptcore/binding/js_value_ref.dart';
import '../flutter_js/javascriptcore/flutter_jscore.dart';
import '../flutter_js/javascriptcore/jscore/js_value.dart';
import '../flutter_js/javascriptcore/jscore_bindings.dart';
import 'package:flutter/services.dart' show rootBundle;
import '../util/wx_define.dart';
import '../util/wx_log.dart';

class WXJSCRuntime extends JavascriptRuntime {
  Pointer _contextGroup;
  Pointer _globalContext;
  JSContext context;
  Pointer _globalObject;

  String onMessageFunctionName;
  String sendMessageFunctionName;

  bool isFrameworkReady = false;

  WXJSCRuntime() {
    _contextGroup = jSContextGroupCreate();
    _globalContext = jSGlobalContextCreateInGroup(_contextGroup, nullptr);
    _globalObject = jSContextGetGlobalObject(_globalContext);

    context = JSContext(_globalContext);

    _sendMessageDartFunc = _sendMessage;

    Pointer<Utf8> funcNameCString = Utf8.toUtf8('callNative');
    var functionObject = jSObjectMakeFunctionWithCallback(
        _globalContext,
        jSStringCreateWithUTF8CString(funcNameCString),
        Pointer.fromFunction(sendMessageBridgeFunction));
    jSObjectSetProperty(
        _globalContext,
        _globalObject,
        jSStringCreateWithUTF8CString(funcNameCString),
        functionObject,
        jsObject.JSPropertyAttributes.kJSPropertyAttributeNone,
        nullptr);
    free(funcNameCString);

    init();
  }

  int executePendingJob() {
    evaluate('(function(){})();');
    return 0;
  }

  @override
  void initChannelFunctions() {
    JavascriptRuntime.channelFunctionsRegistered[getEngineInstanceId()] = {};
  }

  JsEvalResult evaluate(String js) {
    Pointer<Utf8> scriptCString = Utf8.toUtf8(js);

    JSValuePointer exception = JSValuePointer();
    var jsValueRef = jSEvaluateScript(
        _globalContext,
        jSStringCreateWithUTF8CString(scriptCString),
        nullptr,
        nullptr,
        1,
        exception.pointer);
    free(scriptCString);

    String result;

    JSValue exceptionValue = exception.getValue(context);
    bool isPromise = false;
    if (exceptionValue.isObject) {
      result =
      'ERROR: ${exceptionValue.toObject().getProperty("message").string}';
    } else {
      result = _getJsValue(jsValueRef);
      JSValue resultValue = JSValuePointer(jsValueRef).getValue(context);

      isPromise = resultValue.isObject &&
          resultValue.toObject().getProperty('then').isObject &&
          resultValue.toObject().getProperty('catch').isObject;
    }

    return JsEvalResult(
      result,
      exceptionValue.isObject ? exceptionValue.toObject().pointer : jsValueRef,
      isError: result.startsWith('ERROR:'),
      isPromise: isPromise,
    );
  }

  @override
  void dispose() {
    jSContextGroupRelease(_contextGroup);
  }

  @override
  String getEngineInstanceId() => hashCode.abs().toString();

  @override
  bool setupBridge(String channelName, Function(dynamic args) fn) {
    final channelFunctionCallbacks =
    JavascriptRuntime.channelFunctionsRegistered[getEngineInstanceId()];

    if (channelFunctionCallbacks.keys.contains(channelName)) return false;

    channelFunctionCallbacks[channelName] = fn;

    return true;
  }

  static Pointer sendMessageBridgeFunction(
      Pointer ctx,
      Pointer function,
      Pointer thisObject,
      int argumentCount,
      Pointer<Pointer> arguments,
      Pointer<Pointer> exception) {
    // JSValuePointer(exception).getValue(JSContext(ctx));
    // JSValue exceptionValue =JSValuePointer(exception).getValue(JSContext(ctx));
    // if (exceptionValue.isObject) {
    //   String errorString = 'ERROR: ${exceptionValue.toObject().getProperty("message").string}';
    //   throw Exception(errorString);
    // }

    if (_sendMessageDartFunc != null) {
      _sendMessageDartFunc(
          ctx, function, thisObject, argumentCount, arguments, exception);
    }

    return nullptr;
  }

  String _getJsValue(Pointer jsValueRef) {
    if (jSValueIsNull(_globalContext, jsValueRef) == 1) {
      return 'null';
    } else if (jSValueIsUndefined(_globalContext, jsValueRef) == 1) {
      return 'undefined';
    }
    var resultJsString =
    jSValueToStringCopy(_globalContext, jsValueRef, nullptr);
    var resultCString = jSStringGetCharactersPtr(resultJsString);
    int resultCStringLength = jSStringGetLength(resultJsString);
    if (resultCString == nullptr) {
      return 'null';
    }
    String result = String.fromCharCodes(Uint16List.view(
        resultCString.cast<Uint16>().asTypedList(resultCStringLength).buffer,
        0,
        resultCStringLength));
    jSStringRelease(resultJsString);
    return result;
  }

  static jsObject.JSObjectCallAsFunctionCallbackDart _sendMessageDartFunc;

  Pointer _sendMessage(
      Pointer ctx,
      Pointer function,
      Pointer thisObject,
      int argumentCount,
      Pointer<Pointer> arguments,
      Pointer<Pointer> exception) {
    String msg = 'No Message';
    if (argumentCount != 0) {
      msg = '';
      for (int i = 0; i < argumentCount; i++) {
        if (i != 0) {
          msg += '\n';
        }
        var jsValueRef = arguments[i];
        msg += _getJsValue(jsValueRef);
      }
    }

    final channelFunctions =
    JavascriptRuntime.channelFunctionsRegistered[getEngineInstanceId()];

    String channelName = _getJsValue(arguments[0]);
    String message = _getJsValue(arguments[1]);

    if (channelFunctions.containsKey(channelName)) {
      channelFunctions[channelName].call(jsonDecode(message));
    } else {
      var jsValueRef = arguments[1];
      if (jSValueIsArray(_globalContext, jsValueRef) == 1) {
        JSValue objValue = JSValuePointer(jsValueRef).getValue(context, 0);

        String serialized = objValue.createJSONString(null).string;
        // print("serialized "+serialized);
        List<dynamic> items = json.decode(serialized);
        if (items.length > 0) {
          Map item = items[0];
          item.putIfAbsent('pageId', () => channelName);
          String method = item['method'];
          if (item['component'] != null && item['component'].toString().length > 0) {
            channelFunctions["callNativeComponent"].call(item);
          }
          else if (item['module'].toString().compareTo("dom") == 0) {
            channelFunctions[method].call(item);
          } else if (item['module'] != null &&
              item['module'].toString().length > 0) {
            channelFunctions["callNativeModule"].call(item);
          } else {
            channelFunctions[method].call(item);
          }
        }
      } else if (jSValueIsObject(_globalContext, jsValueRef) == 1) {}
    }

    return nullptr;
  }

  dynamic convertToDart(value) {
    // Value types.
    if (value == null) return null;
    if (value is bool || value is num || value is DateTime || value is String)
      return value;

    // JsArray.
    if (value is Iterable) return value.map(convertToDart).toList();

    // JsObject.
    return null;
  }

  @override
  JsEvalResult callFunction(Pointer<NativeType> fn, Pointer<NativeType> obj) {
    JSValue fnValue = JSValuePointer(fn).getValue(context);
    JSObject functionObj = fnValue.toObject();
    JSValuePointer exception = JSValuePointer();
    JSValue result = functionObj.callAsFunction(
      functionObj,
      JSValuePointer(obj),
      exception: exception,
    );
    JSValue exceptionValue = exception.getValue(context);
    bool isPromise = false;

    if (exceptionValue.isObject) {
      throw Exception(
          'ERROR: ${exceptionValue.toObject().getProperty("message").string}');
    } else {
      isPromise = result.isObject &&
          result.toObject().getProperty('then').isObject &&
          result.toObject().getProperty('catch').isObject;
    }

    return JsEvalResult(
      _getJsValue(result.pointer),
      exceptionValue.isObject
          ? exceptionValue.toObject().pointer
          : result.pointer,
      isPromise: isPromise,
    );
  }

  @override
  T convertValue<T>(JsEvalResult jsValue) {
    if (jSValueIsNull(_globalContext, jsValue.rawResult) == 1) {
      return null;
    } else if (jSValueIsString(_globalContext, jsValue.rawResult) == 1) {
      return _getJsValue(jsValue.rawResult) as T;
    } else if (jSValueIsBoolean(_globalContext, jsValue.rawResult) == 1) {
      return (_getJsValue(jsValue.rawResult) == "true") as T;
    } else if (jSValueIsNumber(_globalContext, jsValue.rawResult) == 1) {
      String valueString = _getJsValue(jsValue.rawResult);

      if (valueString.contains(".")) {
        try {
          return double.parse(valueString) as T;
        } on TypeError {
          WXLog.error(kWXFlutterTag, 'Failed to cast $valueString... returning null');
          return null;
        }
      } else {
        try {
          return int.parse(valueString) as T;
        } on TypeError {
          WXLog.error(kWXFlutterTag, 'Failed to cast $valueString... returning null');
          return null;
        }
      }
    } else if (jSValueIsObject(_globalContext, jsValue.rawResult) == 1 ||
        jSValueIsArray(_globalContext, jsValue.rawResult) == 1) {
      JSValue objValue = JSValuePointer(jsValue.rawResult).getValue(context);
      String serialized = objValue.createJSONString(null).string;
      return jsonDecode(serialized);
    } else {
      return null;
    }
  }

  @override
  String jsonStringify(JsEvalResult jsValue) {
    JSValue objValue = JSValuePointer(jsValue.rawResult).getValue(context);
    return objValue.createJSONString(null).string;
  }

  @override
  Future<JsEvalResult> evaluateAsync(String code) {
    return Future.value(evaluate(code));
  }
}

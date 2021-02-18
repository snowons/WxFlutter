import 'package:reflectable/reflectable.dart';
import '../annotation/reflector.dart';
import '../model/wx_imp_callback.dart';
import '../model/wx_js_callback.dart';
import '../util/wx_log.dart';

class WXReflectUtils {
 static List<dynamic> genInstanceMethodParams(dynamic data,Type type, Reflector reflector) {
    List<dynamic> params = (data['args'] as List);
    List<dynamic> _options = getMethodParamsFromClazz(type,data['method']);
    if (params.length > _options.length) {
      WXLog.error('WXReflectUtils', 'params verify failed');
      return null;
    }
    ParameterMirror cb = _options.last;
    if (cb.reflectedType == WXJSCallback &&
        params.length == _options.length) {
      WXJSCallback moduleCallback =
      WXImpCallback(params.last.toString(), data['pageId']);
      params.removeLast();
      params.add(moduleCallback);
    }
    return params;
  }

 static List<ParameterMirror> getMethodParamsFromClazz(
      Type type, String method) {
    ClassMirror classMirror = reflector.reflectType(type);
    final declarations = classMirror.declarations;
    final constructors =
    List.from(classMirror.declarations.values.where((declare) {
      return declare is MethodMirror;
    }));

    final _options = <ParameterMirror>[];

    constructors.forEach((constructor) {
      if (constructor is MethodMirror) {
        if (constructor.simpleName == method) {
          final parameters = constructor.parameters;
          parameters.forEach((param) {
            Type type = param.reflectedType;
            _options.add(param);
          });
        }
      }
    });
    return _options;
  }

 static List<ParameterMirror> getConstructorOptions(
      Type type, Reflector reflector) {
    ClassMirror mirror = reflector.reflectType(type);

    final constructors = List.from(mirror.declarations.values.where((declare) {
      return declare is MethodMirror && declare.isConstructor;
    }));
    final _options = <ParameterMirror>[];
    constructors.forEach((constructor) {
      if (constructor is MethodMirror) {
        final parameters = constructor.parameters;
        parameters.forEach((param) {
          _options.add(param);
        });
      }
    });
    return _options;
  }
}
import 'package:reflectable/reflectable.dart';
import '../annotation/reflector.dart';

class WXReflectUtils {
  List<ParameterMirror> getMethodParams(
      Type type, Reflector reflector) {
    ClassMirror mirror = reflector.reflectType(type);

    final methodMirrors = List.from(mirror.declarations.values.where((declare) {
      return declare is MethodMirror;
    }));
    final _options = <ParameterMirror>[];
    methodMirrors.forEach((constructor) {
      if (constructor is MethodMirror) {
        final parameters = constructor.parameters;
        parameters.forEach((param) {
          _options.add(param);
        });
      }
    });
    return _options;
  }

  List<ParameterMirror> getConstructorOptions(
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
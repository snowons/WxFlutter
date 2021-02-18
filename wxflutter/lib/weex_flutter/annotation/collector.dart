import 'dart:convert' hide JsonDecoder;

import 'package:analyzer/dart/element/element.dart';
import 'package:source_gen/source_gen.dart';
import 'package:analyzer/dart/constant/value.dart';
import 'package:build/build.dart';

String wK(String key) {
  return "'${key}'";
}

enum CollectorType {
  collectorModule,
  collectorComponent
}

class Collector {
  CollectorType collectorType;
  Collector(this.collectorType);
  Map<String, List<Map<String, dynamic>>> clazzMap =
  <String, List<Map<String, dynamic>>>{};
  List<String> importList = <String>[];

  String clazzName;


  Map<String, DartObject> toStringDartObjectMap(
      Map<DartObject, DartObject> map) {
    return map.map((DartObject k, DartObject v) {
      return MapEntry<String, DartObject>(k.toStringValue(), v);
    });
  }

  Map<String, String> toStringStringMap(Map<DartObject, DartObject> map) {
    return map.map((DartObject k, DartObject v) {
      return MapEntry<String, String>(k.toStringValue(), v.toStringValue());
    });
  }

  void collect(
      ClassElement element, ConstantReader annotation, BuildStep buildStep) {
    final String className = element.name;
    clazzName = element.name;
    List<String> methodsList = [];

    element.methods.forEach((MethodElement method) {
      //获取方法中的注解 并且遍历
      method.metadata.forEach((ElementAnnotation annotation) {
        DartObject dartObject = annotation.computeConstantValue();

        //判断方法中的注解 是否是 JSMethod
        if(dartObject.type.name.compareTo("JSMethod") == 0) {
          methodsList.add(wK(method.displayName));
        }
      });


    });

    addEntryFromAlias(annotation, className,methodsList);


    if (buildStep.inputId.path.contains('lib/')) {
      importClazz(
          "package:${buildStep.inputId.package}/${buildStep.inputId.path.replaceFirst('lib/', '')}");
    } else {
      importClazz("${buildStep.inputId.path}");
    }
  }

  void addEntryFromAlias(ConstantReader reader, String className,List<String> methodList) {
    final String alias = reader.peek('alias')?.stringValue ?? className;

    List<String> list =  alias.split(',');
    if (list != null ) {
      final Map<String, dynamic> map =
      genMapConstantReader(reader, className,methodList);

      list.forEach((value) {
        addEntry("'${value}'", map);
      });
    }
  }

  Map<String, dynamic> genMapConstantReader(
      ConstantReader reader, String className,List<String> methodList) {
    final Map<String, dynamic> map = <String, dynamic>{wK('clazz'): className,wK('methods'): methodList};
    return map;
  }

  void addEntry(String key, Map<String, dynamic> value) {
    List<Map<String, dynamic>> list = clazzMap[key];
    if (null == list) {
      list = <Map<String, dynamic>>[];
      clazzMap[key] = list;
    }
    list.add(value);
  }

  void importClazz(String path) {
    importList.add(path);
  }
}

import 'package:analyzer/dart/element/element.dart';
import 'package:source_gen/source_gen.dart';
import 'package:build/build.dart';
import 'annotation_obj.dart';
import 'collector.dart';
import 'writer.dart';

class WXJSMethodGenerator extends GeneratorForAnnotation<JSMethod> {

  @override
  generateForAnnotatedElement(
      Element element, ConstantReader annotation, BuildStep buildStep) {
    return null;
  }
}

class ComponentGenerator extends GeneratorForAnnotation<Component> {
  static Collector collector = Collector(CollectorType.collectorComponent);

  @override
  generateForAnnotatedElement(
      Element element, ConstantReader annotation, BuildStep buildStep) {
    collector.collect(element, annotation, buildStep);
    return null;
  }
}

class ComponentWriterGenerator extends GeneratorForAnnotation<WXExportComponent> {
  Collector collector() {
    return ComponentGenerator.collector;
  }

  @override
  dynamic generateForAnnotatedElement(
      Element element, ConstantReader annotation, BuildStep buildStep) {
    collector().clazzName = element.name;
    collector().importClazz(buildStep.inputId.pathSegments.last) ;
    return Writer(collector()).write();
  }
}

class ModuleGenerator extends GeneratorForAnnotation<Module> {
  static Collector collector = Collector(CollectorType.collectorModule);

  @override
  generateForAnnotatedElement(
      Element element, ConstantReader annotation, BuildStep buildStep) {
    collector.collect(element, annotation, buildStep);
    return null;
  }
}

class ModuleWriterGenerator extends GeneratorForAnnotation<WXExportModule> {
  Collector collector() {
    return ModuleGenerator.collector;
  }

  @override
  dynamic generateForAnnotatedElement(
      Element element, ConstantReader annotation, BuildStep buildStep) {

    collector().clazzName = element.name;
    collector().importClazz(buildStep.inputId.pathSegments.last) ;
    return Writer(collector()).write();
  }
}

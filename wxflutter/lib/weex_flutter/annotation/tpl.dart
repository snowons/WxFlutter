const String clazzTpl = """
import 'dart:convert';

{{#refs}}
import '{{{path}}}';
{{/refs}}

class {{{clazzName}}}Impl extends {{{clazzName}}}{
  
  static final {{{clazzName}}}Impl _singleton = {{{clazzName}}}Impl._init();
  factory {{{clazzName}}}Impl() {
    return _singleton;
  }
  
  {{{clazzName}}}Impl._init(){}
  
  final Map<String, List<Map<String, dynamic>>> innerMap = <String, List<Map<String, dynamic>>>{{{clazzMap}}};

  dynamic instanceFromClazz(Type clazz) {
    {{{instanceFromClazz}}}
  }
}
""";

const String componentClazzTpl = """
import 'dart:convert';
import '../model/wx_component.dart';
import '../component/wx_base_widget.dart';
import '../bridge/wx_channel.dart';

{{#refs}}
import '{{{path}}}';
{{/refs}}

class {{{clazzName}}}Impl extends {{{clazzName}}}{
  
  static final {{{clazzName}}}Impl _singleton = {{{clazzName}}}Impl._init();
  factory {{{clazzName}}}Impl() {
    return _singleton;
  }
  
  {{{clazzName}}}Impl._init(){}
  
  final Map<String, List<Map<String, dynamic>>> innerMap = <String, List<Map<String, dynamic>>>{{{clazzMap}}};

  dynamic instanceFromClazz(Type clazz,WXBaseWidget parent, String pageId,
      WXChannel methodChannel, WXComponent component) {
    {{{instanceFromClazz}}}
  }
}
""";

const String instanceCreatedTpl = """
""";

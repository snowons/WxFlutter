import 'package:build/build.dart';
import 'package:source_gen/source_gen.dart';

import 'weex_flutter/annotation/generator.dart';

Builder wxBuilder(BuilderOptions options) =>
    LibraryBuilder(WXJSMethodGenerator(), generatedExtension: '.a.dart');

Builder wxComponentBuilder(BuilderOptions options) =>
    LibraryBuilder(ComponentGenerator(), generatedExtension: '.b.dart');

Builder wxModuleBuilder(BuilderOptions options) =>
    LibraryBuilder(ModuleGenerator(), generatedExtension: '.c.dart');

Builder wxComponentWriterBuilder(BuilderOptions options) =>
    LibraryBuilder(ComponentWriterGenerator(), generatedExtension: '.d.dart');

Builder wxModuleWriterBuilder(BuilderOptions options) =>
    LibraryBuilder(ModuleWriterGenerator(), generatedExtension: '.e.dart');

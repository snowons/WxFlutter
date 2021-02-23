// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// ModuleWriterGenerator
// **************************************************************************

import 'dart:convert';

import 'package:weex_flutter_demo/weex_flutter/module/wx_system.dart';
import 'package:weex_flutter_demo/weex_flutter/module/wx_http.dart';
import 'package:weex_flutter_demo/weex_flutter/module/wx_storage.dart';
import 'package:weex_flutter_demo/weex_flutter/module/wx_navigate.dart';
import 'package:weex_flutter_demo/weex_flutter/module/wx_timer.dart';
import 'wx_module_factory.dart';

class WXModuleFactoryImpl extends WXModuleFactory {
  static final WXModuleFactoryImpl _singleton = WXModuleFactoryImpl._init();
  factory WXModuleFactoryImpl() {
    return _singleton;
  }
  WXModuleFactoryImpl._init() {}
  final Map<String, List<Map<String, dynamic>>> innerMap =
      <String, List<Map<String, dynamic>>>{
    'system': [
      {
        'clazz': WXSystem,
        'methods': ['requestFocus']
      }
    ],
    'http': [
      {
        'clazz': WXHttp,
        'methods': ['fetch']
      }
    ],
    'storage': [
      {
        'clazz': WXStorage,
        'methods': ['setItem', 'getItem', 'removeItem', 'getAllKeys', 'clear']
      }
    ],
    'navigate': [
      {
        'clazz': WXNavigate,
        'methods': ['push', 'pop']
      }
    ],
    'timer': [
      {
        'clazz': WXTimer,
        'methods': [
          'setTimeout',
          'clearTimeout',
          'setInterval',
          'clearInterval'
        ]
      }
    ]
  };

  dynamic instanceFromClazz(Type clazz) {
    switch (clazz) {
      case WXSystem:
        return new WXSystem();
      case WXHttp:
        return new WXHttp();
      case WXStorage:
        return new WXStorage();
      case WXNavigate:
        return new WXNavigate();
      case WXTimer:
        return new WXTimer();
      default:
        return null;
    }
  }
}

// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// ModuleWriterGenerator
// **************************************************************************

import 'dart:convert';

import 'package:weex_flutter_demo/weex_flutter/module/wx_event_bus.dart';
import 'package:weex_flutter_demo/weex_flutter/module/wx_system.dart';
import 'package:weex_flutter_demo/weex_flutter/module/wx_http.dart';
import 'package:weex_flutter_demo/weex_flutter/module/wx_storage.dart';
import 'package:weex_flutter_demo/weex_flutter/module/wx_timer.dart';
import 'package:weex_flutter_demo/weex_flutter/module/wx_navigate.dart';
import 'package:weex_flutter_demo/weex_flutter/module/wx_wx_flutter.dart';
import 'wx_module_factory.dart';

class WXModuleFactoryImpl extends WXModuleFactory {
  static final WXModuleFactoryImpl _singleton = WXModuleFactoryImpl._init();
  factory WXModuleFactoryImpl() {
    return _singleton;
  }
  WXModuleFactoryImpl._init() {}
  final Map<String, List<Map<String, dynamic>>> innerMap =
      <String, List<Map<String, dynamic>>>{
    'eventBus': [
      {
        'clazz': WXEventBus,
        'methods': ['on', 'off', 'emit']
      }
    ],
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
    ],
    'navigate': [
      {
        'clazz': WXNavigate,
        'methods': ['push', 'pop']
      }
    ],
    'wxFlutter': [
      {
        'clazz': WXWxFlutter,
        'methods': ['invoke']
      }
    ]
  };

  dynamic instanceFromClazz(Type clazz) {
    switch (clazz) {
      case WXEventBus:
        return new WXEventBus();
      case WXSystem:
        return new WXSystem();
      case WXHttp:
        return new WXHttp();
      case WXStorage:
        return new WXStorage();
      case WXTimer:
        return new WXTimer();
      case WXNavigate:
        return new WXNavigate();
      case WXWxFlutter:
        return new WXWxFlutter();
      default:
        return null;
    }
  }
}

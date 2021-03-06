import 'package:flutter/cupertino.dart';
import 'package:weex_flutter_demo/weex_flutter/manager/wx_component_factory.d.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../bridge/wx_channel.dart';
import '../model/wx_property.dart';
import 'package:reflectable/reflectable.dart';
import '../annotation/reflector.dart';
import '../util/wx_reflect_utils.dart';
import '../util/wx_log.dart';

abstract class WXBaseWidget extends StatelessWidget {
  final String pageId;
  final WXComponent component;
  final WXChannel methodChannel;
  final WXBaseWidget parent;
  final ValueNotifier<WXData> data;

  WXBaseWidget(
      {this.pageId,
      this.component,
      this.methodChannel,
      this.parent,
      this.data});

  void dispose() {
    WXLog.info('WXBaseWidget','on dispose');
  }

  void setChildren(List<WXBaseWidget> children) {
    data.value.children = children;
  }

  void updateProperty(dynamic it) {
    it.forEach((k, v) {
      var property = component.properties[k];
      if (null != property) {
        property.setValue(v.toString());
      }
      component.properties.putIfAbsent(k, () => WXProperty(v.toString()));
    });
    var newData = WXData(component.properties);
    newData.children = data.value.children;
    data.value = newData;
  }

  void invokeMethod(dynamic data) {
    InstanceMirror instanceMirror = reflector.reflect(this);
    Map m = WXComponentFactoryImpl().innerMap[data['component']][0];
    Type clazz = m['clazz'];
    List<dynamic> params = WXReflectUtils.genInstanceMethodParams(data, clazz, reflector);
    instanceMirror.invoke(data['method'], params);
  }

  void addChildren(List<WXBaseWidget> children) {
    var newData = WXData(data.value.map);
    if (data.value.children != null) {
      newData.children = data.value.children;
    } else {
      newData.children = [];
    }
    newData.children.addAll(children);
    data.value = newData;
  }

  void removeChildren(WXBaseWidget children) {
    var newData = WXData(data.value.map);
    if (data.value.children != null) {
      newData.children = data.value.children;
    } else {
      newData.children = [];
    }
    newData.children.remove(children);
    data.value = newData;
  }

  WXBaseWidget getDataChildern(WXData data) {
    WXBaseWidget children;
    if (data.children != null && data.children.isNotEmpty) {
      children = data.children[0];
    } else {
      children = null;
    }
    return children;
  }

  dynamic getEvent(String eventName) {
    if (null != eventName) {
      if (null != component?.events && component.events.length > 0) {
        var event = component.events[eventName];
        if (null != event) {
          return event;
        }
      }
    }
    return null;
  }

  List<dynamic> _createEvent(
      String ref, Map<String, dynamic> eventObject, String eventName) {
    List<dynamic> params = List();
    params.add(ref);
    params.add(eventName);
    params.add(eventObject ?? {});
    params.add({});
    return params;
  }

  ///枚举类型转string
  String enumToString(o) => o.toString().split('.').last;

  ///string转枚举类型
  T enumFromString<T>(Iterable<T> values, String value) {
    return values.firstWhere((type) => type.toString().split('.').last == value,
        orElse: () => null);
  }


  onTapEvent(WXChannel methodChannel, String pageId, String ref,
      Map<String, dynamic> event, String name) {
    List<dynamic> params = _createEvent(ref, event, name);

    Map<String, dynamic> args = Map();
    args.putIfAbsent('pageId', () => pageId);
    args.putIfAbsent('event', () => params);
    methodChannel.invokeMethod('event', args);
  }

  onScrollEvent(WXChannel methodChannel, String pageId, String ref,
      Map<String, dynamic> event, String name) {
    List<dynamic> params = _createEvent(ref, event, name);

    Map<String, dynamic> args = Map();
    args.putIfAbsent('pageId', () => pageId);
    args.putIfAbsent('event', () => params);
    methodChannel.invokeMethod('event', args);
  }

}

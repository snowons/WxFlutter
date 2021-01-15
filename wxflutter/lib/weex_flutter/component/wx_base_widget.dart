import 'package:flutter/cupertino.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../bridge/wx_channel.dart';
import '../model/wx_property.dart';

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

  void setChildren(List<WXBaseWidget> children) {
    data.value.children = children;
  }

  void updateProperties(Map<String, WXProperty> properties) {
    var newData = WXData(properties);
    newData.children = data.value.children;
    data.value = newData;
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

  void updateChildren(List<WXBaseWidget> children) {
    var newData = WXData(data.value.map);
    newData.children = children;
    data.value = newData;
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

  void insertChildren(int index, List<WXBaseWidget> children) {
    var newData = WXData(data.value.map);
    newData.children = data.value.children;
    newData.children.insertAll(index, children);
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

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';
import '../util/wx_obj_parse.dart';



@Component("gesture-detector,GestureDetector")
class WXGestureDetectorStateless extends WXBaseWidget {
  WXGestureDetectorStateless(WXBaseWidget parent, String pageId,
      WXChannel methodChannel, WXComponent component)
      : super(
            parent: parent,
            pageId: pageId,
            methodChannel: methodChannel,
            component: component,
            data: ValueNotifier(WXData(component.properties)));

  Map<String, dynamic> convertEvent(dynamic event) {
    if (event is TapDownDetails || event is TapUpDetails) {
      Map<String, dynamic> map = Map();
      map.putIfAbsent('kind', () => enumToString(event.kind));
      map.putIfAbsent('globalPosition', () => event.globalPosition);
      map.putIfAbsent('localPosition', () => event.localPosition);
    }
    return null;
  }

  void _tapDown(TapDownDetails tapDownDetails) {
    var event = getEvent("onTapDown");
    if (null != event) {
      onTapEvent(methodChannel, pageId, component.ref,
          convertEvent(tapDownDetails), event);
    }
  }

  void _tapUp(TapUpDetails tapUpDetails) {
    var event = getEvent("onTapUp");
    if (null != event) {
      onTapEvent(methodChannel, pageId, component.ref,
          convertEvent(tapUpDetails), event);
    }
  }

  void _tapCancel() {
    var event = getEvent("onTapCancel");
    if (null != event) {
      onTapEvent(methodChannel, pageId, component.ref, null, event);
    }
  }

  void _doubleTap() {
    var event = getEvent("onDoubleTap");
    if (null != event) {
      onTapEvent(methodChannel, pageId, component.ref, null, event);
    }
  }

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder(
        builder: (BuildContext context, WXData data, Widget child) {
          HitTestBehavior behavior = WXHitTestBehavior.parse(data.map[getAttributeKey('behavior')],
              defaultValue: HitTestBehavior.deferToChild);
          return GestureDetector(
              behavior:behavior,
              onTapDown: _tapDown,
              onTapUp: _tapUp,
              onTapCancel: _tapCancel,
              onDoubleTap: _doubleTap,
              key: ObjectKey(component),
              child: getDataChildern(data));
        },
        valueListenable: this.data);
  }
}

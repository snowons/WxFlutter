import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../util/wx_obj_parse.dart';
import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("raised-button,RaisedButton")
class WXRaisedButtonStateless extends WXBaseWidget {
  WXRaisedButtonStateless(WXBaseWidget parent, String pageId,
      WXChannel methodChannel, WXComponent component)
      : super(
            parent: parent,
            pageId: pageId,
            methodChannel: methodChannel,
            component: component,
            data: ValueNotifier(WXData(component.properties)));

  void _pressed() {
    var event = getEvent("onPressed");
    if (null != event) {
      onTapEvent(methodChannel, pageId, component.ref, null, event);
    }
  }

  void _onLongPress() {
    var event = getEvent("onLongPress");
    if (null != event) {
      onTapEvent(methodChannel, pageId, component.ref, null, event);
    }
  }

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder(
        builder: (BuildContext context, WXData data, Widget child) {
          Color color = WXColor.parse(data.map['color']);
          Color textColor = WXColor.parse(data.map[getAttributeKey('text-color')]);
          Color disabledTextColor = WXColor.parse(data.map[getAttributeKey('disabled-text-color')]);
          Color disabledColor = WXColor.parse(data.map[getAttributeKey('disabled-color')]);
          Color focusColor = WXColor.parse(data.map[getAttributeKey('focus-color')]);
          Color hoverColor = WXColor.parse(data.map[getAttributeKey('hover-color')]);
          Color highlightColor = WXColor.parse(data.map[getAttributeKey('highlight-color')]);
          Color splashColor = WXColor.parse(data.map[getAttributeKey('splash-color')]);

          return RaisedButton(
              onPressed: _pressed,
              onLongPress:_onLongPress,
              key: ObjectKey(component),
              textColor: textColor,
              disabledTextColor: disabledTextColor,
              color: color,
              disabledColor: disabledColor,
              focusColor: focusColor,
              hoverColor: hoverColor,
              highlightColor: highlightColor,
              splashColor: splashColor,
              child: getDataChildern(data));
        },
        valueListenable: this.data);
  }
}

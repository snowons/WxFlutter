import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("container,div,Container")
class WXContainerStateless extends WXBaseWidget {
  WXContainerStateless(WXBaseWidget parent, String pageId,
      WXChannel methodChannel, WXComponent component)
      : super(
            parent: parent,
            pageId: pageId,
            methodChannel: methodChannel,
            component: component,
            data: ValueNotifier(WXData(component.properties)));

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder(
        builder: (BuildContext context, WXData data, Widget child) {
          Alignment alignment = WXAlignment.parse(data.map['alignment'],
              defaultValue: Alignment.topLeft);
          return Container(
              key: ObjectKey(component),
              alignment: alignment,
              color: WXColor.parse(data.map[getAttributeKey('color')],defaultValue:  Colors.transparent),
              width: WXDouble.parse(data.map['width']),
              height: WXDouble.parse(data.map['height']),
              margin: WXMargin.parse(data.map),
              padding: WXPadding.parse(data.map),
              clipBehavior:
              WXClip.parse(data.map[getAttributeKey("clip-behavior")]),
              child: getDataChildern(data));
        },
        valueListenable: this.data);
  }
}

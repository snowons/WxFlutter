import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("circular-progress-indicator,CircularProgressIndicator")
class WXCircularProgressIndicatorStateless extends WXBaseWidget {
  WXCircularProgressIndicatorStateless(WXBaseWidget parent, String pageId,
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
          return CircularProgressIndicator(
            key: ObjectKey(component),
            value: WXDouble.parse(data.map['value']),
            backgroundColor:
                WXColor.parse(data.map[getAttributeKey('background-color')],defaultValue: Colors.transparent),
//            valueColor: ,
            strokeWidth: WXDouble.parse(
                data.map[getAttributeKey("stroke-width")],
                defaultValue: 4.0),
            semanticsLabel:
                data.map[getAttributeKey("semantics-label")]?.getValue(),
            semanticsValue:
                data.map[getAttributeKey("semantics-value")]?.getValue(),
          );
        },
        valueListenable: this.data);
  }
}

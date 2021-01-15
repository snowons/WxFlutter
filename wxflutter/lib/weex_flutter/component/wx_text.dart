import 'package:flutter/cupertino.dart';

import '../util/wx_obj_parse.dart';
import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("text,Text")
class WXTextStateless extends WXBaseWidget {
  WXTextStateless(WXBaseWidget parent, String pageId, WXChannel methodChannel,
      WXComponent component)
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
          String value = '';
          if (data.map['value'] != null) {
            value = data.map['value']?.getValue();
          }

          return Text(value,
              key: ObjectKey(component),
              style: TextStyle(
                  inherit:
                      WXBool.parse(data.map['inherit'], defaultValue: true),
                  fontSize: WXDouble.parse(
                      data.map[getAttributeKey('font-size')],
                      defaultValue: 14),
                  backgroundColor:
                  WXColor.parse(data.map[getAttributeKey('background-color')]),
                  color: WXColor.parse(data.map[getAttributeKey('color')])));
        },
        valueListenable: this.data);
  }
}

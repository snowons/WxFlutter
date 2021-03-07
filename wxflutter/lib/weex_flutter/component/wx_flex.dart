import 'package:flutter/cupertino.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("flex,Flex")
class WXFlexStateless extends WXBaseWidget {
  WXFlexStateless(WXBaseWidget parent, String pageId, WXChannel methodChannel,
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
          return Flex(
              key: ObjectKey(component),
              mainAxisAlignment: WXMainAxisAlignment.parse(
                  data.map[getAttributeKey("main-axis-alignment")],
                  defaultValue: MainAxisAlignment.start),
              mainAxisSize: WXMainAxisSize.parse(
                  data.map[getAttributeKey("main-axis-size")],
                  defaultValue: MainAxisSize.max),
              crossAxisAlignment: WXCrossAxisAlignment.parse(
                  data.map[getAttributeKey("cross-axis-alignment")],
                  defaultValue: CrossAxisAlignment.center),
              textDirection: WXTextDirection.parse(
                  data.map[getAttributeKey("text-direction")]),
              verticalDirection: WXVerticalDirection.parse(
                  data.map[getAttributeKey("vertical-direction")],
                  defaultValue: VerticalDirection.down),
              textBaseline: WXTextBaseline.parse(
                  data.map[getAttributeKey("text-baseline")]),
              clipBehavior:
                  WXClip.parse(data.map[getAttributeKey("clip-behavior")]),
              children: data.children);
        },
        valueListenable: this.data);
  }
}

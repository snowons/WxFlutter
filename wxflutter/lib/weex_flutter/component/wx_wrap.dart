import 'package:flutter/cupertino.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("wrap,Wrap")
class WXWrapStateless extends WXBaseWidget {
  WXWrapStateless(WXBaseWidget parent, String pageId, WXChannel methodChannel,
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
          return Wrap(
              key: ObjectKey(component),
              runAlignment: WXWrapAlignment.parse(
                  data.map[getAttributeKey("run-alignment")],
                  defaultValue: WrapAlignment.start),
              alignment: WXWrapAlignment.parse(
                  data.map[getAttributeKey("alignment")],
                  defaultValue: WrapAlignment.start),
              spacing: WXDouble.parse(data.map[getAttributeKey("spacing")],
                  defaultValue: 0.0),
              runSpacing: WXDouble.parse(
                  data.map[getAttributeKey("run-spacing")],
                  defaultValue: 0.0),
              textDirection: WXTextDirection.parse(
                  data.map[getAttributeKey("text-direction")]),
              clipBehavior:
                  WXClip.parse(data.map[getAttributeKey("clip-behavior")]),
              direction: WXAxis.parse(data.map[getAttributeKey("direction")]),
              crossAxisAlignment: WXWrapCrossAlignment.parse(
                  data.map[getAttributeKey("cross-axis-alignment")]),
              verticalDirection: WXVerticalDirection.parse(
                  data.map[getAttributeKey("vertical-direction")],
                  defaultValue: VerticalDirection.down),
              children: data.children);
        },
        valueListenable: this.data);
  }
}

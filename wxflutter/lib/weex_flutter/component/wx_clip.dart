import 'package:flutter/cupertino.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("clip,Clip")
class WXClipStateless extends WXBaseWidget {
  WXClipStateless(WXBaseWidget parent, String pageId, WXChannel methodChannel,
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
          String type = data.map['type'].getValue();
          if (type.compareTo('ClipRRect') == 0) {
            return ClipRRect(
              key: ObjectKey(component),
              borderRadius: BorderRadius.circular(WXDouble.parse(
                  data.map[getAttributeKey("border-radius")],
                  defaultValue: 0.0)),
              clipBehavior: WXClip.parse(
                  data.map[getAttributeKey("clip-behavior")],
                  defaultValue: Clip.hardEdge),
              child: getDataChildern(data),
            );
          } else if (type.compareTo('ClipRect') == 0) {
            return ClipRect(
              key: ObjectKey(component),
              clipBehavior: WXClip.parse(
                  data.map[getAttributeKey("clip-behavior")],
                  defaultValue: Clip.hardEdge),
              child: getDataChildern(data),
            );
          }else if (type.compareTo('ClipOval') == 0) {
            return ClipOval(
              key: ObjectKey(component),
              clipBehavior: WXClip.parse(
                  data.map[getAttributeKey("clip-behavior")],
                  defaultValue: Clip.hardEdge),
              child: getDataChildern(data),
            );
          }
          return null;
        },
        valueListenable: this.data);
  }
}

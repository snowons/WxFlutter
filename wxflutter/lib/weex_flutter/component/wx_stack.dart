import 'package:flutter/cupertino.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("stack,Stack")
class WXStackStateless extends WXBaseWidget {
  WXStackStateless(WXBaseWidget parent, String pageId, WXChannel methodChannel,
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
          var alignment = WXAlignmentDirectional.parse(data.map['alignment'],
              defaultValue: AlignmentDirectional.topStart);
          return Stack(
              key: ObjectKey(component),
              alignment: alignment,
              textDirection: WXTextDirection.parse(
                  data.map[getAttributeKey('text-direction')]),
              fit: WXStackFit.parse(data.map['fit'],
                  defaultValue: StackFit.loose),
              overflow: WXOverflow.parse(data.map[getAttributeKey('overflow')],
                  defaultValue: Overflow.clip),
              children: data.children);
        },
        valueListenable: this.data);
  }
}

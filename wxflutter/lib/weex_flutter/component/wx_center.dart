import 'package:flutter/cupertino.dart';
import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("center,Center")
class WXCenterStateless extends WXBaseWidget {
  WXCenterStateless(WXBaseWidget parent, String pageId, WXChannel methodChannel,
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
          return Center(
              key: ObjectKey(component),
              widthFactor:
                  WXDouble.parse(data.map[getAttributeKey('width-factor')]),
              heightFactor:
                  WXDouble.parse(data.map[getAttributeKey('height-factor')]),
              child: getDataChildern(data));
        },
        valueListenable: this.data);
  }
}

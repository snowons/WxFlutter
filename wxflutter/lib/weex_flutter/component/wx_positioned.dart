import 'package:flutter/cupertino.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("positioned,Positioned")
class WXPositionedStateless extends WXBaseWidget {
  WXPositionedStateless(WXBaseWidget parent, String pageId,
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
          return Positioned(
              key: ObjectKey(component),
              left: WXDouble.parse(data.map['left'],defaultValue: 0),
              right: WXDouble.parse(data.map['right'],defaultValue: 0),
              top: WXDouble.parse(data.map['top'],defaultValue: 0),
              bottom: WXDouble.parse(data.map['bottom'],defaultValue: 0),
              width: WXDouble.parse(data.map['width']),
              height: WXDouble.parse(data.map['height']),
              child: getDataChildern(data));
        },
        valueListenable: this.data);
  }
}

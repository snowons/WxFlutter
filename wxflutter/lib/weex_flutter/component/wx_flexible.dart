import 'package:flutter/cupertino.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("flexible,Flexible")
class WXFlexibleStateless extends WXBaseWidget {
  WXFlexibleStateless(WXBaseWidget parent, String pageId,
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
          return Flexible(
              key: ObjectKey(component),
              fit: WXFlexFit.parse(data.map['flex'],
                  defaultValue: FlexFit.loose),
              flex: WXInt.parse(data.map['flex'], defaultValue: 1),
              child: getDataChildern(data));
        },
        valueListenable: this.data);
  }
}

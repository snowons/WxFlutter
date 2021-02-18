import 'package:flutter/cupertino.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("single-child-scroll-view,SingleChildScrollView")
class WXSingleChildScrollViewStateless extends WXBaseWidget {
  WXSingleChildScrollViewStateless(WXBaseWidget parent, String pageId,
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
          return SingleChildScrollView(
              key: ObjectKey(component),
              padding: WXPadding.parse(data.map),

              scrollDirection: WXAxis.parse(
                  data.map[getAttributeKey("scroll-direction")],
                  defaultValue: Axis.vertical),
              child: getDataChildern(data));
        },
        valueListenable: this.data);
  }
}

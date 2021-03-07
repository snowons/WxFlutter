import 'package:flutter/cupertino.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("visibility,Visibility")
class WXVisibilityStateless extends WXBaseWidget {
  WXVisibilityStateless(WXBaseWidget parent, String pageId,
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
          return Visibility(
              key: ObjectKey(component),
              visible: WXBool.parse(data.map[getAttributeKey('visible')],
                  defaultValue: false),
              child: getDataChildern(data),
              replacement: data.children != null && data.children.length > 1
                  ? data.children[1]
                  : const SizedBox.shrink());
        },
        valueListenable: this.data);
  }
}

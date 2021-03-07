import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';
import '../model/wx_js_callback.dart';

@Component("indexed-stack,IndexedStack")
class WXIndexedStackStateless extends WXBaseWidget {

  WXIndexedStackStateless(WXBaseWidget parent, String pageId,
      WXChannel methodChannel, WXComponent component)
      : super(
      parent: parent,
      pageId: pageId,
      methodChannel: methodChannel,
      component: component,
      data: ValueNotifier(WXData(component.properties)));

  @override
  void dispose() {
    super.dispose();
  }


  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder(
        builder: (BuildContext context, WXData data, Widget child) {
          var alignment = WXAlignmentDirectional.parse(data.map['alignment'],
              defaultValue: AlignmentDirectional.topStart);
          var index = WXInt.parse(data.map['index'],
              defaultValue: 0);
          return IndexedStack(
              sizing:StackFit.expand,
              key: ObjectKey(component),
              index:index,
              alignment: alignment,
              children: data.children);
        },
        valueListenable: this.data);
  }
}

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("tab-bar-view,TabBarView")
class WXTabBarViewStateless extends WXBaseWidget {
  WXTabBarViewStateless(WXBaseWidget parent, String pageId, WXChannel methodChannel,
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
          return TabBarView(key: ObjectKey(component),children: data.children);
        },
        valueListenable: this.data);
  }
}

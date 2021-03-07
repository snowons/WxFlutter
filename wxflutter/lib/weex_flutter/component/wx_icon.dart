import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("icon,Icon")
class WXIconStateless extends WXBaseWidget {
  WXIconStateless(WXBaseWidget parent, String pageId, WXChannel methodChannel,
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
          double size = WXDouble.parse(data.map['size'],defaultValue: 24.0);
          Color color = WXColor.parse(data.map['color'],defaultValue: Colors.black);
          String fontFamily = data.map[getAttributeKey('font-family')]?.getValue() ?? "MaterialIcons";
          String semanticLabel = data.map[getAttributeKey('semantic-label')]?.getValue() ?? "";
          int codePoint = WXInt.parse(data.map[getAttributeKey('codePoint')]) ?? 0;
          IconData icon = IconData(codePoint,fontFamily:fontFamily);
            return Icon(icon,color:color,size:size,semanticLabel:semanticLabel,textDirection: WXTextDirection.parse(
                data.map[getAttributeKey("text-direction")]),);
        },
        valueListenable: this.data);
  }
}

import 'package:flutter/cupertino.dart';
import 'dart:convert';
import 'dart:typed_data';
import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("img,image,Image")
class WXImageStateless extends WXBaseWidget {
  WXImageStateless(WXBaseWidget parent, String pageId, WXChannel methodChannel,
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
          String src = data.map['src'].getValue();
          double width = WXDouble.parse(data.map['width']);
          double height =  WXDouble.parse(data.map['height']);
          BoxFit fit = WXBoxFit.parse(data.map['fit']);
          if(src != null && src.startsWith('http')) {
            return Image.network(null == src ? '' : src,
                key: ObjectKey(component),
                width: width,
                height: height,
                fit: fit,);
          } else if(src != null && src.startsWith('assets')) {
            return Image.asset(
                src,
                width: width,
                height: height,
                fit: fit);

          } else if(src != null && src.length > 0) {
            Uint8List bytes = Base64Decoder().convert(src);
            return Image.memory(
                bytes,
                width: width,
                height: height,
                fit: fit);
          }
          return null;


        },
        valueListenable: this.data);
  }
}

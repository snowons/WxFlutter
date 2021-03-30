import 'dart:convert' as convert;

import 'package:flutter/cupertino.dart';
import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';

import './wx_base_widget.dart';
import '../annotation/annotation_obj.dart';
import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';

@Component("rich-text,RichText")
class WXRichTextStateless extends WXBaseWidget {
  WXRichTextStateless(WXBaseWidget parent, String pageId,
      WXChannel methodChannel, WXComponent component)
      : super(
            parent: parent,
            pageId: pageId,
            methodChannel: methodChannel,
            component: component,
            data: ValueNotifier(WXData(component.properties)));

  List<InlineSpan> _genChildren(List<dynamic> data) {
    List<InlineSpan> children = [];
    if (data != null) {
      for (int i = 0; i < data.length; i++) {
        var v = data[i];
        String type = v['type'] ?? 'text';
        String value = v['value'] ?? '';
        TextStyle style = WXTextStyle.parse(v['style']);
        if (type == 'text') {
          TextSpan span = TextSpan(
              text: value,
              style: style,
              recognizer: TapGestureRecognizer()
                ..onTap = () {
                  var event = v['onTap'];
                  if (null != event) {
                    onTapEvent(methodChannel, pageId, component.ref,
                        {"index": i, "value": value}, 'onTap');
                  }
                });
          children.add(span);
        } else if (type == 'image') {
          String src = v['src'] ?? '';
          double width = WXDouble.parseString(v['style']['width']);
          double height = WXDouble.parseString(v['style']['height']);
          WidgetSpan span = WidgetSpan(
              alignment: WXPlaceholderAlignment.parseString(
                  v['style']['alignment'],
                  defaultValue: PlaceholderAlignment.middle),
              child: Image.network(src, width: width, height: height));

          children.add(span);
        }
      }
    }
    return children;
  }

  @override
  Widget build(BuildContext context) {
    return ValueListenableBuilder(
        builder: (BuildContext context, WXData data, Widget child) {
          String value = '';
          if (data.map['value'] != null) {
            value = data.map['value']?.getValue();
          }
          Map<String, dynamic> json = convert.jsonDecode(value);
          return RichText(
              key: ObjectKey(component),
              // maxLines:WXInt.parse(
              //     data.map[getAttributeKey('max-lines')],
              //     defaultValue: null),
              // overflow: WXTextOverflow.parse(
              //     data.map[getAttributeKey('overflow')],
              //     defaultValue: TextOverflow.visible),
              // textDirection: WXTextDirection.parse(
              //     data.map[getAttributeKey("text-direction")],defaultValue: TextDirection.ltr),
              // softWrap:WXBool.parse(data.map[getAttributeKey("soft-wrap")],defaultValue: true),
              // textAlign:
              // WXTextAlign.parse(data.map[getAttributeKey('text-align')]),
              text: TextSpan(
                text: json['value'],
                  style: WXTextStyle.parse(json['style']),// default text style
                children: _genChildren(json['children']),
              ));
        },
        valueListenable: this.data);
  }
}

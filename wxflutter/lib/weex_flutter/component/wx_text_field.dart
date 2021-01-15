import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("text-filed,TextFiled")
class WXTextFiledStateless extends WXBaseWidget {
  WXTextFiledStateless(WXBaseWidget parent, String pageId,
      WXChannel methodChannel, WXComponent component)
      : super(
            parent: parent,
            pageId: pageId,
            methodChannel: methodChannel,
            component: component,
            data: ValueNotifier(WXData(component.properties)));

  void _onChanged(String v) {
    var event = getEvent("onChanged");
    if (null != event) {
      onTapEvent(methodChannel, pageId, component.ref, {"value": v}, event);
    }
  }

  void _onEditingComplete() {
    var event = getEvent("onEditingComplete");
    if (null != event) {
      onTapEvent(methodChannel, pageId, component.ref, null, event);
    }
  }

  void _onSubmitted(v) {
    var event = getEvent("onSubmitted");
    if (null != event) {
      onTapEvent(methodChannel, pageId, component.ref, {"value": v}, event);
    }
  }

  @override
  Widget build(BuildContext context) {
    TextEditingController _textEditingController = TextEditingController();

    return ValueListenableBuilder(
        builder: (BuildContext context, WXData data, Widget child) {
          TextInputType keyboardType = TextInputType.text;
          if (data.map['type'] != null) {
            keyboardType = enumFromString(
                TextInputType.values, data.map['type'].toString());
          }

          return TextField(
            key: ObjectKey(component),
            controller: _textEditingController,
            autofocus: WXBool.parse(data.map[getAttributeKey('autofocus')],
                defaultValue: false),
            enabled: WXBool.parse(data.map[getAttributeKey('enabled')],
                defaultValue: true),
            obscureText: WXBool.parse(data.map[getAttributeKey('obscure-text')],
                defaultValue: false),
            maxLines: WXInt.parse(data.map[getAttributeKey('max-lines')],
                defaultValue: 1),
            maxLength: WXInt.parse(data.map[getAttributeKey('max-length')],
                defaultValue: 100),
            maxLengthEnforced: WXBool.parse(
                data.map[getAttributeKey('max-length-enforced')],
                defaultValue: false),
            textAlign:
                WXTextAlign.parse(data.map[getAttributeKey('text-align')]),
            textDirection: WXTextDirection.parse(
                data.map[getAttributeKey('text-direction')]),
            textInputAction: WXTextInputAction.parse(
                data.map[getAttributeKey('text-input-action')]),
            keyboardType: keyboardType,
            onChanged: _onChanged,
            onEditingComplete: _onEditingComplete,
            onSubmitted: _onSubmitted,
          );
        },
        valueListenable: this.data);
  }
}

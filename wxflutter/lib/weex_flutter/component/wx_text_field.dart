import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:weex_flutter_demo/weex_flutter/model/wx_js_callback.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';
import '../util/wx_log.dart';
import '../annotation/reflector.dart';

@Reflector()
@Component("text-filed,TextFiled")
class WXTextFiledStateless extends WXBaseWidget {
  final FocusNode _focusNode = FocusNode();
  final TextEditingController _textEditingController = TextEditingController();

  WXTextFiledStateless(WXBaseWidget parent, String pageId,
      WXChannel methodChannel, WXComponent component)
      : super(
            parent: parent,
            pageId: pageId,
            methodChannel: methodChannel,
            component: component,
            data: ValueNotifier(WXData(component.properties)));

  @override
  void dispose() {
    WXLog.info('WXTextFiledStateless','on dispose');
    _focusNode.dispose();
    _textEditingController.dispose();
    super.dispose();
  }

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

  @JSMethod()
  void setValue(dynamic args,WXJSCallback callback) {
    _textEditingController.text = args;
    _onChanged(args);
    WXLog.log("Component JSMethod","TextFailed setValue $args");
    if(callback != null) {
      callback.invoke({'code': '1'});
    }
  }

  @JSMethod()
  void clear(WXJSCallback callback) {
    _textEditingController.clear();
    _onChanged('');
    WXLog.log("Component JSMethod","TextFailed clear() ");
    if(callback != null) {
      callback.invoke({'code': '1'});
    }
  }

  @JSMethod()
  void requestFocus(WXJSCallback callback) {
    _focusNode.requestFocus();
    WXLog.log("Component JSMethod","TextFailed requestFocus() ");
    if(callback != null) {
      callback.invoke({'code': '1'});
    }
  }

  @JSMethod()
  void unfocus(WXJSCallback callback) {
    _focusNode.unfocus();
    WXLog.log("Component JSMethod","TextFailed unfocus() ");
    if(callback != null) {
      callback.invoke({'code': '1'});
    }
  }

  @override
  Widget build(BuildContext context) {


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
            focusNode: _focusNode,
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

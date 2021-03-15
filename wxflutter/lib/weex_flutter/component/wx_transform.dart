import 'package:flutter/cupertino.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("transform,Transform")
class WXTransformStateless extends WXBaseWidget {
  WXTransformStateless(WXBaseWidget parent, String pageId,
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
          String transformType =
              data.map[getAttributeKey('transform-type')].getValue();
          // scale
          if (transformType.compareTo("scale") == 0) {
            return Transform.scale(
                key: ObjectKey(component),
                scale: WXDouble.parse(data.map[getAttributeKey('scale')],defaultValue: 1.0),
                origin: Offset(
                    WXDouble.parse(data.map[getAttributeKey('origin-x')],defaultValue: 0),
                    WXDouble.parse(data.map[getAttributeKey('origin-y')],defaultValue: 0)),
                alignment:
                    WXAlignment.parse(data.map[getAttributeKey('alignment')],defaultValue: Alignment.center),
                child: getDataChildern(data));
          }
          // translate 平移
          else if (transformType.compareTo("translate") == 0) {
            return Transform.translate(
                key: ObjectKey(component),
                offset: Offset(
                    WXDouble.parse(data.map[getAttributeKey('origin-x')]),
                    WXDouble.parse(data.map[getAttributeKey('origin-y')])),
                child: getDataChildern(data));
          }
          // rotate 旋转
          else if (transformType.compareTo("rotate") == 0) {
            return Transform.rotate(
                key: ObjectKey(component),
                angle: WXDouble.parse(data.map[getAttributeKey('angle')]),
                origin: Offset(
                    WXDouble.parse(data.map[getAttributeKey('origin-x')],defaultValue: 0),
                    WXDouble.parse(data.map[getAttributeKey('origin-y')],defaultValue: 0)),
                alignment:
                    WXAlignment.parse(data.map[getAttributeKey('alignment')],defaultValue:  Alignment.center),
                child: getDataChildern(data));
          }
          // skew 斜切
          else if (transformType.compareTo("skew") == 0) {
            return Transform(
                key: ObjectKey(component),
                origin: Offset(
                    WXDouble.parse(data.map[getAttributeKey('origin-x')],defaultValue: 0),
                    WXDouble.parse(data.map[getAttributeKey('origin-y')],defaultValue: 0)),
                alignment:
                    WXAlignment.parse(data.map[getAttributeKey('alignment')],defaultValue: Alignment.center),
                transform: Matrix4.diagonal3Values(
                    WXDouble.parse(data.map['x'],defaultValue: 0),
                    WXDouble.parse(data.map['y'],defaultValue: 0),
                    WXDouble.parse(data.map['z'],defaultValue: 0)),
                child: getDataChildern(data));
          }
          // 默认
          return Transform(
              key: ObjectKey(component),
              origin: Offset(
                  WXDouble.parse(data.map[getAttributeKey('origin-x')],defaultValue: 0),
                  WXDouble.parse(data.map[getAttributeKey('origin-y')],defaultValue: 0)),
              alignment:
                  WXAlignment.parse(data.map[getAttributeKey('alignment')],defaultValue: Alignment.center),
              child: getDataChildern(data));
        },
        valueListenable: this.data);
  }
}

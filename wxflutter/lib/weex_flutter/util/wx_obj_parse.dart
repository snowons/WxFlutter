import 'package:flutter/material.dart';
import 'package:flutter/widgets.dart';
import '../model/wx_property.dart';

class WXAxis {
  static Axis parse(WXProperty value, {Axis defaultValue = Axis.horizontal}) {
    Axis result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'horizontal':
        result = Axis.horizontal;
        break;
      case 'vertical':
        result = Axis.vertical;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXWrapCrossAlignment {
  static WrapCrossAlignment parse(WXProperty value,
      {WrapCrossAlignment defaultValue = WrapCrossAlignment.start}) {
    WrapCrossAlignment result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'start':
        result = WrapCrossAlignment.start;
        break;
      case 'center':
        result = WrapCrossAlignment.center;
        break;

      case 'end':
        result = WrapCrossAlignment.end;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXWrapAlignment {
  static WrapAlignment parse(WXProperty value,
      {WrapAlignment defaultValue = WrapAlignment.start}) {
    WrapAlignment result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'start':
        result = WrapAlignment.start;
        break;
      case 'center':
        result = WrapAlignment.center;
        break;
      case 'spaceAround':
        result = WrapAlignment.spaceAround;
        break;
      case 'spaceBetween':
        result = WrapAlignment.spaceBetween;
        break;
      case 'end':
        result = WrapAlignment.end;
        break;
      case 'spaceEvenly':
        result = WrapAlignment.spaceEvenly;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXClip {
  static Clip parse(WXProperty value, {Clip defaultValue = Clip.none}) {
    Clip result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'hardEdge':
        result = Clip.hardEdge;
        break;
      case 'antiAlias':
        result = Clip.antiAlias;
        break;
      case 'antiAliasWithSaveLayer':
        result = Clip.antiAliasWithSaveLayer;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXMainAxisAlignment {
  static MainAxisAlignment parse(WXProperty value,
      {MainAxisAlignment defaultValue = MainAxisAlignment.start}) {
    MainAxisAlignment result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'start':
        result = MainAxisAlignment.start;
        break;
      case 'end':
        result = MainAxisAlignment.end;
        break;
      case 'center':
        result = MainAxisAlignment.center;
        break;
      case 'space-between':
        result = MainAxisAlignment.spaceBetween;
        break;
      case 'space-around':
        result = MainAxisAlignment.spaceAround;
        break;
      case 'space-evenly':
        result = MainAxisAlignment.spaceEvenly;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXTextAlign {
  static TextAlign parse(WXProperty value,
      {TextAlign defaultValue = TextAlign.start}) {
    TextAlign result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'start':
        result = TextAlign.start;
        break;
      case 'max':
        result = TextAlign.end;
        break;
      case 'right':
        result = TextAlign.right;
        break;
      case 'left':
        result = TextAlign.left;
        break;
      case 'justify':
        result = TextAlign.justify;
        break;
      case 'center':
        result = TextAlign.center;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXMainAxisSize {
  static MainAxisSize parse(WXProperty value,
      {MainAxisSize defaultValue = MainAxisSize.min}) {
    MainAxisSize result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'min':
        result = MainAxisSize.min;
        break;
      case 'max':
        result = MainAxisSize.max;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXCrossAxisAlignment {
  static CrossAxisAlignment parse(WXProperty value,
      {CrossAxisAlignment defaultValue = CrossAxisAlignment.start}) {
    CrossAxisAlignment result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'start':
        result = CrossAxisAlignment.start;
        break;
      case 'end':
        result = CrossAxisAlignment.end;
        break;
      case 'center':
        result = CrossAxisAlignment.center;
        break;
      case 'stretch':
        result = CrossAxisAlignment.stretch;
        break;
      case 'baseline':
        result = CrossAxisAlignment.baseline;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXTextBaseline {
  static TextBaseline parse(WXProperty value, {TextBaseline defaultValue}) {
    TextBaseline result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'alphabetic':
        result = TextBaseline.alphabetic;
        break;
      case 'ideographic':
        result = TextBaseline.ideographic;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXVerticalDirection {
  static VerticalDirection parse(WXProperty value,
      {VerticalDirection defaultValue = VerticalDirection.up}) {
    VerticalDirection result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'up':
        result = VerticalDirection.up;
        break;
      case 'down':
        result = VerticalDirection.down;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXTextDirection {
  static TextDirection parse(WXProperty value, {TextDirection defaultValue}) {
    TextDirection result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'rtl':
        result = TextDirection.rtl;
        break;
      case 'ltr':
        result = TextDirection.ltr;
        break;
      default:
        result = defaultValue;
    }
    return result;
  }
}

class WXTextInputAction {
  static TextInputAction parse(WXProperty value,
      {TextInputAction defaultValue}) {
    TextInputAction result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'done':
        result = TextInputAction.done;
        break;
      case 'go':
        result = TextInputAction.go;
        break;
      case 'continueAction':
        result = TextInputAction.continueAction;
        break;
      case 'emergencyCall':
        result = TextInputAction.emergencyCall;
        break;
      case 'join':
        result = TextInputAction.join;
        break;
      case 'search':
        result = TextInputAction.search;
        break;
      case 'next':
        result = TextInputAction.next;
        break;
      case 'send':
        result = TextInputAction.send;
        break;
      case 'previous':
        result = TextInputAction.previous;
        break;
      case 'newline':
        result = TextInputAction.newline;
        break;
      case 'route':
        result = TextInputAction.route;
        break;
      case 'unspecified':
        result = TextInputAction.unspecified;
        break;
      default:
        result = TextInputAction.none;
    }
    return result;
  }
}

class WXBoxConstraints {
  static BoxConstraints parse(Map<String, WXProperty> properties) {
    var minWidth = properties[getAttributeKey('minWidth')];
    var maxWidth = properties[getAttributeKey('maxWidth')];
    var minHeight = properties[getAttributeKey('minHeight')];
    var maxHeight = properties[getAttributeKey('maxHeight')];
    BoxConstraints constraints;
    if (minWidth != null ||
        maxWidth != null ||
        minHeight != null ||
        maxHeight != null) {
      constraints = BoxConstraints(
          minWidth: WXDouble.parse(minWidth, defaultValue: 0),
          maxWidth: WXDouble.parse(maxWidth, defaultValue: double.infinity),
          minHeight: WXDouble.parse(minHeight, defaultValue: 0),
          maxHeight: WXDouble.parse(maxHeight, defaultValue: double.infinity));
    }

    return constraints;
  }
}

class WXDecorationPosition {
  static DecorationPosition parse(WXProperty value,
      {DecorationPosition defaultValue}) {
    DecorationPosition result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'background':
        result = DecorationPosition.background;
        break;
      case 'foreground':
        result = DecorationPosition.foreground;
        break;
      default:
        result = defaultValue;
        break;
    }
    return result;
  }
}

class WXMargin {
  static EdgeInsets parse(Map<String, WXProperty> properties) {
    var marginLeft = properties[getAttributeKey('margin-left')];
    var marginTop = properties[getAttributeKey('margin-top')];
    var marginRight = properties[getAttributeKey('margin-right')];
    var marginBottom = properties[getAttributeKey('margin-bottom')];
    EdgeInsets margin;
    if (marginLeft != null ||
        marginTop != null ||
        marginRight != null ||
        marginBottom != null) {
      margin = EdgeInsets.fromLTRB(
          WXDouble.parse(marginLeft, defaultValue: 0),
          WXDouble.parse(marginTop, defaultValue: 0),
          WXDouble.parse(marginRight, defaultValue: 0),
          WXDouble.parse(marginBottom, defaultValue: 0));
    }

    if (null != properties['margin']) {
      margin =
          EdgeInsets.all(WXDouble.parse(properties['margin'], defaultValue: 0));
    }
    return margin;
  }
}

class WXPadding {
  static EdgeInsets parse(Map<String, WXProperty> properties) {
    var paddingLeft = properties[getAttributeKey('padding-left')];
    var paddingTop = properties[getAttributeKey('padding-top')];
    var paddingRight = properties[getAttributeKey('padding-right')];
    var paddingBottom = properties[getAttributeKey('padding-bottom')];
    EdgeInsets padding;
    if (paddingLeft != null ||
        paddingTop != null ||
        paddingRight != null ||
        paddingBottom != null) {
      padding = EdgeInsets.fromLTRB(
          WXDouble.parse(paddingLeft, defaultValue: 0),
          WXDouble.parse(paddingTop, defaultValue: 0),
          WXDouble.parse(paddingRight, defaultValue: 0),
          WXDouble.parse(paddingBottom, defaultValue: 0));
    }
    if (null != properties['padding']) {
      padding = EdgeInsets.all(
          WXDouble.parse(properties['padding'], defaultValue: 0));
    }
    return padding;
  }
}

class WXAlignment {
  static Alignment parse(WXProperty value,
      {Alignment defaultValue = Alignment.topLeft}) {
    Alignment result = defaultValue;
    if (null == value) return result;
    switch (getAttributeKey(value.getValue())) {
      case 'topLeft':
        result = Alignment.topLeft;
        break;
      case 'topCenter':
        result = Alignment.topCenter;
        break;
      case 'topRight':
        result = Alignment.topRight;
        break;
      case 'centerLeft':
        result = Alignment.centerLeft;
        break;
      case 'center':
        result = Alignment.center;
        break;
      case 'centerRight':
        result = Alignment.centerRight;
        break;
      case 'bottomLeft':
        result = Alignment.bottomLeft;
        break;
      case 'bottomCenter':
        result = Alignment.bottomCenter;
        break;
      case 'bottomRight':
        result = Alignment.bottomRight;
        break;
      default:
        // TODO (x,y)
        result = defaultValue;
        break;
    }
    return result;
  }
}

class WXAlignmentDirectional {
  static AlignmentDirectional parse(WXProperty value,
      {AlignmentDirectional defaultValue = AlignmentDirectional.topStart}) {
    AlignmentDirectional result = defaultValue;
    if (null == value) return result;
    switch (getAttributeKey(value.getValue())) {
      case 'topStart':
        result = AlignmentDirectional.topStart;
        break;
      case 'topCenter':
        result = AlignmentDirectional.topCenter;
        break;
      case 'topEnd':
        result = AlignmentDirectional.topEnd;
        break;
      case 'centerStart':
        result = AlignmentDirectional.centerStart;
        break;
      case 'center':
        result = AlignmentDirectional.center;
        break;
      case 'centerEnd':
        result = AlignmentDirectional.centerEnd;
        break;
      case 'bottomStart':
        result = AlignmentDirectional.bottomStart;
        break;
      case 'bottomCenter':
        result = AlignmentDirectional.bottomCenter;
        break;
      case 'bottomEnd':
        result = AlignmentDirectional.bottomEnd;
        break;
      default:
        result = defaultValue;
        break;
    }
    return result;
  }
}

class WXOverflow {
  static Overflow parse(WXProperty value, {Overflow defaultValue}) {
    Overflow result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'clip':
        result = Overflow.clip;
        break;
      case 'visible':
        result = Overflow.visible;
        break;
      default:
        result = defaultValue;
        break;
    }
    return result;
  }
}

class WXStackFit {
  static StackFit parse(WXProperty value, {StackFit defaultValue}) {
    StackFit result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'loose':
        result = StackFit.loose;
        break;
      case 'expand':
        result = StackFit.expand;
        break;
      case 'passthrough':
        result = StackFit.passthrough;
        break;
      default:
        result = defaultValue;
        break;
    }
    return result;
  }
}

class WXFlexFit {
  static FlexFit parse(WXProperty value, {FlexFit defaultValue}) {
    FlexFit result = defaultValue;
    if (null == value) return result;
    switch (value.getValue()) {
      case 'loose':
        result = FlexFit.loose;
        break;
      case 'tight':
        result = FlexFit.tight;
        break;
      default:
        result = defaultValue;
        break;
    }
    return result;
  }
}

class WXBool {
  static bool parse(WXProperty value, {bool defaultValue}) {
    bool result = defaultValue;
    if (null != value) {
      result = 'false' == value.getValue();
    }
    return result;
  }
}

class WXInt {
  static int parse(WXProperty value, {int defaultValue}) {
    int result = defaultValue;
    if (null != value) {
      result = int.parse(_removePx(value.getValue()));
    }
    return result;
  }
}

class WXDouble {
  static double parse(WXProperty value, {double defaultValue}) {
    double result = defaultValue;
    if (null != value) {
      result = double.parse(_removePx(value.getValue()));
    }
    return result;
  }
}

class WXMatrix4 {
  static Matrix4 parse(WXProperty value, {Matrix4 defaultValue}) {
    Matrix4 result = defaultValue;
    if (null != value) {
      var a = value.getValue();
    }
    return result;
  }
}




class WXColor {
  static Color parseColor(String str, {Color defaultValue = Colors.transparent}) {
    Color color = defaultValue;
    if (null != str) {
      if (str.startsWith('#')) {
        color = WXColor.hexToColor(str);
      } else {
        color = WXColor._getColor(str);
      }
    }
    return color;
  }

  static Color hexToColor(String s) {
    if (s.length == 7) {
      return Color(int.parse(s.substring(1, 7), radix: 16) + 0xFF000000);
    } else {
      return Color(int.parse(s.substring(1, 9), radix: 16));
    }
  }

  static Color parse(WXProperty value, {Color defaultValue}) {
    Color result = defaultValue;
    if (null != value) {
      result = WXColor.parseColor(value.getValue(), defaultValue: null);
    }
    return result;
  }

  static List<Color> parseColors(WXProperty value, {List<Color> defaultValue}) {
    List<Color> result = defaultValue;
    if (null != value && value.getValue() != null) {
      List<String> colors = value.getValue().split(",");
      if (colors.isNotEmpty && colors.length == 2) {
        result = List();
        result.add(parseColor(colors[0], defaultValue: null));
        result.add(parseColor(colors[1], defaultValue: null));
      }
    }
    return result;
  }

  static Color _getColor(String str, {Color defaultValue = Colors.transparent}) {
    switch (str) {
      case 'white':
        return Colors.white;
      case 'blue':
        return Colors.blue;
      case 'green':
        return Colors.green;
      case 'yellow':
        return Colors.yellow;
      case 'cyan':
        return Colors.cyan;
      case 'gray':
        return Colors.grey;
      case 'black':
        return Colors.black;
      case 'red':
        return Colors.red;
      case 'orange':
        return Colors.orange;
      case 'brown':
        return Colors.brown;
      case 'pink':
        return Colors.pink;
      case 'purple':
        return Colors.purple;
      case 'indigo':
        return Colors.indigo;
      case 'teal':
        return Colors.teal;
      case 'lime':
        return Colors.lime;
      case 'amber':
        return Colors.amber;
      case 'transparent':
        return Colors.transparent;
      default:
        return defaultValue;
    }
  }

}

String _removePx(String pxString) {
  if (pxString == null) {
    return null;
  }
  if (pxString.endsWith('px')) {
    return pxString.replaceAll('px', '');
  }
  return pxString;
}


String getAttributeKey(String v) {
  String value = cssStyle2DomStyle(v);
  return value ?? v;
}

String cssStyle2DomStyle(String sName) {
  var name=sName.split("-");
  for(int i=1;i<name.length;i++){
    name[i]=name[i].substring(0,1).toUpperCase()+name[i].substring(1);
  }
  return name.join('');
}

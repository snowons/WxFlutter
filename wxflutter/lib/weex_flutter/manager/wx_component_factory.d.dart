// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// ComponentWriterGenerator
// **************************************************************************

import 'dart:convert';
import '../model/wx_component.dart';
import '../component/wx_base_widget.dart';
import '../bridge/wx_channel.dart';

import 'package:weex_flutter_demo/weex_flutter/component/wx_gesture_detector.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_container.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_flat_button.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_decorated_box.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_indexed_stack.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_fractionally_sized_box.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_text_field.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_text.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_icon.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_transform.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_visibility.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_center.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_constrained_box.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_wrap.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_image.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_flex.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_list_view.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_padding.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_stack.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_inkwell.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_tab_bar_view.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_positioned.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_rich_text.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_single_child_scrollView.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_aspect_ratio.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_expanded.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_raised_button.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_column.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_flexible.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_align.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_circular_progress_indicator.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_clip.dart';
import 'package:weex_flutter_demo/weex_flutter/component/wx_row.dart';
import 'wx_component_factory.dart';

class WXComponentFactoryImpl extends WXComponentFactory {
  static final WXComponentFactoryImpl _singleton =
      WXComponentFactoryImpl._init();
  factory WXComponentFactoryImpl() {
    return _singleton;
  }
  WXComponentFactoryImpl._init() {}
  final Map<String, List<Map<String, dynamic>>> innerMap =
      <String, List<Map<String, dynamic>>>{
    'gesture-detector': [
      {'clazz': WXGestureDetectorStateless, 'methods': []}
    ],
    'GestureDetector': [
      {'clazz': WXGestureDetectorStateless, 'methods': []}
    ],
    'container': [
      {'clazz': WXContainerStateless, 'methods': []}
    ],
    'div': [
      {'clazz': WXContainerStateless, 'methods': []}
    ],
    'Container': [
      {'clazz': WXContainerStateless, 'methods': []}
    ],
    'flat-button': [
      {'clazz': WXFlatButtonStateless, 'methods': []}
    ],
    'FlatButton': [
      {'clazz': WXFlatButtonStateless, 'methods': []}
    ],
    'decorated-box': [
      {'clazz': WXDecoratedBoxStateless, 'methods': []}
    ],
    'DecoratedBox': [
      {'clazz': WXDecoratedBoxStateless, 'methods': []}
    ],
    'indexed-stack': [
      {'clazz': WXIndexedStackStateless, 'methods': []}
    ],
    'IndexedStack': [
      {'clazz': WXIndexedStackStateless, 'methods': []}
    ],
    'fractionally-sized-box': [
      {'clazz': WXFractionallySizedBoxStateless, 'methods': []}
    ],
    'FractionallySizedBox': [
      {'clazz': WXFractionallySizedBoxStateless, 'methods': []}
    ],
    'text-filed': [
      {
        'clazz': WXTextFiledStateless,
        'methods': ['setValue', 'clear', 'requestFocus', 'unfocus']
      }
    ],
    'TextFiled': [
      {
        'clazz': WXTextFiledStateless,
        'methods': ['setValue', 'clear', 'requestFocus', 'unfocus']
      }
    ],
    'text': [
      {'clazz': WXTextStateless, 'methods': []}
    ],
    'Text': [
      {'clazz': WXTextStateless, 'methods': []}
    ],
    'icon': [
      {'clazz': WXIconStateless, 'methods': []}
    ],
    'Icon': [
      {'clazz': WXIconStateless, 'methods': []}
    ],
    'transform': [
      {'clazz': WXTransformStateless, 'methods': []}
    ],
    'Transform': [
      {'clazz': WXTransformStateless, 'methods': []}
    ],
    'visibility': [
      {'clazz': WXVisibilityStateless, 'methods': []}
    ],
    'Visibility': [
      {'clazz': WXVisibilityStateless, 'methods': []}
    ],
    'center': [
      {'clazz': WXCenterStateless, 'methods': []}
    ],
    'Center': [
      {'clazz': WXCenterStateless, 'methods': []}
    ],
    'constrained-box': [
      {'clazz': WXConstrainedBoxStateless, 'methods': []}
    ],
    'ConstrainedBox': [
      {'clazz': WXConstrainedBoxStateless, 'methods': []}
    ],
    'wrap': [
      {'clazz': WXWrapStateless, 'methods': []}
    ],
    'Wrap': [
      {'clazz': WXWrapStateless, 'methods': []}
    ],
    'img': [
      {'clazz': WXImageStateless, 'methods': []}
    ],
    'image': [
      {'clazz': WXImageStateless, 'methods': []}
    ],
    'Image': [
      {'clazz': WXImageStateless, 'methods': []}
    ],
    'flex': [
      {'clazz': WXFlexStateless, 'methods': []}
    ],
    'Flex': [
      {'clazz': WXFlexStateless, 'methods': []}
    ],
    'list-view': [
      {'clazz': WXListViewStateless, 'methods': []}
    ],
    'ListView': [
      {'clazz': WXListViewStateless, 'methods': []}
    ],
    'padding': [
      {'clazz': WXPaddingStateless, 'methods': []}
    ],
    'Padding': [
      {'clazz': WXPaddingStateless, 'methods': []}
    ],
    'stack': [
      {'clazz': WXStackStateless, 'methods': []}
    ],
    'Stack': [
      {'clazz': WXStackStateless, 'methods': []}
    ],
    'ink-well': [
      {'clazz': WXInkWellStateless, 'methods': []}
    ],
    'InkWell': [
      {'clazz': WXInkWellStateless, 'methods': []}
    ],
    'tab-bar-view': [
      {'clazz': WXTabBarViewStateless, 'methods': []}
    ],
    'TabBarView': [
      {'clazz': WXTabBarViewStateless, 'methods': []}
    ],
    'positioned': [
      {'clazz': WXPositionedStateless, 'methods': []}
    ],
    'Positioned': [
      {'clazz': WXPositionedStateless, 'methods': []}
    ],
    'rich-text': [
      {'clazz': WXRichTextStateless, 'methods': []}
    ],
    'RichText': [
      {'clazz': WXRichTextStateless, 'methods': []}
    ],
    'single-child-scroll-view': [
      {'clazz': WXSingleChildScrollViewStateless, 'methods': []}
    ],
    'SingleChildScrollView': [
      {'clazz': WXSingleChildScrollViewStateless, 'methods': []}
    ],
    'aspect-ratio': [
      {'clazz': WXAspectRatioStateless, 'methods': []}
    ],
    'AspectRatio': [
      {'clazz': WXAspectRatioStateless, 'methods': []}
    ],
    'expanded': [
      {'clazz': WXExpandedStateless, 'methods': []}
    ],
    'Expanded': [
      {'clazz': WXExpandedStateless, 'methods': []}
    ],
    'raised-button': [
      {'clazz': WXRaisedButtonStateless, 'methods': []}
    ],
    'RaisedButton': [
      {'clazz': WXRaisedButtonStateless, 'methods': []}
    ],
    'column': [
      {'clazz': WXColumnStateless, 'methods': []}
    ],
    'Column': [
      {'clazz': WXColumnStateless, 'methods': []}
    ],
    'flexible': [
      {'clazz': WXFlexibleStateless, 'methods': []}
    ],
    'Flexible': [
      {'clazz': WXFlexibleStateless, 'methods': []}
    ],
    'align': [
      {'clazz': WXAlignStateless, 'methods': []}
    ],
    'Align': [
      {'clazz': WXAlignStateless, 'methods': []}
    ],
    'circular-progress-indicator': [
      {'clazz': WXCircularProgressIndicatorStateless, 'methods': []}
    ],
    'CircularProgressIndicator': [
      {'clazz': WXCircularProgressIndicatorStateless, 'methods': []}
    ],
    'clip': [
      {'clazz': WXClipStateless, 'methods': []}
    ],
    'Clip': [
      {'clazz': WXClipStateless, 'methods': []}
    ],
    'row': [
      {'clazz': WXRowStateless, 'methods': []}
    ],
    'Row': [
      {'clazz': WXRowStateless, 'methods': []}
    ]
  };

  dynamic instanceFromClazz(Type clazz, WXBaseWidget parent, String pageId,
      WXChannel methodChannel, WXComponent component) {
    switch (clazz) {
      case WXGestureDetectorStateless:
        return new WXGestureDetectorStateless(
            parent, pageId, methodChannel, component);
      case WXContainerStateless:
        return new WXContainerStateless(
            parent, pageId, methodChannel, component);
      case WXFlatButtonStateless:
        return new WXFlatButtonStateless(
            parent, pageId, methodChannel, component);
      case WXDecoratedBoxStateless:
        return new WXDecoratedBoxStateless(
            parent, pageId, methodChannel, component);
      case WXIndexedStackStateless:
        return new WXIndexedStackStateless(
            parent, pageId, methodChannel, component);
      case WXFractionallySizedBoxStateless:
        return new WXFractionallySizedBoxStateless(
            parent, pageId, methodChannel, component);
      case WXTextFiledStateless:
        return new WXTextFiledStateless(
            parent, pageId, methodChannel, component);
      case WXTextStateless:
        return new WXTextStateless(parent, pageId, methodChannel, component);
      case WXIconStateless:
        return new WXIconStateless(parent, pageId, methodChannel, component);
      case WXTransformStateless:
        return new WXTransformStateless(
            parent, pageId, methodChannel, component);
      case WXVisibilityStateless:
        return new WXVisibilityStateless(
            parent, pageId, methodChannel, component);
      case WXCenterStateless:
        return new WXCenterStateless(parent, pageId, methodChannel, component);
      case WXConstrainedBoxStateless:
        return new WXConstrainedBoxStateless(
            parent, pageId, methodChannel, component);
      case WXWrapStateless:
        return new WXWrapStateless(parent, pageId, methodChannel, component);
      case WXImageStateless:
        return new WXImageStateless(parent, pageId, methodChannel, component);
      case WXFlexStateless:
        return new WXFlexStateless(parent, pageId, methodChannel, component);
      case WXListViewStateless:
        return new WXListViewStateless(
            parent, pageId, methodChannel, component);
      case WXPaddingStateless:
        return new WXPaddingStateless(parent, pageId, methodChannel, component);
      case WXStackStateless:
        return new WXStackStateless(parent, pageId, methodChannel, component);
      case WXInkWellStateless:
        return new WXInkWellStateless(parent, pageId, methodChannel, component);
      case WXTabBarViewStateless:
        return new WXTabBarViewStateless(
            parent, pageId, methodChannel, component);
      case WXPositionedStateless:
        return new WXPositionedStateless(
            parent, pageId, methodChannel, component);
      case WXRichTextStateless:
        return new WXRichTextStateless(
            parent, pageId, methodChannel, component);
      case WXSingleChildScrollViewStateless:
        return new WXSingleChildScrollViewStateless(
            parent, pageId, methodChannel, component);
      case WXAspectRatioStateless:
        return new WXAspectRatioStateless(
            parent, pageId, methodChannel, component);
      case WXExpandedStateless:
        return new WXExpandedStateless(
            parent, pageId, methodChannel, component);
      case WXRaisedButtonStateless:
        return new WXRaisedButtonStateless(
            parent, pageId, methodChannel, component);
      case WXColumnStateless:
        return new WXColumnStateless(parent, pageId, methodChannel, component);
      case WXFlexibleStateless:
        return new WXFlexibleStateless(
            parent, pageId, methodChannel, component);
      case WXAlignStateless:
        return new WXAlignStateless(parent, pageId, methodChannel, component);
      case WXCircularProgressIndicatorStateless:
        return new WXCircularProgressIndicatorStateless(
            parent, pageId, methodChannel, component);
      case WXClipStateless:
        return new WXClipStateless(parent, pageId, methodChannel, component);
      case WXRowStateless:
        return new WXRowStateless(parent, pageId, methodChannel, component);
      default:
        return null;
    }
  }
}

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import '../bridge/wx_channel.dart';
import '../model/wx_component.dart';
import '../model/wx_data.dart';
import '../util/wx_obj_parse.dart';
import '../annotation/annotation_obj.dart';
import './wx_base_widget.dart';

@Component("list-view,ListView")
class WXListViewStateless extends WXBaseWidget {
  ScrollController _scrollController = ScrollController();

  WXListViewStateless(WXBaseWidget parent, String pageId,
      WXChannel methodChannel, WXComponent component)
      : super(
            parent: parent,
            pageId: pageId,
            methodChannel: methodChannel,
            component: component,
            data: ValueNotifier(WXData(component.properties)));

  void _scrollStart() {
    debugPrint("on _scrollToLower ");
    var event = getEvent("scrollStart");
    if (null != event) {
      onScrollEvent(methodChannel, pageId, component.ref, null, event);
    }
  }

  void _scrollEnd() {
    debugPrint("on _scrollToLower ");
    var event = getEvent("scrollEnd");
    if (null != event) {
      onScrollEvent(methodChannel, pageId, component.ref, null, event);
    }
  }

  void _scrollToUpper() {
    debugPrint("on _scrollToUpper ");
    var event = getEvent("scrollToUpper");
    if (null != event) {
      onScrollEvent(methodChannel, pageId, component.ref, null, event);
    }
  }

  void _scrollToLower() {
    debugPrint("on _scrollToLower ");
    var event = getEvent("scrollToLower");
    if (null != event) {
      onScrollEvent(methodChannel, pageId, component.ref, null, event);
    }
  }

  void _scroll(double pixels) {
    debugPrint("on _scroll = " + pixels.toString());
    var event = getEvent("scrollToLower");
    if (null != event) {
      onScrollEvent(
          methodChannel, pageId, component.ref, {"offset": pixels}, event);
    }
  }

  /// 处理滚动事件
  bool handleScrollEvent(ScrollNotification notification) {
    if (notification.depth != 0) {
      return false;
    }
    // 处理顶部下拉刷新和底部上拉加载更多
    if (notification is OverscrollNotification) {
      debugPrint('Overscroll dy: ${notification?.dragDetails?.delta?.dy}');
    }
    if (notification is ScrollStartNotification) {
      _scrollStart();
    }
    // 处理松手后的行为
    if (notification is ScrollEndNotification) {
      if (notification.metrics.pixels == notification.metrics.minScrollExtent) {
        _scrollToUpper();
      } else if (notification.metrics.pixels ==
          notification.metrics.maxScrollExtent) {
        _scrollToLower();
      }

      _scrollEnd();
    }
    if (notification is ScrollUpdateNotification) {
      debugPrint('ScrollUpdate dy: ${notification?.dragDetails?.delta?.dy}');
      debugPrint('ScrollUpdate pixels: ${notification?.metrics?.pixels}');
      _scroll(notification?.metrics?.pixels);
    }
    return true;
  }

  // @override
  Widget build(BuildContext context) {
    return Scrollbar(
      key: ObjectKey(component),
      child: NotificationListener<ScrollNotification>(
          onNotification: (ScrollNotification notification) {
            return handleScrollEvent(notification); // 返回false可见滚动条
          },
          child: ValueListenableBuilder(
              builder: (BuildContext context, WXData data, Widget child) {
                return ListView(
                    key: ObjectKey(component),
                    scrollDirection: WXAxis.parse(
                        data.map[getAttributeKey("scroll-direction")],
                        defaultValue: Axis.vertical),
                    reverse: WXBool.parse(data.map[getAttributeKey("reverse")],
                        defaultValue: false),
                    primary: WXBool.parse(data.map[getAttributeKey("primary")]),
                    shrinkWrap: WXBool.parse(
                        data.map[getAttributeKey("shrink-wrap")],
                        defaultValue: true),
                    padding: WXPadding.parse(data.map),
                    itemExtent: WXDouble.parse(
                        data.map[getAttributeKey("item-extent")]),
                    addAutomaticKeepAlives: WXBool.parse(
                        data.map[getAttributeKey("add-automatic-keep-alives")],
                        defaultValue: true),
                    addRepaintBoundaries: WXBool.parse(
                        data.map[getAttributeKey("add-repaint-boundaries")],
                        defaultValue: true),
                    addSemanticIndexes: WXBool.parse(
                        data.map[getAttributeKey("add-semantic-indexes")],
                        defaultValue: true),
                    cacheExtent:
                        WXDouble.parse(data.map[getAttributeKey("cache-extent")]),
                    children: data.children,
                    semanticChildCount: WXInt.parse(data.map[getAttributeKey("semantic-child-count")]));
              },
              valueListenable: this.data)),
    );
  }
}

import '../model/wx_component.dart';
import '../component/wx_base_widget.dart';
import '../bridge/wx_channel.dart';
import '../manager/wx_component_factory.d.dart';

class WXComponentManager {
  final String _pageId;
  final WXChannel _methodChannel;
  final Map<String, WXComponent> _componentMap = Map();
  final Map<String, WXBaseWidget> _widgetMap = Map();

  WXComponentManager(this._pageId, this._methodChannel);

  /// 克隆节点id
  WXComponent createComponentTree(WXComponent parent, Map<String, dynamic> node,
      {id}) {
    var component = WXComponent(parent, node, id: id);
    _componentMap.putIfAbsent(component.ref, () => component);
    // await _addChildren(component, node, id: id);
    return component;
  }

  void addElement(Map<String, dynamic> data, {id}) {
    String parentRef = data['parentRef'];
    WXBaseWidget parentWidget = _widgetMap[parentRef];
    WXComponent parent = _componentMap[parentRef];

    WXComponent component = createComponentTree(parent, data, id: id);
    WXBaseWidget widget = _createWidget(parentWidget, component, id: id);
    List<WXBaseWidget> children = List();
    children.add(widget);
    parentWidget.addChildren(children);

    _widgetMap.putIfAbsent(component.ref, () => widget);
  }

  void updateAttrs(Map<String, dynamic> data, {id}) {
    String ref = data['ref'];
    WXBaseWidget widget = _widgetMap[ref];

    widget.updateProperty(data);
  }

  /// 为WXComponent添加children
  Future _addChildren(WXComponent parent, Map<String, dynamic> data,
      {id}) async {
    var children = data['childNodes'];
    var ref = data['ref'];
    if (null != children && ref) {
      for (var child in children) {
        var result = await createComponentTree(parent, child, id: id);
        parent.children.add(result);
      }
    }
  }

  List<WXBaseWidget> _getChildren(WXBaseWidget parent, WXComponent component) {
    List<WXBaseWidget> children = [];
    for (var it in component?.children) {
      var child = createWidgetTree(parent, it);
      if (null != child) {
        if (child is List<WXBaseWidget>) {
          children.add(child);
        } else {
          children.add(child);
        }
      }
    }
    return children;
  }

  Future _updateChildren(WXBaseWidget widget) async {
    for (var it in widget.data.value.children) {
      // await handleProperty(_methodChannel, _pageId, it.component);
      it.updateProperties(it.component.properties);
      if (it.data.value.children.isNotEmpty) {
        _updateChildren(it);
      }
    }
  }

  WXBaseWidget createWidgetTree(WXBaseWidget parent, WXComponent component,
      {id}) {
    // await handleProperty(_methodChannel, _pageId, component);
    WXBaseWidget widget = _createWidget(parent, component, id: id);
    // widget.setChildren(await _getChildren(widget, component));
    _widgetMap.putIfAbsent(component.ref, () => widget);
    return widget;
  }

  WXBaseWidget _createWidget(WXBaseWidget parent, WXComponent component, {id}) {
    WXBaseWidget widget;

    if (WXComponentFactoryImpl().innerMap.containsKey(component.tag)) {
      Map m = WXComponentFactoryImpl().innerMap[component.tag][0];
      Type clazz = m['clazz'];
      widget = WXComponentFactoryImpl()
          .instanceFromClazz(clazz, parent, _pageId, _methodChannel, component);
    }
    return widget;
  }

  void clear() {
    _componentMap.clear();
    _widgetMap.clear();
  }

  List<WXBaseWidget> _getNewChildren(
      WXComponent parent, WXComponent component, WXBaseWidget parentWidget,
      {id}) {
    List<WXBaseWidget> children = [];
    for (var it in parent.children) {
      if (it == component) {
        WXBaseWidget result = createWidgetTree(parentWidget, component, id: id);
        if (null != result) {
          children.add(result);
        }
      } else {
        /// 如果是for节点需要把原来的children迁移过来
        // if (null != it.getForExpression()) {
        //   parentWidget.data.value.children.forEach((child) {
        //     if (child.component.id.startsWith(it.id)) {
        //       children.add(child);
        //     }
        //   });
        // } else {
        //   var widget = _widgetMap[it.id];
        //   if (null != widget) {
        //     children.add(widget);
        //   }
        // }
      }
    }
    return children;
  }

  Future updateTree(List<dynamic> list) async {
    // for (var it in list) {
    //   var type = it['type'];
    //   var id = it['id'];
    //   switch (type) {
    //     case TYPE_DIRECTIVE:
    //
    //       /// 更新for需要将parentComponent的children重新检查更新一遍
    //       if (_componentMap.containsKey(id)) {
    //         var component = _componentMap[id];
    //         var parentId = component.parent.id;
    //         if (_componentMap.containsKey(parentId) &&
    //             _widgetMap.containsKey(parentId)) {
    //           var parentComponent = _componentMap[parentId];
    //           var parentWidget = _widgetMap[parentId];
    //           var newSize = it['value'];
    //           var children = await _getNewChildren(
    //               parentComponent, component, parentWidget,
    //               id: id);
    //           parentWidget.updateChildren(children);
    //         }
    //       }
    //       break;
    //     case TYPE_PROPERTY:
    //       if (_widgetMap.containsKey(id)) {
    //         var widget = _widgetMap[id];
    //         widget.updateProperty(it);
    //       }
    //       break;
    //   }
    // }
  }
}

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

  WXComponent createComponentTree(WXComponent parent, Map<String, dynamic> node,
      {id}) {
    var component = WXComponent(parent, node, id: id);
    _componentMap.putIfAbsent(component.ref, () => component);
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
  
  void callNativeComponent(Map<String, dynamic> data, {id}) {
    String ref = data['ref'];
    WXBaseWidget widget = _widgetMap[ref];

    widget.invokeMethod(data);
  }

  WXBaseWidget createWidgetTree(WXBaseWidget parent, WXComponent component,
      {id}) {
    WXBaseWidget widget = _createWidget(parent, component, id: id);
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
    _widgetMap.forEach((key, value) {
      value.dispose();
    });
    _widgetMap.clear();
  }

}

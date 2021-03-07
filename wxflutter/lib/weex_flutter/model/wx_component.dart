import '../model/wx_property.dart';

enum WXDisplayType {
  WXDisplayTypeNone,
  WXDisplayTypeBlock,
}


class WXComponent {
   String id;

   String ref;

   String tag;

   WXComponent parent;

   Map<String, dynamic> node;

   Map<String, dynamic> styles;

   Map<String, dynamic> events;

   Map<String, WXProperty> properties;

   List<WXComponent> children = [];

   WXComponent(this.parent, this.node,
      {id}) {
    this.tag = node["type"];
    this.id = id ?? "$tag-$hashCode";
    this.properties = _initProperties(node);
    this.events = _initEvents(node);
    this.ref = node["ref"];
    this.parent = parent;
  }

  Map<String, WXProperty> _initProperties(
      Map<String, dynamic> node) {
    if (null == node) {
      return null;
    }
    Map properties = new Map<String, WXProperty>();

    var attr = node['attr'];
    if (null != attr) {
      attr.forEach((k, v) {
        properties.putIfAbsent(k, () => WXProperty(v.toString()));
      });
    }
    var style = node['style'];
    if (null != style) {
      style.forEach((k, v) {
        properties.putIfAbsent(k, () => WXProperty(v.toString()));
      });
    }
    return properties;
  }

  Map<String,dynamic> _initEvents(Map<String, dynamic> node) {
    if (null == node) {
      return null;
    }
    var events = node['event'];

    if(events != null) {
      Map<String,dynamic> map = Map();
      events.forEach((element){//遍历每个元素  此时不可add或remove  否则报错 但可以修改元素值，
        map.putIfAbsent(element, () => element);
      });
      return map;
    }
    return null;
  }
}



class WXProperty {
  String property, _value,styles;

  WXProperty(this.property) {
    this._value = property;
   }

  void setValue(String value) {
    _value = value;
  }

  String getValue() {
    return _value;
  }

  @override
  String toString() {
    return 'WXProperty{property: $property, _expValue: $_value}';
  }
}

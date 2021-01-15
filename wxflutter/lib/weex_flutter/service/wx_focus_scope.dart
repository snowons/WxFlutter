import 'package:flutter/material.dart';

class WXFocusScopeService {
  final GlobalKey<NavigatorState> navigatorKey = GlobalKey(debugLabel: 'navigate_key');

  void requestFocus() {
    FocusScope.of(navigatorKey.currentContext).requestFocus(FocusNode());
  }
}
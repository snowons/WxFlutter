import 'package:flutter/material.dart';

class WXNavigateService {
  final GlobalKey<NavigatorState> navigatorKey = GlobalKey(debugLabel: 'navigate_key');

  NavigatorState get navigator => navigatorKey.currentState;

  Widget get currentWidget => navigatorKey.currentWidget;

  get pushNamed => navigator.pushNamed;
  get push => navigator.push;
  get pop => navigator.pop;
}
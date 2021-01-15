import 'dart:convert';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:synchronized/synchronized.dart';
class WXStorageManager{
  static Future setString(String key, String value) async{
    SharedPreferences sp = await SharedPreferences.getInstance();
    return sp.setString(key, value);
  }

  static Future<String> getString(String key) async{
    SharedPreferences sp = await SharedPreferences.getInstance();
    return sp.getString(key);
  }

  static Future<bool> remove(String key) async{
    SharedPreferences sp = await SharedPreferences.getInstance();
    return sp.remove(key);
  }

  static Future clear() async{
    SharedPreferences sp = await SharedPreferences.getInstance();
    return sp.clear();
  }

  static Future<Set<String>> getAllKeys() async {
    SharedPreferences sp = await SharedPreferences.getInstance();
    return sp.getKeys();
  }
}
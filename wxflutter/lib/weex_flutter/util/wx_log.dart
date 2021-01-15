enum WXLogLevel {
  OFF,
  ERROR,
  WARNING,
  INFO,
  Log,
  DEBUG,
  ALL,
}

class WXLog {
  static const WXLogLevel _level = WXLogLevel.ALL;
  static const bool isRelease = const bool.fromEnvironment("dart.vm.product");

  static void _printLog(String tag, Object message,WXLogLevel level,String pre) {
    if (level.index > _level.index && !isRelease) return;
    StringBuffer sb = new StringBuffer();
    sb..write(pre)..write(tag ?? '')..write(': ')..write(message);
    print(sb.toString());
  }

  static void log(String tag,Object message) => _printLog(tag,message, WXLogLevel.Log,'L -> ');

  static void debug(String tag,Object message) => _printLog(tag,message, WXLogLevel.DEBUG,'D -> ');

  static void info(String tag,Object message) => _printLog(tag,message, WXLogLevel.INFO,'I -> ');

  static void warning(String tag,Object message) => _printLog(tag,message, WXLogLevel.WARNING,'W -> ');

  static void error(String tag,Object message) => _printLog(tag,message, WXLogLevel.ERROR,'E -> ');
}
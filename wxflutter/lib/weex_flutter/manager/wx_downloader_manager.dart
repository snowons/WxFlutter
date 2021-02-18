import 'dart:io';
import 'dart:convert';

import 'package:flutter_downloader/flutter_downloader.dart';
import 'package:path_provider/path_provider.dart';

class WXDownloaderManager {
  factory WXDownloaderManager() => _getInstance();
  static WXDownloaderManager get instance => _getInstance();
  static WXDownloaderManager _instance;
  static String localBasePath;
  WXDownloaderManager._internal() {}

  static WXDownloaderManager _getInstance() {
    if (_instance == null) {
      _instance = new WXDownloaderManager._internal();
      FlutterDownloader.initialize(
          debug: true // optional: set false to disable printing logs to console
      );
      initDownloadPath();
    }
    return _instance;
  }

  static initDownloadPath() async {
    final directory =Platform.isAndroid
        ? await getExternalStorageDirectory()
        : await getApplicationSupportDirectory();

    localBasePath = directory.path + '/WXDownload';

    final savedDir = Directory(localBasePath);
    bool hasExisted = await savedDir.exists();
    if (!hasExisted) {
      savedDir.create();
    }
  }

  downloadFile(downloadUrl, savePath) async {
    await FlutterDownloader.enqueue(
      url: downloadUrl,
      savedDir: savePath,
      showNotification: true,
      // show download progress in status bar (for Android)
      openFileFromNotification:
      true, // click on notification to open downloaded file (for Android)
    );
  }

  Future<String> getJSBundle(renderUrl) async {
    int currentTimeMillis =  new DateTime.now().millisecondsSinceEpoch;
    var httpClient = new HttpClient();
    var url = renderUrl+'?timeMillis='+currentTimeMillis.toString();
    // var uri = new Uri.http(
    //     'example.com', '/path1/path2', {'timeMillis': currentTimeMillis.toString(), 'param2': 'foo'});
    var request = await httpClient.getUrl(Uri.parse(url));
    var response = await request.close();
    var responseBody = await response.transform(utf8.decoder).join();
    return responseBody;
  }
}

import 'dart:io' show Platform;
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'dart:convert' as convert;
import 'package:get_it/get_it.dart';
import 'package:weex_flutter_demo/weex_flutter/manager/wx_sdk_engine.dart';
import 'main.reflectable.dart';
import 'weex_flutter/service/wx_navigate_service.dart';
import 'weex_flutter/wx_base_page.dart';
import 'weex_flutter/util/wx_log.dart';
import 'weex_flutter/manager/wx_web_socket_manager.dart';
import 'weex_flutter/bridge/wx_jsc_runtime_manager.dart';
import 'weex_flutter/wx_module_componet.dart';

void main() {
  initializeReflectable();
  WidgetsFlutterBinding.ensureInitialized();

  WXSdkEngine.instance.initSDKEnvironment();

  if(Platform.isIOS) {
    WXWebSocketManager().initWebSocket(onOpen: () {

    }, onMessage: (data) {
      Map<String,dynamic> res = convert.jsonDecode(data);
      if(res != null && res.containsKey('REFRESH')) {
        WXLog.log("Main","WebSocket REFRESH:$data['REFRESH']");

        Map<String, WXJSMessageHandler> handlers = WXJSCRuntimeManager().handlers;
        if(handlers!=null && handlers.isNotEmpty) {
          handlers.forEach((key, value) {
            if(key != 'root') {
              value.onMessage('reload', null);
            }
          });
        }
      } else {
        WXLog.log("Main",'WebSocket onMessage:$data');
      }

    }, onError: (e) {
      WXLog.error("Main",'WebSocket onError:$e');
    });
  } else if(Platform.isAndroid) {
    // TODO
  }


  runApp(new MyApp());
}

class MyApp extends StatelessWidget {
  MyApp() {}

  @override
  Widget build(BuildContext context) {
    return MaterialApp(navigatorKey: locator<WXNavigateService>().navigatorKey, home: MainDemosPage(
    ));
  }
}

class ItemPageModel {
  String title;
  String url;
  String loadType;//network,assets

  ItemPageModel(this.title, this.url,this.loadType);
}

class MainDemosPage extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    return new MainDemosPageState();
  }
}

class MainDemosPageState extends State<MainDemosPage> {
  List<ItemPageModel> mItemList = new List();



  @override
  void initState() {
    super.initState();
    mItemList.add(new ItemPageModel("Demo", '/demo.js','assets'));
    mItemList.add(new ItemPageModel("Text", '/components/text.js','assets'));
    mItemList.add(new ItemPageModel("Image", '/components/image.js','assets'));
    mItemList.add(new ItemPageModel("List", '/components/list.js','assets'));
    mItemList.add(new ItemPageModel("Button", '/components/button.js','assets'));
    mItemList.add(new ItemPageModel("TextFiled", '/components/text-filed.js','assets'));
    mItemList.add(new ItemPageModel("GestureDetector", '/components/gesture-detector.js','assets'));
    mItemList.add(new ItemPageModel("Storage", '/modules/storage.js','assets'));
    mItemList.add(new ItemPageModel("Navigate", '/modules/navigate.js','assets'));
    mItemList.add(new ItemPageModel("Timer", '/modules/timer.js','assets'));
    mItemList.add(new ItemPageModel("Http", '/modules/http.js','assets'));
  }

  Widget buildItem(ItemPageModel model) {
    return new InkWell(
        onTap: () {

          WXBasePage page = new WXBasePage({
            'title':model.title,
            'url':model.url,
            'loadType':model.loadType
          });
          GetIt.instance<WXNavigateService>().push(new CupertinoPageRoute<void>(builder: (ctx) => page));
        },
        child: new Container(
            height: 50.0,
            child: new Center(
              child: new Text(
                model.title,
                style: new TextStyle(fontSize: 16.0, color: Color(0xFF666666)),
              ),
            ),
            decoration: new BoxDecoration(
                borderRadius: BorderRadius.all(Radius.circular(2.0)),
                color: Colors.white,
                border:
                new Border.all(width: 0.33, color: Color(0XFFEFEFEF)))));
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("WxFlutter"),
        centerTitle: true,
      ),
      body: new ListView.builder(
          itemCount: mItemList.length,
          itemBuilder: (BuildContext context, int index) {
            ItemPageModel model = mItemList[index];
            return buildItem(model);
          }),
    );
  }
}

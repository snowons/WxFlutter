import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:weex_flutter_demo/weex_flutter/manager/wx_sdk_engine.dart';
import 'main.reflectable.dart';
import 'weex_flutter/service/wx_navigate_service.dart';
import 'weex_flutter/wx_base_page.dart';


void main() {
  initializeReflectable();
  WidgetsFlutterBinding.ensureInitialized();
  WXSdkEngine.instance.initSDKEnvironment();
  runApp(new MyApp());
}

class MyApp extends StatelessWidget {
  MyApp() {
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(navigatorKey: locator<WXNavigateService>().navigatorKey, home: MainDemosPage());
  }
}

class ItemPageModel {
  String title;
  String pageName;
  String url;
  String uri;
  String type;

  ItemPageModel(this.title, this.uri,this.type);
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

    mItemList.add(new ItemPageModel("Text", 'text.js','components'));
    mItemList.add(new ItemPageModel("Image", 'image.js','components'));
    mItemList.add(new ItemPageModel("List", 'list.js','components'));
    mItemList.add(new ItemPageModel("Button", 'button.js','components'));
    mItemList.add(new ItemPageModel("TextFiled", 'text-filed.js','components'));
    mItemList.add(new ItemPageModel("GestureDetector", 'gesture-detector.js','components'));
    mItemList.add(new ItemPageModel("Storage", 'storage.js','modules'));
    mItemList.add(new ItemPageModel("Navigate", 'navigate.js','modules'));
  }

  Widget buildItem(ItemPageModel model) {
    return new InkWell(
        onTap: () {

          WXBasePage page = new WXBasePage({
            'title':model.title,
            'uri':model.uri,
            'url':model.url,
            'path':model.pageName,
            'type':model.type
          });
          Navigator.push(context,new CupertinoPageRoute<void>(builder: (ctx) => page));
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

import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/services.dart';
import 'package:get_it/get_it.dart';
import 'package:weex_flutter_demo/weex_flutter/manager/wx_sdk_engine.dart';
import 'main.reflectable.dart';
import 'weex_flutter/service/wx_navigate_service.dart';
import 'weex_flutter/wx_base_page.dart';
import 'weex_flutter/wx_module_componet.dart';

void main() {
  initializeReflectable();
  WidgetsFlutterBinding.ensureInitialized();

  WXSdkEngine.instance.initSDKEnvironment();

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

class MainDemosPage extends StatefulWidget {

  @override
  State<StatefulWidget> createState() {
    return new MainDemosPageState();
  }
}

class MainDemosPageState extends State<MainDemosPage> {
  Map<String,dynamic> appConfig;

  @override
  void initState() {
    super.initState();

    Future<String> loadString = DefaultAssetBundle.of(context).loadString("assets/wxflutter.app.json");
    loadString.then((String value){
      appConfig = json.decode(value);
    });
  }

  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text("WxFlutter"),
        centerTitle: true,
      ),
      body: new ListView(children: <Widget>[
        Container(
          margin: EdgeInsets.only(bottom: 12.0),
          child: Column(children: <Widget>[
            Image.asset("assets/images/wxflutter.png"),
            Text('A toy for building Flutter apps with Weex',style: TextStyle(color: Colors.blueAccent,fontSize: 18))
          ],),
        ),
        Container(
          margin: EdgeInsets.only(top: 12.0),
          child: Column(children: <Widget>[
            Text('Written in VueJS, rendered by Flutter',style: TextStyle(color: Colors.red,fontSize: 22)),
            Padding(
              padding: EdgeInsets.all(20),
            ),
            FlatButton(
              color: Colors.blue,
              highlightColor: Colors.blue[700],
              colorBrightness: Brightness.dark,
              splashColor: Colors.grey,
              child: Text("Demo"),
              shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.0)),
              onPressed: () {
                var tabBar = appConfig['tabBar'];
                var item = {
                  'title':"Hello WxFlutter",
                  'url':tabBar['path'],
                  'tabBar':json.encode(tabBar),
                  'backgroundColor':tabBar['backgroundColor']
                };
                WXBasePage page = new WXBasePage(item);
                GetIt.instance<WXNavigateService>().push(new CupertinoPageRoute<void>(builder: (ctx) => page));
              },
            ),
          ],),
        ),
      ],),
    );
  }
}

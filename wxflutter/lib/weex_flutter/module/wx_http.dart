import '../annotation/annotation_obj.dart';
import '../annotation/reflector.dart';
import '../model/wx_js_callback.dart';
import 'wx_module.dart';
import 'dart:convert';
import 'package:dio/dio.dart';

@Module('http')
@Reflector()
class WXHttp extends WXModule {

  @JSMethod()
  void fetch(dynamic data,WXJSCallback callback)  {
    String method = data['method'] ?? "GET";
    String baseUrl = data['url'];
    String jsonString = data['data'];
    Map<String, dynamic> params ={};
    if(jsonString != null && jsonString.isNotEmpty) {
      params = json.decode(jsonString.trim());
    }

    Future<Response<Map>> response;
    BaseOptions options = BaseOptions(
      baseUrl: baseUrl,
      queryParameters:params,
      connectTimeout:data['timeout'] ??  60000,
      receiveTimeout:data['timeout'] ?? 30000,
      responseType: ResponseType.json
    );

    Dio dio = Dio(options);
    if(method == 'POST') {
      response =  dio.post(baseUrl, data: params);
    } else if(method == 'PUT') {
      response =  dio.put(baseUrl, queryParameters:params);
    } else if(method == 'DELETE') {
      response =  dio.delete(baseUrl, queryParameters:params);
    } else if(method == 'HEAD') {
      response =  dio.head(baseUrl, queryParameters:params);
    } else if(method == 'PATCH') {
      response =  dio.patch(baseUrl, queryParameters:params);
    } else {
      response =  dio.get(baseUrl, queryParameters:params);
    }
    response.then((value) {
      if(callback != null) {
        callback.invoke({
          'code':WXJSCallbackResult.kWXJSCallbackSuccess.index,
          'ok':value.statusMessage == 'OK',
          'statusCode':value.statusCode,
          'data':value.data,
        });
      }
    });
  }
}

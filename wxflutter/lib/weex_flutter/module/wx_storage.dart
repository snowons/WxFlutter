import '../annotation/annotation_obj.dart';
import '../annotation/reflector.dart';
import '../manager/wx_storage_manager.dart';
import '../model/wx_js_callback.dart';
import 'wx_module.dart';

@Module('storage')
@Reflector()
class WXStorage extends WXModule {
  @JSMethod()
  void setItem(String key, String value, WXJSCallback callback) {
    WXStorageManager.setString(key, value);
    if (callback != null) {
      callback.invoke({'code': '1'});
    }
  }

  @JSMethod()
  void getItem(String key, WXJSCallback callback) {
    WXStorageManager.getString(key).then((value)  {
           if (callback != null)
            {
              callback.invoke({
                'code': '1',
                'data': {'value':value ?? ''}
              });
            }
        });
  }

  @JSMethod()
  void removeItem(String key, WXJSCallback callback) {
    WXStorageManager.remove(key).then((value) => {
      if (callback != null)
        {
          callback.invoke({
            'code': '1',
          })
        }
    });
  }

  @JSMethod()
  void getAllKeys( WXJSCallback callback) {
    WXStorageManager.getAllKeys().then((value) => {
      if (callback != null)
        {
          callback.invoke({
            'code': '1',
            'data': {'value':value ?? ''}
          })
        }
    });
  }

  @JSMethod()
  void clear( WXJSCallback callback) {
    WXStorageManager.clear().then((value) => {
      if (callback != null)
        {
          callback.invoke({
            'code': '1'
          })
        }
    });
  }
}

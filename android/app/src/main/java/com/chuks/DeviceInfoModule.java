package com.chuks;

import android.os.Build;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;



public class DeviceInfoModule extends ReactContextBaseJavaModule {
    public DeviceInfoModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "GeneralDeviceInfo";
    }


    @ReactMethod
    public void getDeviceInfo(Promise promise) {
        try {
            WritableMap data = new WritableNativeMap();
            data.putString("model", Build.MODEL); 
            data.putString("manufacturer", Build.MANUFACTURER); 
            data.putString("brand", Build.BRAND); 
            data.putString("device", Build.DEVICE); 
            data.putString("product", Build.PRODUCT); 
            
            promise.resolve(data); 
        } catch (Exception e) {
            promise.reject("Error", e);
        }
    }

}

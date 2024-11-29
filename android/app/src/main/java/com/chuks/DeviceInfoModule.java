package com.chuks;

import android.os.Build;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.BatteryManager;


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



    @ReactMethod
    public void getBatteryLevel(Promise promise) {
        try {
            // Create an IntentFilter to listen for battery status changes
            IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
            Intent batteryStatus = getReactApplicationContext().registerReceiver(null, ifilter);
            
            // Retrieve the battery level and charging status
            int level = batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
            int status = batteryStatus.getIntExtra(BatteryManager.EXTRA_STATUS, -1);
            
            // Determine if the device is charging
            boolean isCharging = status == BatteryManager.BATTERY_STATUS_CHARGING || 
                                status == BatteryManager.BATTERY_STATUS_FULL;
            
            // Create a map to send both the battery level and charging status
            WritableMap data = new WritableNativeMap();
            data.putInt("level", level);
            data.putBoolean("isCharging", isCharging);
            
            promise.resolve(data); // Resolve the promise with battery level and charging status
        } catch (Exception e) {
            promise.reject("Error", e); // Reject the promise in case of an error
        }
    }

}



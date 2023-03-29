package com.petra;

import android.app.Application;

import com.RNRSA.RNRSAPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.lang.reflect.Array;
import java.util.Arrays;
import java.util.List;

import com.lugg.RNCConfig.RNCConfigPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import com.reactnativemmkv.MmkvPackage;
import com.reactnativequickbase64.QuickBase64Package;
import com.tectiv3.aes.RCTAesPackage;

import org.linusu.RNGetRandomValuesPackage;

public class MainApplication extends Application implements ReactApplication {



  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

          @Override
          protected List<ReactPackage> getPackages() {
              return Arrays.asList(
                      new MainReactPackage(),
                      new RNCConfigPackage(),
                      new MmkvPackage(),
                      new RNGetRandomValuesPackage(),
                      new QuickBase64Package(),
                      new RCTAesPackage(),
                      new RNRSAPackage(),
                      new RNCWebViewPackage()
              );
          }

          @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }



  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }
}

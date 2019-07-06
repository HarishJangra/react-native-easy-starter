package com.easy_boiler;

import android.app.Application;
import com.facebook.react.PackageList;
//custom packages

import com.facebook.react.ReactApplication;
//custom packages
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.List;

import androidx.multidex.MultiDex;
import android.content.Context;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
      // new MainReactPackage(),
      // packages.add(new new NetInfoPackage());
      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  protected void attachBaseContext(Context base){
    super.attachBaseContext(base);
    MultiDex.install(this);
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}

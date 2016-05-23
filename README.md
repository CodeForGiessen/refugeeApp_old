#**Code for Gießen - RefugeeApp**

![Ionic Framework](https://github.com/CodeForGiessen/refugeeApp/blob/master/app/images/ionic.png?raw=true)
![IonicMaterial](https://github.com/CodeForGiessen/refugeeApp/blob/master/app/images/logo-256.png?raw=true)
![Yeoman-generator-ionic](https://camo.githubusercontent.com/2aa3496f7bf9aeb758477ce01961748a486af0fe/687474703a2f2f692e696d6775722e636f6d2f4247727432514b2e706e67)

#Introduction
This project is a frontend application that works with the corresponding ![backend](https://github.com/CodeForGiessen/refugeeService). 

The project uses the ![ionic-framework](http://ionicframework.com/) in combination with ![ionicMaterial](http://ionicmaterial.com/). We scaffold this project with yeoman and the ![generator-ionic](https://github.com/diegonetto/generator-ionic) with grunt as well. ;)


#Contributing
##Installation
First of all you need grunt, bower and compass to start developing.

Execute the following commands with a terminal in the root folder of this project

```bash
$ npm install
$ bower install
$ grunt
$ grunt plugin:add:org.apache.cordova.device
$ grunt plugin:add:cordova-plugin-console
$ grunt plugin:add:org.apache.cordova.splashscreen
$ grunt plugin:add:org.apache.cordova.network-information
$ grunt plugin:add:org.apache.cordova.geolocation
$ grunt plugin:add:org.apache.cordova.inappbrowser
$ grunt serve
```

##Project Structure

Path         | Explanation
----------   | -------------
`./app/fonts/` | Fonts in your app.
`./app/images/` | Images in your app.
`./app/scripts/`  | Scripts (Controllers, Services, Directives, etc).
`./app/styles/` | The styles of your app using Sass.
`./app/templates/` | Views in your app. (Only html files)
`./app/index.html` | The init page.
`./app/bower_components` | Download scripts using bower.
`./resources/` | Your resource directory for iOS or Android
`./test/` | Directory for your test scripts

#Deployment
##Android Publishing
So first, we need to generate a release build of our app, targeted at each platform we wish to deploy on. Before we deploy, we should take care to adjust plugins needed during development that should not be in production mode.
For example, we probably don’t want the debug console plugin enabled, so we should remove it before generating the release builds:
```bash
$ cordova plugin rm cordova-plugin-console
```
To generate a release build for Android, we can use the following cordova cli command:
```bash
$ cordova build --release android
```
This will generate a release build based on the settings in your **config.xml**. Next, we can find our unsigned APK file in **platforms/android/build/outputs/apk**.
Before you can run the jarsigner command, copy the .keystore file into **platforms/android/build/outputs/apk**.
To sign the unsigned APK, run the **jarsigner** tool which is also included in the JDK:
```bash
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore codefor-key.keystore android-release-unsigned.apk cfgi
```
Enter the password for our keystore.

This signs the apk in place. Finally, we need to run the zip align tool to optimize the APK. The **zipalign** tool can be found in **/path/to/Android/sdk/build-tools/VERSION/zipalign.** For example, on OS X with Android Studio installed, zipalign is in **~/Library/Android/sdk/build-tools/VERSION/zipalign**:
```bash
$ zipalign -v 4 android-release-unsigned.apk RefugeeApp.apk
```
Now we have our final release binary called **RefugeeApp.apk** and we can release this on the Google Play Store for all the world to enjoy!

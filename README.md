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
$ grunt plugin:add:org.apache.cordova.console
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


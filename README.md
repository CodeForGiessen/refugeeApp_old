#**Code for Gießen - RefugeeApp**


#Introduction
This is a Ionic frontend application that works with the corresponding ![backend](https://github.com/CodeForGiessen/refugeeService)

First of all you need grunt, bower and compass to start developing.

#Installation
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

#Project Structure

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

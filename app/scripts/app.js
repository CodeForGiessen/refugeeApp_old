'use strict';
angular.module('refugeeApp', ['ionic', 'ionic-material', 'pascalprecht.translate'])
  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })

      .state('app.dashboard', {
        url: '/dashboard',
        views: {
          'menuContent': {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
          }
        }
      })

      .state('app.guide', {
        url: '/guide',
        views: {
          'menuContent': {
            templateUrl: 'templates/guide.html',
            controller: 'GuideCtrl'
          }
        }
      })

      .state('app.map', {
        url: '/map',
        views: {
          'menuContent': {
            templateUrl: 'templates/map.html',
            controller: 'MapCtrl'
          }
        }
      })

      .state('app.authorities', {
        url: '/authorities',
        views: {
          'menuContent': {
            templateUrl: 'templates/authorities.html',
            controller: 'DashboardCtrl'
          }
        }
      })

      .state('app.about', {
        url: '/about',
        views: {
          'menuContent': {
            templateUrl: 'templates/aboutPage.html',
            controller: 'DashboardCtrl'
          }
        }
      })

      .state('app.guideline', {
        url: '/guideline',
        views: {
          'menuContent': {
            templateUrl: 'templates/guideline.html',
            controller: 'GuideLineCtrl'
          }
        }
      })

      .state('app.lang', {
        url: '/lang',
        views: {
          'menuContent': {
            templateUrl: 'templates/langPopover.html',
            controller: 'LanguageCtrl'
          }
        }
      });


    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dashboard');

    //german translation
    $translateProvider.translations('de_DE', {
      CHANGELANG_TITLE: 'Sprache ändern',
      DASH_TITLE: 'Übersicht',
      GUIDE_TITLE: 'Verhaltensregeln',
      MAP_TITLE: 'Karte',
      PUB_TITLE: 'Behörden',
      ABOUT_TITLE: 'Über'
    });

    //english translation
    $translateProvider.translations('en_US', {
      CHANGELANG_TITLE: 'Change language',
      DASH_TITLE: 'Dashboard',
      GUIDE_TITLE: 'Guidelines',
      MAP_TITLE: 'Map',
      PUB_TITLE: 'Public authorities',
      ABOUT_TITLE: 'About'
    });

    //arabic translation
    /*$translateProvider.translations('en_US', {

    });

    //turkey translation
    $translateProvider.translations('en_US', {

    });*/

    $translateProvider.preferredLanguage('de_DE');
  });

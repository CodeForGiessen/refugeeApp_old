'use strict';
angular.module('refugeeApp', ['ionic', 'ionic-material'])
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

.config(function ($stateProvider, $urlRouterProvider) {
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

  .state('app.guideline', {
    url: 'guideline',
    views: {
      'menuContent': {
        templateUrl: 'templates/guideline.html',
        controller: 'GuideCtrl'
      }
    }
  });


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
});

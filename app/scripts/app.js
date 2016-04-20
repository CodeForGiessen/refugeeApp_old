'use strict';
angular.module('refugeeApp', ['ionic', 'ionic-material', 'ngCookies', 'pascalprecht.translate'])
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
      LANG_DE: 'Deutsch',
      LANG_EN: 'Englisch',
      LANG_TR: 'Türkisch',
      LANG_AR: 'Arabisch',
      CHANGELANG_TITLE: 'Sprache ändern',
      DASH_TITLE: 'Übersicht',
      GUIDE_TITLE: 'Verhaltensregeln',
      MAP_TITLE: 'Karte',
      PUB_TITLE: 'Behörden',
      ABOUT_TITLE: 'Über',
      WELCOME_TITLE: 'Herzlich willkommen in Gießen',
      DOWN_CONTENT_TITLE: 'Neue Inhalte herunterladen',
      DOWN_CONTENT_TEXT: 'Keine Verbindung zum WIFI-Netz. Wollen sie neue Inhalte trotzdem laden?',
      CANCEL_BUTTON: 'Abbrechen',
      OK_BUTTON: 'OK',
      FEEDBACK_CARD_TITLE: 'Feedback',
      FEEDBACK_CARD_BUTTON: 'Abschicken',
      FEEDBACK_CARD_NAME: 'Vorname',
      FEEDBACK_CARD_LASTNAME: 'Name',
      FEEDBACK_CARD_MESSAGE_PLACEHOLDER: 'Geben sie hier ihre Nachricht ein...',
      DEVELOPER_CARD_TITLE: 'Entwickler',
      LICENSE_CARD_TITLE: 'Lizenz'
    });

    //english translation
    $translateProvider.translations('en_US', {
      LANG_DE: 'German',
      LANG_EN: 'English',
      LANG_TR: 'Turkish',
      LANG_AR: 'Arabic',
      CHANGELANG_TITLE: 'Change language',
      DASH_TITLE: 'Dashboard',
      GUIDE_TITLE: 'Guidelines',
      MAP_TITLE: 'Map',
      PUB_TITLE: 'Public authorities',
      ABOUT_TITLE: 'About',
      WELCOME_TITLE: 'Welcome to Gießen',
      DOWN_CONTENT_TITLE: 'Download new Content',
      DOWN_CONTENT_TEXT: 'No WiFi-Signal! Are you sure to load new content?',
      CANCEL_BUTTON: 'Cancel',
      OK_BUTTON: 'OK',
      FEEDBACK_CARD_TITLE: 'Feedback',
      FEEDBACK_CARD_BUTTON: 'Submit',
      FEEDBACK_CARD_NAME: 'First Name',
      FEEDBACK_CARD_LASTNAME: 'Last Name',
      FEEDBACK_CARD_MESSAGE_PLACEHOLDER: 'Your message here...',
      DEVELOPER_CARD_TITLE: 'Developer',
      LICENSE_CARD_TITLE: 'License'
    });

    //turkish translation
    $translateProvider.translations('tr_TR', {
      LANG_DE: 'Alman',
      LANG_EN: 'İngilizce',
      LANG_TR: 'Türkçe',
      LANG_AR: 'Arapça',
      CHANGELANG_TITLE: 'dili değiştir',
      DASH_TITLE: 'Özet',
      GUIDE_TITLE: 'davranış kuralları',
      MAP_TITLE: 'harita',
      PUB_TITLE: 'resmi daire',
      ABOUT_TITLE: 'hakkında',
      WELCOME_TITLE: 'Gießen`e Hoş geldiniz!',
      DOWN_CONTENT_TITLE: 'yeni içindekileri indir',
      DOWN_CONTENT_TEXT: 'WIFI`ye bağlantı kurulamadı. Yinede yeni çindekileri indirmek isdiyormusunuz?',
      CANCEL_BUTTON: 'iplat',
      OK_BUTTON: 'OK',
      FEEDBACK_CARD_TITLE: 'geri bildirim',
      FEEDBACK_CARD_BUTTON: 'göndermek',
      FEEDBACK_CARD_NAME: 'adınız',
      FEEDBACK_CARD_LASTNAME: 'soyadınız ',
      FEEDBACK_CARD_MESSAGE_PLACEHOLDER: 'mesajınızı buraya yazın...',
      DEVELOPER_CARD_TITLE: 'geliştirici',
      LICENSE_CARD_TITLE: 'lisans'
    });

    //arabic translation
    $translateProvider.translations('ar_SY', {
      LANG_DE: 'ألماني',
      LANG_EN: 'إنجليزي',
      LANG_TR: 'تركي',
      LANG_AR: 'العربية'
    });

    //set preferred language for translation
    $translateProvider.preferredLanguage('en_US');
    //set fallback language for translation
    $translateProvider.fallbackLanguage('en_US');
    //use local storage to store the selected language
    $translateProvider.useLocalStorage();
  });

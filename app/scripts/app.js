'use strict';
angular.module('refugeeApp', ['ionic', 'ionic-material', 'config', 'ngCookies', 'pascalprecht.translate',  'leaflet-directive', 'ngCordova', 'ngAnimate', 'toastr'])
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

  .config(function ($stateProvider, $urlRouterProvider, $translateProvider, toastrConfig) {

    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html'
      })

      .state('app.dashboard', {
        cache: false,
        url: '/dashboard',
        views: {
          'menuContent': {
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardCtrl'
          }
        }
      })

      .state('app.guide', {
        cache: false,
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
            controller: 'AboutCtrl'
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
        },
        params: {
          idx: -1,
          title: 'noTitle'
        }
      })

      .state('app.lang', {
        url: '/lang',
        views: {
          'menuContent': {
            templateUrl: 'templates/languageModal.html',
            controller: 'LanguageCtrl'
          }
        }
      })

      .state('app.start', {
        url: '/start',
        views: {
          'menuContent': {
            templateUrl: 'templates/start.html',
            controller: 'LanguageCtrl'
          }
        }
      })

      .state('app.infoDetail', {
        url: '/infoDetail',
        views: {
          'menuContent': {
            templateUrl: 'templates/infoDetail.html',
            controller: 'InfoCtrl'
          }
        },
        params: {
          index: -1
        }
      });

      // if none of the above states are matched, use this as the fallback
      //$urlRouterProvider.otherwise('/app/dashboard');

      $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');

        var defaultState = window.localStorage.getItem('defaultState') || 'app.start';
        $state.go(defaultState);
      });

    //german translation
    $translateProvider.translations('de_DE', {
      LANG_DE: 'Deutsch',
      LANG_EN: 'English',
      LANG_TR: 'Türkçe',
      LANG_AR: 'العربية',
      LANG_FR: 'français',
      LANG_AF: 'فارسی',
      CHANGELANG_TITLE: 'Sprache ändern',
      DASH_TITLE: 'Übersicht',
      GUIDE_TITLE: 'Verhaltensregeln',
      MAP_TITLE: 'Karte',
      PUB_TITLE: 'Informationen',
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
      LICENSE_CARD_TITLE: 'Lizenz',
      CHANGE_LANG_INFO: 'Wenn sie die Sprache ändern wird der gesamte Inhalt neu heruntergeladen.'
    });

    //english translation
    $translateProvider.translations('en_US', {
      LANG_DE: 'Deutsch',
      LANG_EN: 'English',
      LANG_TR: 'Türkçe',
      LANG_AR: 'العربية',
      LANG_FR: 'français',
      LANG_AF: 'فارسی',
      CHANGELANG_TITLE: 'Change language',
      DASH_TITLE: 'Dashboard',
      GUIDE_TITLE: 'Guidelines',
      MAP_TITLE: 'Map',
      PUB_TITLE: 'Information',
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
      LICENSE_CARD_TITLE: 'License',
      CHANGE_LANG_INFO: 'Please notice! When you change the language then it will downloads new content.'
    });

    //turkish translation
    $translateProvider.translations('tr_TR', {
      LANG_DE: 'Deutsch',
      LANG_EN: 'English',
      LANG_TR: 'Türkçe',
      LANG_AR: 'العربية',
      LANG_FR: 'français',
      LANG_AF: 'فارسی',
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
      LANG_DE: 'Deutsch',
      LANG_EN: 'English',
      LANG_TR: 'Türkçe',
      LANG_AR: 'العربية',
      LANG_FR: 'français',
      LANG_AF: 'فارسی'
    });

    //french translation
    $translateProvider.translations('fr_FR', {
      LANG_DE: 'Deutsch',
      LANG_EN: 'English',
      LANG_TR: 'Türkçe',
      LANG_AR: 'العربية',
      LANG_FR: 'français',
      LANG_AF: 'فارسی'
    });

    //farsi translation
    $translateProvider.translations('fa_AF', {
      LANG_DE: 'Deutsch',
      LANG_EN: 'English',
      LANG_TR: 'Türkçe',
      LANG_AR: 'العربية',
      LANG_FR: 'français',
      LANG_AF: 'فارسی'
    });

    //set preferred language for translation
    $translateProvider.preferredLanguage('en_US');
    //set fallback language for translation
    $translateProvider.fallbackLanguage('en_US');
    //use local storage to store the selected language
    $translateProvider.useLocalStorage();

    angular.extend(toastrConfig, {
      autoDismiss: true,
      containerId: 'toast-container',
      newestOnTop: true,
      positionClass: 'toast-bottom-center',
      target: 'body'
    });
  });

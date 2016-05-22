'use strict';
angular.module('refugeeApp').controller('InfoCtrl',
  function ($scope, $state, ionicMaterialMotion, $timeout, $window) {

    $timeout(function () {
      // Activate ink for controller
      ionicMaterialMotion.fadeSlideInRight();
    },0);

    $scope.index = $state.params.index;

    $scope.infos = [
      {
        title: 'Gesundheit',
        subtitle: 'Gießen und Umgebung',
        imageUrl: '',
        category: [
          {
            group: 'Wichtige Nummern',
            items: [
              {
                spec: 'Nummer',
                title: 'Feuerwehr und Rettungsdienst',
                location: '',
                tel: '112',
                url: ''
              },
              {
                spec: 'Nummer',
                title: 'Polizei',
                location: '',
                tel: '110',
                url: ''
              },
              {
                spec: 'Nummer',
                title: 'Giftnotruf',
                location: '',
                tel: '06131/19240',
                url: ''
              },
              {
                spec: 'Nummer',
                title: 'Notruf für vergewaltigte und belästigte Mädchen und Frauen',
                location: '',
                tel: '0641/73343',
                url: ''
              },
              {
                spec: 'Nummer',
                title: 'Notruf für Schwangere und Mütter mit Neugeborenen in Not',
                location: '',
                tel: '0800/4560789',
                url: ''
              }
            ]
          },
          {
            group: 'Kliniken',
            items: [
              {
                spec: 'Klinik',
                title: 'Evangelisches Krankenhaus',
                location: 'Paul-Zipp-Straße 171, 35398 Giessen',
                tel: '0641/9606-0',
                url: 'http://ekm-gi.de'
              },
              {
                spec: 'Klinik',
                title: 'St. Josefs Krankenhaus / Balserische Stiftung',
                location: 'Wilhelmstraße 7, 35392 Giessen',
                tel: '0641/7002-0  (Standort St. Josefs Krankenhaus),  0641 7952-0 (Standort Balserische Stiftung)',
                url: 'http://jok-gi.de'
              },
              {
                spec: 'Klinik',
                title: 'Uniklinik Giessen und Marburg',
                location: 'Rudolf-Buchheim-Straße 8, 35394 Giessen',
                tel: '0641/985-0',
                url: 'http://ukgm.de'
              },
              {
                spec: 'Klinik',
                title: 'Vitos Klinik für Psychiatrie und Psychotherapie Gießen (KPP)',
                location: 'Licher Straße 106, 35394 Giessen',
                tel: '0641/403-0',
                url: 'http://vitos-giessen-marburg.de'
              }
            ]
          },
          {
            group: 'Hausärzte',
            items: [
              {
                spec: 'Hausarzt',
                title: 'Dr. med. Mustermann',
                location: 'Musterstraße 4, 35390 Gießen',
                tel: '0641/12345',
                url: ''
              },
              {
                spec: 'Hausarzt',
                title: 'Dr. med. Mustermann',
                location: 'Musterstraße 4, 35390 Gießen',
                tel: '',
                url: 'www.musterarzt.de'
              }
            ]
          },
          {
            group: 'Frauenärzte',
            items: [{
              spec: 'Frauenarzt',
              title: 'Dr. med. Musterfrau',
              location: 'Musterstraße 5, 35390 Gießen',
              tel: '',
              url: ''
            }
            ]
          }
        ],

        links: [
          {
            title: 'Ärztliche Versorgung',
            url: 'http://lkgi.de/images/formulare_downloads/Gesundheit_Soziales_Integration/Fluechtlinge_Asylbewerber/Flyer_medzinische_Versorgung_deutsch.pdf'
          },
          {
            title: 'Ärztliche Versorgung (Brochure)',
            url: 'http://lkgi.de/images/formulare_downloads/Gesundheit_Soziales_Integration/Fluechtlinge_Asylbewerber/Broschuere_aerztliche_Versorgung.pdf'
          }
        ],
        show: false
      },
      {
        title: 'Behörden',
        subtitle: 'Gießen',
        imageUrl: '',
        category: [
          {
            group: 'Rathäuser',
            items: [
              {
                spec: '',
                title: 'Rathaus Gießen',
                location: 'Berliner Platz 1, 35390 Gießen',
                tel: '',
                url: ''
              },
              {
                spec: '',
                title: 'Rathaus Wetzlar',
                location: 'Musterstraße 4, 35390 Wetzlar',
                tel: '',
                url: ''
              }
            ]
          },
          {
            group: 'Kreisausschüsse',
            items: [{
              spec: '',
              title: 'Landkreis Gießen',
              location: 'Riversplatz 1-9, 35394 Gießen',
              tel: '',
              url: 'https://lkgi.de'
            }
            ]
          }
        ],

        links: [
          {
            title: '',
            url: ''
          },
          {
            title: '',
            url: ''
          }
        ],
        show: false
      }
    ];

    /**
     *
     * @param link
     */
    $scope.openLink = function (link) {
      if (link) {
        $window.open(link, '_system');
      }
    };

    $scope.goToInfo = function (index) {
      //localStorage.setItem('index', index);
      $state.go('app.infoDetail', {index: index});
    };

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
      group.show = !group.show;
    };
    $scope.isGroupShown = function (group) {
      return group.show;
    };

  });

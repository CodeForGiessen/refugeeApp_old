'use strict';
angular.module('refugeeApp').controller('InfoCtrl',
  function ($scope, $state) {

    $scope.idx = localStorage.getItem('index');

    $scope.infos = [
      {
        title: 'Ärzte',
        subtitle: 'Gießen und Umgebung',
        category: [
          {
            group: 'Hausärzte',
            items: [
              {
                spec: 'Hausarzt',
                title: 'Dr. med. Mustermann',
                location: 'Musterstraße 4, 35390 Gießen',
                url: ''
              },
              {
                spec: 'Hausarzt',
                title: 'Dr. med. Mustermann',
                location: 'Musterstraße 4, 35390 Gießen',
                url: ''
              }
            ]
          },
          {
            group: 'Frauenärzte',
            items: [{
              spec: 'Frauenarzt',
              title: 'Dr. med. Musterfrau',
              location: 'Musterstraße 5, 35390 Gießen',
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
        category: [
          {
            group: 'Rathäuser',
            items: [
              {
                spec: '',
                title: 'Rathaus Gießen',
                location: 'Berliner Platz 1, 35390 Gießen',
                url: ''
              },
              {
                spec: '',
                title: 'Rathaus Wetzlar',
                location: 'Musterstraße 4, 35390 Wetzlar',
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
    ]
    ;

    $scope.goToInfo = function (index) {
      //todo category rausfiltern und diesen content nur anzeigen
      localStorage.setItem('index', index);
      $state.go('app.infoDetail');
    };

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
      //todo collapseview nur für ärzte/behörden...herunterklappen zeigt Details
      group.show = !group.show;
    };
    $scope.isGroupShown = function (group) {
      return group.show;
    };

  })
;

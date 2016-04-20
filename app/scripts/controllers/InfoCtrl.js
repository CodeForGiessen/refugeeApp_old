'use strict';
angular.module('refugeeApp').controller('InfoCtrl',
function ($scope, $state){

  $scope.infos = [
    {
      title: 'Ärzte',
      subtitle: 'Gießen und Umgebung',
      names: [
        {
          title: 'Dr. med. Mustermann',
          location: 'Musterstraße 4, 35390 Gießen',
          spec: 'Hausarzt',
          url: ''
        },
        {
          title: 'Dr. med. Musterfrau',
          location: 'Musterstraße 5, 35390 Gießen',
          spec: 'Frauenarzt',
          url: ''
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
      names : [
        {
          title: 'Rathaus Gießen',
          location: 'Berliner Platz 1, 35390 Gießen',
          spec: '',
          url: ''
        },
        {
          title: 'Landkreis Gießen',
          location: 'Riversplatz 1-9, 35394 Gießen',
          spec: '',
          url: 'https://lkgi.de'
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

  $scope.goToInfo = function (index) {
    //todo category rausfiltern und diesen content nur anzeigen
    $state.go('app.infoDetail');
  };

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(group) {
    //todo collapseview nur für ärzte/behörden...herunterklappen zeigt Details
    group.show = !group.show;
  };
  $scope.isGroupShown = function(group) {
    return group.show;
  };

});

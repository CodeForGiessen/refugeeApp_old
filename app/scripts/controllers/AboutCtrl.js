'use strict';
angular.module('refugeeApp').controller('AboutCtrl', function ($scope, $window, $ionicPopup){

  /**
   *
   * @param link
   */
  $scope.openLink = function (link) {
    if (link) {
      $window.open(link, '_system');
    }
  };

  /**
   *
   * @type {Array}
   */
  $scope.contributors = [
    {name: 'Julian Schmitt', task: 'Service'},
    {name: 'Florian Kolb', task: 'App und Organisation'},
    {name: 'Katharina Dort', task: 'Design und Icons'},
    {name: 'Lukas Leander Rosenstock', task: 'Helpdesk und App'},
    {name: 'Prof. Dr. Martin Przewloka', task: 'Organisation'},
    {name: 'Wilfried Jost', task: 'Kommunikation mit Behörden und Flüchtlingslagern'}
  ];

  /**
   *
   */
  $scope.sendMail = function () {
    if ($window.cordova && cordova.plugins.email) {
      cordova.plugins.email.open({
        to: 'flo@floriankolb.de',
        subject: 'RefugeeApp',
        body: ''
      });
    } else {
      $ionicPopup.alert({
        title: 'Info',
        template: 'Keine Email-Unterstützung!',
        buttons: [{
          text: 'Schließen',
          type: 'button-positive'
        }]
      });
    }
  };
});

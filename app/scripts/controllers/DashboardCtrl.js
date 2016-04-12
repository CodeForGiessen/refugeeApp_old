'use strict';
angular.module('refugeeApp').controller('DashboardCtrl', function ($scope, $stateParams, ionicMaterialMotion, ionicMaterialInk, $ionicPopup) {

  $scope.tooltips = [
    { title: 'Öffentliches Leben', text: 'Trifft man sich mit Freunden, begrüßt man sich häufig mit einer Umarmung, in manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Geste der Freundschaft.', id: 1 },
  ];

  $scope.loadContent = function () {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Load content',
      template: 'Are you sure you want to load new content from the server?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('TODO: get data from server');
      } else {
        console.log('TODO: do nothing');
      }
    });
  };

  // Activate ink for controller
  ionicMaterialInk.displayEffect();
});

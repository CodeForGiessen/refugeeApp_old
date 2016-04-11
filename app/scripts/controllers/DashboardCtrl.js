'use strict';
angular.module('refugeeApp').controller('DashboardCtrl', function ($scope, $stateParams, ionicMaterialMotion, ionicMaterialInk) {

  $scope.tooltips = [
    { title: 'Öffentliches Leben', text: 'Trifft man sich mit Freunden, begrüßt man sich häufig mit einer Umarmung, in manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Geste der Freundschaft.', id: 1 },
  ];
  // Activate ink for controller
  ionicMaterialInk.displayEffect();
});

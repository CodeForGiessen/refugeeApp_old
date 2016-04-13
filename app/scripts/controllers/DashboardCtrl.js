'use strict';
angular.module('refugeeApp').controller('DashboardCtrl', function ($scope, $stateParams, ionicMaterialMotion, ionicMaterialInk, $ionicPopup, $ionicLoading, $timeout) {

  $scope.tooltips = [
    { title: 'Öffentliches Leben', text: 'Trifft man sich mit Freunden, begrüßt man sich häufig mit einer Umarmung, in manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Geste der Freundschaft.', id: 1 },
  ];

  $scope.loadContent = function () {
    var confirmPopup = $ionicPopup.confirm({
      title: 'Load content',
      template: 'Are you sure you want to load new content from the server?',
      cancelText: 'Cancel'
    });

    confirmPopup.then(function(res) {
      if(res) {
        $ionicLoading.show({
          template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
        });

        $timeout(function () {
          $ionicLoading.hide();
        }, 2000);

      } else {
      }
    });
  };

  // Activate ink for controller
  ionicMaterialInk.displayEffect();
});

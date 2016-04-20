'use strict';
angular.module('refugeeApp').controller('DashboardCtrl', function ($scope, $stateParams, ionicMaterialMotion, ionicMaterialInk, $ionicPopup, $ionicLoading, $timeout, $ionicModal) {

  $scope.tooltips = [
    {
      title: 'Öffentliches Leben',
      text: 'Trifft man sich mit Freunden, begrüßt man sich häufig mit einer Umarmung, in manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Geste der Freundschaft.',
      id: 1
    }
  ];

  $scope.loadContent = function () {
    //todo check network connection
    if(checkConnection() == Connection.WIFI){
      console.log("Download content");
    } else {
      var confirmPopup = $ionicPopup.confirm({
        title: "{{'DOWN_CONTENT_TITLE'|translate}}",
        template: "{{'DOWN_CONTENT_TEXT'|translate}}",
        cancelText: "{{'CANCEL_BUTTON'|translate}}"
      });

      confirmPopup.then(function (res) {
        if (res) {
          $ionicLoading.show({
            template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
          });

          $timeout(function () {
            $ionicLoading.hide();
          }, 2000);

        } else {
        }
      });
    }

  };

  var checkConnection = function(){
    var networkState = navigator.connection.type;

    var states =  {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.NONE] = 'No network connection';


    return networkState;

  };

  // Activate ink for controller
  ionicMaterialInk.displayEffect();
});

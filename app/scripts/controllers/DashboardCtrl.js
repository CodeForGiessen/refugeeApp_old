'use strict';
angular.module('refugeeApp').controller('DashboardCtrl', function (GuideLineData, $scope, $stateParams, ionicMaterialMotion, ionicMaterialInk, $ionicPopup, $ionicLoading, $timeout, $state, $translate, $ionicHistory, $window, $ionicPopover, $ionicModal, toastr) {

  /**
   *
   * @type {*[]}
   */
  $scope.tooltips = [
    {
      title: 'Öffentliches Leben',
      text: 'Trifft man sich mit Freunden, begrüßt man sich häufig mit einer Umarmung, in manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Geste der Freundschaft.',
      id: 1
    }
  ];

  /**
   *
   */
  $scope.loadContent = function () {
      if(checkConnection() === Connection.WIFI){
        //todo get all necessary data
        //GuideLineData.getAllGuidesToLang();
        toastr.success('Update complete', 'Finished');
      } else {
        var confirmPopup = $ionicPopup.confirm({
          title: '{{"DOWN_CONTENT_TITLE"|translate}}',
          template: '{{"DOWN_CONTENT_TEXT"|translate}}',
          cancelText: '{{"CANCEL_BUTTON"|translate}}'
        });

        confirmPopup.then(function (res) {
          if (res) {
            $ionicLoading.show({
              template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
            });

            $timeout(function () {
              $ionicLoading.hide();
              toastr.success('Update complete', 'Finished');
            }, 2000);

          } else {
          }
        });
      }
  };

  /**
   *
   */
  var checkConnection = function(){
    return navigator.connection.type;
  };

  /**
   *
   * @param key which is used for the translate module
   */
  $scope.setLang = function (key) {
    var targetState = 'app.dashboard';
    window.localStorage.setItem('defaultState', targetState);

    $translate.use(key).then(function (key) {
      toastr.info('Language set to ' + key);

      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        historyRoot: true
      });
      $state.go(targetState);
    }, function (key) {
      toastr.error('Ups...can not set your Language to ' + key + '!', 'Error');
    });
  };


  // .fromTemplateUrl() method
  $ionicPopover.fromTemplateUrl('popover.html', {
    scope: $scope
  }).then(function (popover) {
    $scope.popover = popover;
  });

  $scope.openPopover = function ($event) {
    $scope.popover.show($event);
  };
  $scope.closePopover = function () {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function () {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function () {
    // Execute action
  });

  $ionicModal.fromTemplateUrl('templates/languageModal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function (modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function () {
    $scope.modal.show();
  };
  $scope.closeModal = function () {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function () {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function () {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function () {
    // Execute action
  });


  // Activate ink for controller
  ionicMaterialInk.displayEffect();
});

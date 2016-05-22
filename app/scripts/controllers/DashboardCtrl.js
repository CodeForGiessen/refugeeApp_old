'use strict';
angular.module('refugeeApp').controller('DashboardCtrl', function (GuideLineData, GuideLineService, $q, $scope, $stateParams, ionicMaterialMotion, ionicMaterialInk, $ionicPopup, $ionicLoading, $timeout, $state, $translate, $ionicHistory, $window, $ionicPopover, $ionicModal, toastr) {

  $scope.langKey = '';
  $scope.categories = {};
  $scope.guides = {};

  /**
   *
   * @returns {{}}
   */
  var getMotd = function () {
    var result = {title: '', text: ''};
    var catID = '';
    var date = new Date();
    var currentDate = localStorage.getItem('currentDate');
    var newDate = date.getDay();


    if (currentDate != newDate && localStorage.getItem('defaultState') === 'app.dashboard') {
      $scope.langKey = GuideLineService.getLangKey();
      $scope.guides = GuideLineService.findAllGuidelines();
      $scope.categories = GuideLineService.findAllCategories();
      var rand = Math.floor((Math.random() * $scope.guides.length));
      result.text = $scope.guides[rand].guidelines[0].text;
      catID = $scope.guides[rand].category;
      /*for (var i = 0; i < $scope.guidelines.length; i++) {
       if ($scope.guidelines[i].guidelines[0].motd_flag === true) {
       result.text = $scope.guidelines[i].guidelines[0].text;
       catID = $scope.guidelines[i].category;
       console.log('if');
       }
       }*/

      for (var j = 0; j < $scope.categories.length; j++) {
        if ($scope.categories[j]._id === catID) {
          result.title = $scope.categories[j].text[$scope.langKey];
        }
      }
      var dateNow = new Date();
      var curDate = dateNow.getDay();
      localStorage.setItem('currentDate', curDate);
      localStorage.setItem('motd', JSON.stringify(result));
    } else {
      return GuideLineService.findMotd();
    }
    return result;
  };

  $scope.getMotd = getMotd();

  $scope.$on('$ionicView.enter', getMotd);

  /*$scope.$on('$ionicView.enter', function(){
   var result = {title: '', text: ''};
   var catID = '';

   if(localStorage.getItem('defaultState') === 'app.dashboard') {
   for (var i = 0; i < guides.length; i++) {
   if (guides[i].guidelines[0].motd_flag === true) {
   result.text = guides[i].guidelines[0].text;
   catID = guides[i].category;
   }
   }

   for (var j = 0; j < categories.length; j++) {
   if (categories[j]._id === catID) {
   result.title = categories[j].text[langKey];
   }
   }
   }
   $scope.getMotd = result;
   });*/

  /**
   *
   */
  $scope.loadContent = function () {
    //if(checkConnection() === Connection.WIFI){
    GuideLineData.getAllGuidesToLang('de_DE');
    GuideLineData.getAllCategories();
    //} else {
    /*var confirmPopup = $ionicPopup.confirm({
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
     });*/
  };
  //};

  /**
   *
   */
  var checkConnection = function () {
    return navigator.connection.type;
  };

  /**
   *
   * @param key which is used for the translate module
   */
  $scope.setLang = function (key) {
    var targetState = 'app.dashboard';
    window.localStorage.setItem('defaultState', targetState);

    $translate.use(key)
      .then(function (key) {
        $ionicLoading.show();

        $q.all([
          GuideLineData.getAllCategories(),
          GuideLineData.getAllGuidesToLang(key)
        ])
          .then(function (res) {
            var cat = res[0];
            var guides = res[1];
            $scope.categories = cat;
            $scope.guides = guides;
          })
          .finally(function () {
            $ionicLoading.hide();
            $state.go(targetState);
          });

        $ionicHistory.nextViewOptions({
          disableAnimate: true,
          historyRoot: true
        });
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

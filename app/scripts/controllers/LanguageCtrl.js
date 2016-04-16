/**
 * Controller that helps to translate the user interface text.
 */
'use strict';
angular.module('refugeeApp').controller('LanguageCtrl', function($scope, $translate, $ionicPopover, $ionicPopup, $ionicLoading) {

  /*$scope.showLangPopOver = function () {

    $ionicPopover.fromTemplateUrl('langPopover.html', {
      scope: $scope
    }).then(function (popover) {
      $scope.popover = popover;
    });

    $scope.openPopover = function () {
      $scope.$parent.popover.show();
    };
    $scope.closePopover = function () {
      $scope.popover.hide();
    };
  };*/


  $scope.changeLang = function (key) {
    $translate.use(key).then(function(key){
      console.log("Sprache zu " + key + " gewechselt.");
    }, function (key) {
      console.log("Irgendwas lief schief.");
    });
  };
});

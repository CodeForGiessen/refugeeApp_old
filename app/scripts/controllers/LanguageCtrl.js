/**
 * Controller that helps to translate the user interface text.
 */
'use strict';
angular.module('refugeeApp').controller('LanguageCtrl', function($scope, $translate, $ionicPopover) {

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

  // .fromTemplate() method
  var template =  '<ion-popover-view>' +
    '<ion-header-bar>' +
    '<h1 class="title">My Popover Title</h1>' +
    '</ion-header-bar>' +
    '<ion-content class="padding">' +
    'My Popover Contents' +
    '</ion-content>' +
    '</ion-popover-view>';

  $scope.popover = $ionicPopover.fromTemplate(template, {
    scope: $scope
  });
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });


  $scope.changeLang = function (key) {
    $translate.use(key).then(function(key){
      console.log('Sprache zu ' + key + ' gewechselt.');
    }, function (key) {
      console.log('Irgendwas lief schief.' + key);
    });
  };
});

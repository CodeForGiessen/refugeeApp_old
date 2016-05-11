/**
 * Controller that helps to translate the user interface text.
 */
'use strict';
angular.module('refugeeApp').controller('LanguageCtrl', function($scope, $translate, $ionicPopover, toastr) {

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

  /**
   *
   * @param key
     */
  $scope.changeLang = function (key) {
    $translate.use(key).then(function(key){
      toastr.info('You have changed the language to ' + key ,'Success');
    }, function (key) {
      toastr.error('Tried to set the language ' + key,'Error');
    });
  };
});

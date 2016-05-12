'use strict';
angular.module('refugeeApp').controller('GuideCtrl', function ($scope, ionicMaterialInk, ionicMaterialMotion, $state, $timeout) {

  $scope.lang = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
  var storedCategories = localStorage.getItem('categories');
  $scope.categories = JSON.parse(storedCategories);
  /**
   *
   * @param id
     */
  $scope.getCategorys = function (title) {
    //var title = $scope.guides[index].title;
    console.log(title);
    $state.go('app.guideline', {idx: id, title: title});
  };

  /**
   *
   */
  $timeout(function () {
    // Activate ink for controller
    ionicMaterialInk.displayEffect();
    ionicMaterialMotion.blinds();
  },0);
});

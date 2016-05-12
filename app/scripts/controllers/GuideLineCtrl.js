'use strict';
angular.module('refugeeApp').controller('GuideLineCtrl', function ($scope, $state) {

  var langKey = localStorage.getItem('NG_TRANSLATE_LANG_KEY');
  var storeGuides = localStorage.getItem('guidelines_'+langKey);
  $scope.guides = JSON.parse(storeGuides);

  $scope.guideTitle = $state.params.title;
  $scope.index = $state.params.idx;
});

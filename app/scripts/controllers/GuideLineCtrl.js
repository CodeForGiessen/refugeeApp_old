'use strict';
angular.module('refugeeApp').controller('GuideLineCtrl', function ($scope, $state) {

  //$scope.guideTitle = localStorage.getItem('guideTitle');
  //$scope.index = localStorage.getItem('index');
  var storeGuides = localStorage.getItem('guides');
  $scope.guides = JSON.parse(storeGuides);

  $scope.guideTitle = $state.params.title;
  $scope.index = $state.params.idx;

});

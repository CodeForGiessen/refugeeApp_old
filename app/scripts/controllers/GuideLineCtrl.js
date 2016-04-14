'use strict';
angular.module('refugeeApp').controller('GuideLineCtrl', function ($scope) {

  $scope.guideTitle = localStorage.getItem('guideTitle');
  //$scope.selectedGuides = localStorage.getItem(JSON.parse("selectedGuides"));
  $scope.index = localStorage.getItem('index');
  var storeGuides = localStorage.getItem('guides');
  $scope.guides = JSON.parse(storeGuides);

});

'use strict';
angular.module('refugeeApp').controller('GuideLineCtrl', function ($scope) {

  $scope.guideTitle = localStorage.getItem('guideTitle');
  $scope.index = localStorage.getItem('index');
  var storeGuides = localStorage.getItem('guides');
  $scope.guides = JSON.parse(storeGuides);

});

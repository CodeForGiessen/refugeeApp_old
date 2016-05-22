'use strict';
angular.module('refugeeApp').controller('GuideLineCtrl', function (GuideLineService, $scope, $state) {

  $scope.guides = GuideLineService.findAllGuidelines();

  $scope.guideTitle = $state.params.title;
  $scope.index = $state.params.idx;
});

'use strict';
angular.module('refugeeApp').controller('GuideCtrl', function ($scope, ionicMaterialInk, $state, $rootScope) {
  /*var request =  new XMLHttpRequest();
  request.open("GET", "../templates/guides.json", false);
  request.send(null);
  $scope.guides = JSON.parse(request.responseText);*/

  //$rootScope.title = 'title';

  $scope.guides = [
    {
      id: 0,
      title: 'Öffentliches Leben',
      cards: 'Trifft man sich mit Freunden, begrüßt man sich häufig mit einer Umarmung, in manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Geste der Freundschaft.',
    },
    {
      id: 1,
      title: 'Persönliche Freiheiten',
      cards: 'Lächeln wird üblicherweise nicht direkt als Flirten interpretiert, auch dann nicht, wenn man mit Fremden spricht. Die Menschen versuchen normalerweise einfach nur, freundlich zu sein.',
    },
    {
      id: 2,
      title: 'Gesellschaftliches Zusammenleben'
    },
    {
      id: 3,
      title: 'Gleichberechtigung'
    },
    {
      id: 4,
      title: 'Umweltfreundlichkeit'
    },
    {
      id: 5,
      title: 'Essen, Trinken & Rauchen'
    },
    {
      id: 6,
      title: 'Formalitäten'
    },
    {
      id: 7,
      title: 'Notfälle'
    }
  ];

  $scope.title = $scope.guides[0].title;

  this.getCategory = function (pos) {
    //$scope.id = pos;
    //$rootScope.title = $scope.guides[pos].title;
    //$scope.filteredGuides = {};
    $state.go('app.guideline');
  };


  // Activate ink for controller
  ionicMaterialInk.displayEffect();
});

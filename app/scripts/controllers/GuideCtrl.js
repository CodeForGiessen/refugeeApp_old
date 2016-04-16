'use strict';
angular.module('refugeeApp').controller('GuideCtrl', function ($scope, ionicMaterialInk, $state) {
  /*var request =  new XMLHttpRequest();
   request.open("GET", "../templates/guides.json", false);
   request.send(null);
   $scope.guides = JSON.parse(request.responseText);*/

  $scope.guides = [{
    'id': 0,
    'title': 'Öffentliches Leben',
    'cards': [
      'Trifft man sich mit Freunden, begrüßt man sich häufig mit einer Umarmung, in manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Geste der Freundschaft.',

      'In Deutschland wird lächeln nicht gleich direkt als Flirten angesehen. Manche Leute lächeln einfach nur, weil sie freundlich sind.'
    ],
    'img': 'images/toronto.jpg',
    'likes': 0
  }, {
    'id': 1,
    'title': 'Persönliche Freiheiten',
    'cards': [
      'Lächeln wird üblicherweise nicht direkt als Flirten interpretiert, auch dann nicht, wenn man mit Fremden spricht. Die Menschen versuchen normalerweise einfach nur, freundlich zu sein.',
      'Minderheiten, egal ob ethnisch oder aufgrund der sexuellen Orientierung, dürfen sich frei ausleben, solange sie damit nicht andere Leute in ihrer Freiheit begrenzen.'
    ],
    'img': 'images/new-zealand.jpg',
    'likes': 0
  }, {
    'id': 2,
    'title': 'Gesellschaftliches Zusammenleben',
    'cards': [
      'Deutsche schütteln sich oft die hände, zur Begrüßung bzw. verabschiedung oder wenn man neue Leute kennen lernt. Wenn man neu zu einer Gruppe von Menschen kommt, ist es üblich jeden durch ein kurzes Händeschütteln und gegenseitigen Augenkontakt zu begrüßen. Dabei machen wir keinen Unterschied zwischen Frau und Mann. Alle sind gleichberchtigt.',

       'Manchmal begrüßt man sich bei engeren Freunden mit einer kurzen Umarmung, bei manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Handlung.'
    ],
    'img': 'images/scotland.jpg',
    'likes': 0
  }, {
    'id': 3,
    'title': 'Gleichberechtigung',
    'cards': [
      'Jeder Mensch hat in Deutschland die gleichen Rechte und Pflichten. ',

      'Insbesondere sind Mann und Frau gleichgestellt. '
    ],
    'img': 'images/kyoto.jpg',
    'likes': 0
  }, {
    'id': 4,
    'title': 'Umweltfreundlichkeit',
    'cards': [
      'Lächeln wird üblicherweise nicht direkt als Flirten interpretiert, auch dann nicht, wenn man mit Fremden spricht. Die Menschen versuchen normalerweise einfach nur, freundlich zu sein.',

      'Minderheiten, egal ob ethnisch oder aufgrund der sexuellen Orientierung, dürfen sich frei ausleben, solange sie damit nicht andere Leute in ihrer Freiheit begrenzen.'
    ],
    'img': 'images/hawaii.jpg',
    'likes': 0
  }, {
    'id': 5,
    'title': 'Essen, Trinken & Rauchen',
    'cards': [
      'Lächeln wird üblicherweise nicht direkt als Flirten interpretiert, auch dann nicht, wenn man mit Fremden spricht. Die Menschen versuchen normalerweise einfach nur, freundlich zu sein.',

      'Minderheiten, egal ob ethnisch oder aufgrund der sexuellen Orientierung, dürfen sich frei ausleben, solange sie damit nicht andere Leute in ihrer Freiheit begrenzen.'
    ],
    'img': 'images/new-zealand.jpg',
    'likes': 0
  }, {
    'id': 6,
    'title': 'Formalitäten',
    'cards': [
      'Lächeln wird üblicherweise nicht direkt als Flirten interpretiert, auch dann nicht, wenn man mit Fremden spricht. Die Menschen versuchen normalerweise einfach nur, freundlich zu sein.',

      'Minderheiten, egal ob ethnisch oder aufgrund der sexuellen Orientierung, dürfen sich frei ausleben, solange sie damit nicht andere Leute in ihrer Freiheit begrenzen.'
    ],
    'img': 'images/hawaii.jpg',
    'likes': 0
  }, {
    'id': 7,
    'title': 'Notfälle',
    'cards': [
      'Lächeln wird üblicherweise nicht direkt als Flirten interpretiert, auch dann nicht, wenn man mit Fremden spricht. Die Menschen versuchen normalerweise einfach nur, freundlich zu sein.',

      'Minderheiten, egal ob ethnisch oder aufgrund der sexuellen Orientierung, dürfen sich frei ausleben, solange sie damit nicht andere Leute in ihrer Freiheit begrenzen.'
    ],
    'img': 'images/scotland.jpg',
    'likes': 0
  }];

  $scope.getCategorys = function (index) {
    var title = $scope.guides[index].title;
    localStorage.setItem('guideTitle', title);
    localStorage.setItem('index', index);
    localStorage.setItem('guides', JSON.stringify($scope.guides));
    $state.go('app.guideline');
  };

  $scope.plusOne = function (index) {
    $scope.guides[index].likes += 1;
  };

  // Activate ink for controller
  ionicMaterialInk.displayEffect();
});

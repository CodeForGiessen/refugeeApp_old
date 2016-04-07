'use strict';
angular.module('refugeeApp').controller('DashboardCtrl', function ($scope, $stateParams, ionicMaterialMotion, ionicMaterialInk) {

  $scope.tooltips = [
    { title: 'Öffentliches Leben', text: 'Trifft man sich mit Freunden, begrüßt man sich häufig mit einer Umarmung, in manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Geste der Freundschaft.', id: 1 },
    { title: 'Persönliche Freiheiten', text: 'Um Ruhe und Privatsphäre zu haben, halten Leute ihre Türen häufig geschlossen, zum Beispiel im Büro oder zu Hause. Es ist höflich zu klopfen, wenn man eintreten möchte. Meistens wird man nach dem Klopfen höflich hereingebeten.',  id: 2 },
    { title: 'Öffentliches Leben', text: 'Wenn man etwas angeboten bekommt, ist „Nein, danke“ eine höfliche Ablehnung. „Ja, bitte“ oder „Gerne“ bedeuten, dass man das Angebot annehmen möchte.', id: 3 },
  ];
  // Activate ink for controller
  ionicMaterialInk.displayEffect();
});

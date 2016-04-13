'use strict';
angular.module('refugeeApp').controller('GuideCtrl', function ($scope, ionicMaterialInk, $state) {
  /*var request =  new XMLHttpRequest();
   request.open("GET", "../templates/guides.json", false);
   request.send(null);
   $scope.guides = JSON.parse(request.responseText);*/

  $scope.guides = [
    {
      id: 0,
      title: 'Öffentliches Leben',
      cards:
        [{
          card: 'Trifft man sich mit Freunden, begrüßt man sich häufig mit einer Umarmung, in manchen Regionen auch mit einem Kuss auf die Wange. Dies ist eine nicht-sexuelle Geste der Freundschaft.'
        },
        {
          card: 'In Deutschland wird lächeln nicht gleich direkt als Flirten angesehen. Manche Leute lächeln einfach nur, weil sie freundlich sind.'
        }],
      img: '../images/toronto.jpg',
      likes: 0
    },
    {
      id: 1,
      title: 'Persönliche Freiheiten',
      cards: 'Lächeln wird üblicherweise nicht direkt als Flirten interpretiert, auch dann nicht, wenn man mit Fremden spricht. Die Menschen versuchen normalerweise einfach nur, freundlich zu sein.',
      img: '../images/new-zealand.jpg',
      likes: 0
    },
    {
      id: 2,
      title: 'Gesellschaftliches Zusammenleben',
      cards: '',
      img: '../images/scotland.jpg',
      likes: 0
    },
    {
      id: 3,
      title: 'Gleichberechtigung',
      cards: '',
      img: '../images/kyoto.jpg',
      likes: 0
    },
    {
      id: 4,
      title: 'Umweltfreundlichkeit',
      cards: '',
      img: '../images/hawaii.jpg',
      likes: 0
    },
    {
      id: 5,
      title: 'Essen, Trinken & Rauchen',
      cards: '',
      img: '../images/new-zealand.jpg',
      likes: 0
    },
    {
      id: 6,
      title: 'Formalitäten',
      cards: '',
      img: '../images/hawaii.jpg',
      likes: 0
    },
    {
      id: 7,
      title: 'Notfälle',
      cards: '',
      img: '../images/scotland.jpg',
      likes: 0
    }
  ];

  $scope.getCategorys = function (index) {
    var title = $scope.guides[index].title;
    localStorage.setItem("guideTitle", title);

    var filteredGuides = [];

    //filteredGuides.push({cards: $scope.guides[index].cards });

    for (var i=0; i< $scope.guides[index].cards.length; i++){
      filteredGuides.push({
        card: $scope.guides[index].cards[i].card
      });
    }

    localStorage.setItem("index", index);
    localStorage.setItem("filteredGuides", filteredGuides);
    $state.go('app.guideline');
  };

  $scope.plusOne = function (index) {
    $scope.guides[index].likes += 1;
  };

  // Activate ink for controller
  ionicMaterialInk.displayEffect();
});

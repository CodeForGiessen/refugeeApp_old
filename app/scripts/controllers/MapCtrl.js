'use strict';
angular.module('refugeeApp').controller('MapCtrl', function ($scope, leafletData, $http) {

  /*angular.extend($scope, {
   tiles: {},
   center: {
   lat: 50.583732,
   lng: 8.678344,
   zoom: 15
   },
   marker: {
   rathausGi: {
   lat: 50.5837248,
   lng: 8.6774933,
   message: 'Rathaus Gießen',
   focus: true,
   draggable: false
   },
   landKreisGi: {
   lat: 50.5749114,
   lng: 8.7074593,
   message: 'Landkreis Gießen',
   focus: true,
   draggable: false
   },
   bieberSchaper: {
   lat: 50.5815077,
   lng: 8.6709409,
   message: 'Hausärzte Frau L. Bieber & Dr. M. Schaper',
   focus: true,
   draggable: false
   }
   },
   defaults: {
   scrollWheelZoom: false,
   tileLayer: 'https://api.mapbox.com/styles/v1/toxic2302/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
   tileLayerOptions: {
   attribution: '© Mapbox © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
   detectRetina: true,
   reuseTiles: true,
   id: 'cinu6ci6p00jmcam0uyhk08y6',
   accessToken: 'pk.eyJ1IjoidG94aWMyMzAyIiwiYSI6ImNpbmcweTlhZzAwOTl2aGx4aHpjYzRydmgifQ.wvgrxPQEtbPxJs2HK0tBTg'
   }
   }
   });*/

  var localIcons = {
    defaultIcon: {
      iconUrl: 'images/svgs/marker-15.svg',
      iconSize: [38, 95]
    },
    authIcon: {
      iconUrl: 'images/svgs/town-hall-15.svg',
      iconSize: [38, 95]
    },
    policeIcon: {
      iconUrl: 'images/svgs/police-15.svg',
      iconSize: [38, 95]
    },
    hospitalIcon: {
      iconUrl: 'images/svgs/hospital-15.svg',
      iconSize: [38, 95]
    }
  };

  angular.extend($scope, {
    centerGiessen: {
      lat: 50.583732,
      lng: 8.678344,
      zoom: 12
    },

    defaults: {
      tileLayer: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
      tileLayerOptions: {
        attribution: '© Mapbox © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        detectRetina: true,
        reuseTiles: true,
        id: 'toxic2302.63a131f3',
        accessToken: 'pk.eyJ1IjoidG94aWMyMzAyIiwiYSI6ImNpbmcweTlhZzAwOTl2aGx4aHpjYzRydmgifQ.wvgrxPQEtbPxJs2HK0tBTg'
      }
    },

    markers: {
      rathaus: {
        lat: 50.58395531171265,
        lng: 8.679912686347961,
        focus: true,
        draggable: false,
        icon: localIcons.authIcon
      },
      polizeiGi: {
        lat: 50.58432998347547,
        lng: 8.680889010429382,
        focus: true,
        draggable: false,
        icon: localIcons.policeIcon
      },
      uniKlinik: {
        lat: 50.57527571694196,
        lng: 8.666152954101562,
        focus: true,
        draggable: false,
        icon: localIcons.hospitalIcon
      },
      stJosefKlinik: {
        lat: 50.579302321268386,
        lng: 8.668395280838013,
        focus: true,
        draggable: false,
        icon: localIcons.hospitalIcon
      }
    }
  });


  /*$scope.markerCluster = L.markerClusterGroup();

   for (var i = 0; i <$scope.markers.length; ++i){
   var popup = $scope.markers[i].message +
   '</br><b>Lat: </b>' + $scope.markers[i].lat +
   '</br><b>Lng: </b>' + $scope.markers[i].lng;

   var m = L.marker([$scope.markers[i].lat, $scope.markers[i].lng], {icon: $scope.markers[i].icon}).bindPopup(popup);

   $scope.markerCluster.addLayer(m);
   }

   $scope.centerGiessen.addLayer($scope.markerCluster);

   //leafletData.getMap().addLayer($scope.markerCluster);

   .then(function (map) {
   map.attributionControl.setPrefix('<a href="#" onClick="window.open(\'http://leafletjs.com\',\'_system\');return false;">Leaflet</a>');
   $http.get('scripts/controllers/map.geojson').success(function (data) {
   L.geoJson(data, {
   invert:true
   }).addTo(map);
   });
   });*/
});

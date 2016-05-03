'use strict';
angular.module('refugeeApp').controller('MapCtrl', function ($scope, leafletData) {

  $scope.centerGiessen = {
    lat: 50.583732,
    lng: 8.678344,
    zoom: 13
  };

  $scope.markers = {
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
  };

  $scope.defaults = {
    tileLayer: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}',
    tileLayerOptions: {
      attribution: '© Mapbox © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      detectRetina: true,
      reuseTiles: true,
      id: 'toxic2302.63a131f3',
      accessToken: 'pk.eyJ1IjoidG94aWMyMzAyIiwiYSI6ImNpbmcweTlhZzAwOTl2aGx4aHpjYzRydmgifQ.wvgrxPQEtbPxJs2HK0tBTg'
    }
  };

  //leafletData.getMap();
});

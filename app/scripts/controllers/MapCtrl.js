'use strict';
angular.module('refugeeApp').controller ('MapCtrl', function($scope){
  $scope.center ={
          'lat': 50.583732,
          'lng': 8.678344,
          'zoom': 11
      };
      $scope.markers = {};
      $scope.defaults = {
          tileLayer: 'https://{s}.tiles.mapbox.com/v3/foobar123.j5b19dpp/{z}/{x}/{y}.png',
          tileLayerOptions: {
              attribution: '© Mapbox © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
              detectRetina: true,
              reuseTiles: true,
          }
      };
      $scope.events= {
          markers: {
              enable: ['click'],
              logic: 'emit'
          }
      };

      /*    var markers = {};

              var marker = {
                  lat: parseFloat(item.latitude),
                  lng: parseFloat(item.longitude)

          $scope.markers=markers;*/
});

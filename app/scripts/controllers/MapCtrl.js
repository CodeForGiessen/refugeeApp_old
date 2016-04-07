'use strict';
angular.module('refugeeApp').controller ('MapCtrl', function($scope){
  angular.extend($scope, {
    center: {
      lat: 51.1642292,
      lng: 10.4541194,
      zoom: 6
    },

    defaults: {
      zoomControl: false
    },

    layers: {
      baselayers: {
        osm: {
          name: 'OpenStreetMap',
          url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          type: 'xyz'
        }
      }
    }
  });
});

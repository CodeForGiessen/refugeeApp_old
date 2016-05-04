'use strict';
angular.module('refugeeApp').factory('GuideLineData', ['$q', 'ENV', '$http', 'KeyCache',
  function () {
    //var allGuidesKey = 'guideCache.allGuidelines';
    //var maxAge = ENV.cachesMaxAge.guidelines;
    var guidelinesUrl = ENV.apiEndpoint + '/guides';
    //todo: ...?lang=en_US oder ?lang=de_DE
    //todo: ...?category=ID category
    //todo: ...?lang=en_US&category=ID
    var timeout = ENV.requestTimeout;

    var getAllGuidesToLang = function(lang) {
      console.log('getAllGuides');
      return $http.get(guidelinesUrl + '?lang=' + lang,{
      timeout: timeout
      })
        .then(function (response) {
          var guidelines = response.data.guides;
          console.log(guidelines);

          return guidelines;
        });
    };

    var service = {
      getAllGuidesToLang: getAllGuidesToLang
    };

    return service;
  }]);

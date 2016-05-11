'use strict';
angular.module('refugeeApp').factory('GuideLineData', ['$q', 'ENV', '$http',
  function ($http, ENV) {
    var guidelinesUrl = ENV.apiEndpoint + '/guides';
    //todo: ...?lang=en_US oder ?lang=de_DE
    //todo: ...?category=ID category
    //todo: ...?lang=en_US&category=ID
    var timeout = ENV.requestTimeout;

    /**
     *
     * @param lang
     * @returns {*}
       */
    var getAllGuidesToLang = function(lang) {
      console.log('getAllGuides');
      return $http.get(guidelinesUrl + '?lang=' + lang,{
      timeout: timeout
      })
        .then(function (response) {
          var guidelines = response.data.guides;
          console.log(guidelines);
          localstorage().setItem('guidelines',guidelines);

          return guidelines;
        });
    };

    /**
     *
     * @type {{getAllGuidesToLang: getAllGuidesToLang}}
       */
    var service = {
      /**
       *
       */
      getAllGuidesToLang: getAllGuidesToLang
    };

    return service;
  }]);

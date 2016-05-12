'use strict';
angular.module('refugeeApp').factory('GuideLineData', ['$q', 'ENV', '$http', 'toastr',
  function ($q, ENV, $http, toastr) {
    var guidelinesUrl = ENV.apiEndpoint + '/guides';
    var categoriesUrl = ENV.apiEndpoint + '/categories';
    var timeout = ENV.requestTimeout;

    /**
     *
     * @param lang
     * @returns {*}
       */
    var getAllGuidesToLang = function(lang) {
      //todo: check if the statuscode is 304...
      return $http.get(guidelinesUrl + '?lang=' + lang +'&published=true',{
      timeout: timeout
      })
        .then(function (response) {
          var guidelines = response.data.guides;
          localStorage.setItem('guidelines_' + lang, JSON.stringify(guidelines));
          toastr.info('Language set to ' + lang);

          return guidelines;
        });
    };

      /**
       *
       * @param lang
       */
    var getAllCategories = function () {
        return $http.get(categoriesUrl, {
          timeout: timeout
        })
          .then(function (response) {
            var categories = response.data.categories;
            localStorage.setItem('categories', JSON.stringify(categories));

            return categories;
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
      getAllGuidesToLang: getAllGuidesToLang,

        /**
         *
         */
      getAllCategories: getAllCategories
    };

    return service;
  }]);

'use strict';
angular.module('refugeeApp').factory('GuideLineData', ['$q', 'ENV', '$http', 'toastr', '$ionicLoading',
  function ($q, ENV, $http, toastr, $ionicLoading) {
    var guidelinesUrl = ENV.apiEndpoint + '/guides';
    var categoriesUrl = ENV.apiEndpoint + '/categories';
    var timeout = ENV.requestTimeout;
    var lastModified = localStorage.getItem('guidelinesLastModified');
    var reqOptions = {};

    /**
     *
     * @param lang
     * @returns {*}
       */
    var getAllGuidesToLang = function(lang) {
      $ionicLoading.show();
      if(lastModified){
        reqOptions.headers = {'If-Modified-Since': lastModified};
      }
      return $http.get(guidelinesUrl + '?lang=' + lang +'&published=true',{
      timeout: timeout
      })
        .then(function (response) {
          //todo nur runterladen wenn es seit dem letzten mal änderungen gibt
          if(response.status===200 && angular.isArray(response.data.guides)) {
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            var guidelines = response.data.guides;
            localStorage.setItem('guidelines_' + lang, JSON.stringify(guidelines));
            var respHeaders = response.headers();
            localStorage.setItem('guidelinesLastModified', respHeaders['last-modified']);
            toastr.success('New data has been downloaded!','Update complete');

            //return guidelines;
          } else {
            console.log('not-modified');
            toastr.info('Already up-to-date. No update necessary');
          }
        })
        .finally(function(){
          $ionicLoading.hide();
        });

      /*if (lastModified){
        reqOptions.headers = {'If-Modified-Since': lastModified}
      }

      var promise = $http.get(guidelinesUrl + '?lang=' + lang + '&published=true', reqOptions);

      promise.success(function (data, status, headers, config) {
        if(status === 200 && angular.isArray(data)){
          console.log('')
          //var guidelines = data;
          localStorage.setItem('guidelines_' + lang, JSON.stringify(data));
          toastr.info('Language set to ' + lang);
          var respHeaders = headers();
          localStorage.setItem('guidelinesLastModified' , respHeaders['last-modified']);

          return status;
        }
      })
        .error(function (data,status,headers, config){
          return status
        });*/
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
            if(response.status===200) {
              var categories = response.data.categories;
              localStorage.setItem('categories', JSON.stringify(categories));

              return categories;
            }
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

'use strict';
app.factory('tvService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var key = ngAuthSettings.apiKey;
    var tvServiceFactory = {}

    var _getTopRated = function () {
        return $http.get(serviceBase + 'tv/top_rated?api_key=' + key).then(function (response) {
            return response;
        });
    }

    var _search = function (query) {
        var uri = serviceBase + 'search/tv?api_key=' + key + '&query=' + query;
        console.log(uri);
        return $http.get(uri).then(function (response) {
            return response;
        });
    }


    tvServiceFactory.Search = _search;
    tvServiceFactory.GetTopRated = _getTopRated;


    return tvServiceFactory;
}]);
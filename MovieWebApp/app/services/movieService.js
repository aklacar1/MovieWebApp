'use strict';
app.factory('movieService', ['$http', '$q', 'localStorageService', 'ngAuthSettings', function ($http, $q, localStorageService, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var key = ngAuthSettings.apiKey;
    var movieServiceFactory = {}

    var _getTopRated = function () {
        return $http.get(serviceBase + 'movie/top_rated?api_key='+key).then(function (response) {
            return response;
        });
    }

    var _search = function (query) {
        var uri = serviceBase + 'search/movie?api_key=' + key + '&query=' + query;
        console.log(uri);
        return $http.get(uri).then(function (response) {
            return response;
        });
    }


    movieServiceFactory.Search = _search;
    movieServiceFactory.GetTopRated = _getTopRated;


    return movieServiceFactory;
}]);
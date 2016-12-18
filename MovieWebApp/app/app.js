var app = angular.module('AngularAuthApp', ['ui.router', 'LocalStorageModule', 'angular-loading-bar']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/movies");

    $stateProvider
    .state('movies', {
        url: "/movies",
        templateUrl: "/app/views/moviePage.html",
        controller: "movieController"
    })
    .state('tvshows', {
        url: "/tvshows",
        templateUrl: "/app/views/tvPage.html",
        controller: "tvController"
    })
});

//var serviceBase = 'http://localhost:55435/';
var serviceBase = 'https://api.themoviedb.org/3/';
var api_key = '8563caacfe2575948ec02e573f625724';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    apiKey: api_key
});



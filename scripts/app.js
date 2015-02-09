'use strict';

/**
 * @ngdoc overview
 * @name beerAppApp
 * @description
 * # beerAppApp
 *
 * Main module of the application.
 */
var beerApp = angular.module('beerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ]);


beerApp.config(function ($routeProvider) {
  $routeProvider
  .when('/breweries', {
      templateUrl: 'views/breweries.html',
      controller: 'BreweryListController'
    })
    .when('/breweries/:breweryId', {
      templateUrl: 'views/brewery.html',
      controller: 'BreweryDetailsController'
    })
    .when('/beers', {
      templateUrl: 'views/beers.html',
      controller: 'BeerListController'
    })
    .when('/beers/:beerId', {
      templateUrl: 'views/details.html',
      controller: 'BeerDetailsController'
    })
    .otherwise({
      redirectTo: '/breweries'
    });
});
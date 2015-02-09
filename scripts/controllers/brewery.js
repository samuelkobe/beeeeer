'use strict';

/**
 * @ngdoc function
 * @name beerAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beerAppApp
 */
angular.module('beerApp')
  .controller('BreweryDetailsController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('json/breweries.json').success(function(data) {
      	angular.forEach(data, function(item) {
          if (item.id == $routeParams.breweryId) 
            $scope.brewery = item;
        });
    });

    $http.get('json/beers.json').success(function(data) {
        $scope.beers = data;
    });
    $scope.pageClass = 'page-details';

    $scope.thisBrewery = function(beer) {
        return beer.brewery === $scope.brewery.name;
    };

    $scope.$back = function() { 
      window.history.back();
    };

}]);
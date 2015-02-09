'use strict';

/**
 * @ngdoc function
 * @name beerAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerAppApp
 */

angular.module('beerApp')
  .controller('BeerListController', ['$scope', '$http', function($scope, $http) {
		$http.get('json/beers.json').success(function(data) {
			$scope.beers = data;
		});
 
   		$scope.orderProp = 'name';

   		$scope.pageClass = 'page-home';
}]);


  
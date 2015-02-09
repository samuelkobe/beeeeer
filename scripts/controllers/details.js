'use strict';

/**
 * @ngdoc function
 * @name beerAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beerAppApp
 */
angular.module('beerApp')
  .controller('BeerDetailsController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('json/beers.json').success(function(data) {
      	angular.forEach(data, function(item) {
          if (item.id == $routeParams.beerId) 
            $scope.beer = item;
        });
    });
    $scope.pageClass = 'page-details';

    $scope.$back = function() { 
      window.history.back();
    };

}]);


angular.module('beerApp').directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.href === '#tab1'|| attrs.href === '#tab2' || attrs.href === '#tab3' ){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
   };
}); 

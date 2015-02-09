'use strict';

/*
 *
 * MAP STYLES
 *
 */

var styles = [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#425260"
            },
            {
                "lightness":50
             },
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            },
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
   {
      "featureType":"road",
      "elementType":"geometry",
      "stylers":[
         {
            "lightness":100
         },
         {
            "visibility":"simplified"
         }
      ]
   },
   {
      "featureType":"water",
      "elementType":"geometry",
      "stylers":[
         {
            "visibility":"on"
         },
         {
            "color":"#394751"
         }
      ]
   },
   {
      "featureType":"poi",
      "elementType":"geometry.fill",
      "stylers":[
         {
            "color":"#425260"
         },
         {
            "lightness":5
         }
      ]
   },
   {
      "featureType":"road",
      "elementType":"geometry.fill",
      "stylers":[
         {
            "color":"#425260"
         }
      ]
   },
   {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#425260"
            },
            {
                "lightness":5
             }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#425260"
            },
        ]
    },
    { 
                "featureType": "road", 
                "elementType": "labels", 
                "stylers": [ { "visibility": "off" } ] 
            },
]


/*
 *
 * Controller
 *
 */

angular.module('beerApp')
  .controller('BreweryListController', ['$scope', '$http', function($scope, $http) {

   		// Google Map Hero
   		$scope.map = { 
   			center: { 
   				latitude: 49.2764031, 
   				longitude: -123.0979068 
   			}, 
   			zoom: 14 ,
   			options: {
			   	scrollwheel: false,
			    navigationControl: false,
			    mapTypeControl: false,
			    scaleControl: false,
				zoom: 10,
				minZoom: 10,
				disableDefaultUI: true,
				styles: styles
   			}
   		}



        $scope.markers = [];
        var idNum = 0;

        $http.get('json/breweries.json').success(function(data) {
            $scope.breweries = data;

            angular.forEach(data, function(item) { 

                var iconimg = {
                    url: '../images/markers/'+item.id+'.svg', // url
                };

                var address = "#/breweries/" + item.id;
                var marker = {
                  id: idNum,
                  coords: {
                    latitude: item.latitude,
                    longitude: item.longitude
                  },
                  icon: iconimg,
                  events: {
                    click: function () {
                        window.location.href = address;
                    }
                  }
                };
                $scope.markers.push(marker);
                idNum++;
            });

        });
 
        $scope.orderProp = 'name';

        $scope.pageClass = 'page-home';

        /* Resize Map */

        $scope.init = function () {
            var h = $(window).height();
            var w = $(window).width();
            var newH = h - (h / 8);
            if (w > 720) {
                $('#vancouverMap').css({
                    height: newH
                });
                $('.angular-google-map-container').css({
                    height: newH + 30
                });
            } else {
                $('#vancouverMap').css({
                    height: h - 56
                });
                $('.angular-google-map-container').css({
                    height: h - 30
                });
            }
        };

}]);

//SPLASH STUFF TO BE MOVED
function splash(e) {
    $('#splash h1').delay(600).fadeToggle(1200);
    $('#splash').delay(7200).fadeToggle(1600);
    e.stopPropagation();
}

function updateSplashSize() {
    $("#splash").css('height', $(window).height());
    $("#splash").css('width', $(window).width());
    $("#splash").css('padding-top', $(window).height()/2-80);
}

$(document).ready(updateSplashSize);
$(document).ready(splash);
$(window).resize(updateSplashSize);
  
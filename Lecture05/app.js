(function() {
'use strict';

	angular.module("myFirstApp", [])

		.controller("myFirstController", function($scope){
			$scope.name = "Srishti";
			$scope.toBold = function(string) {
				return string.toUpperCase();
			};

		});

})();

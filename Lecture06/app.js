(function() {
'use strict';

	angular.module("nameCalculator", [])

		.controller("nameCalculatorController", function($scope){
			$scope.name = "";

			/* My implementation --
			$scope.getNumericValue = function(string) {
				var sum = 0;
				for (var i = 0; i < string.length; i++) {
					sum += string[i].charCodeAt();
				}
				return sum;
			};
			*/

			//Implementing Yaakov's design

			$scope.value = 0;
			$scope.displayValue = function() {
				var value = calculateStringValue($scope.name);
				$scope.value = value; 
			}

			function calculateStringValue(string) {
				var sum = 0;
				for (var i = string.length - 1; i >= 0; i--) {
					sum += string.charCodeAt(i);
				}
				return sum;
			}

		});

})();

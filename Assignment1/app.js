(function() {
	'use strict';

	angular.module("LunchCheckerApp", [])
	.controller("LunchCheckerAppController", LunchCheckerAppController);

	LunchCheckerAppController.$inject = ['$scope'];
	function LunchCheckerAppController($scope) {
		$scope.eatenItems = "";
		$scope.message = "(Please enter comma separated values)";
		$scope.image = "defaultFood";
		$scope.buttonState = "primary";
		$scope.message_color = "blue";
		$scope.processEatenItems = function() {
			if($scope.eatenItems.length == 0) {
				$scope.eatenItemsList = [];
			} else {
				$scope.eatenItemsList = $scope.eatenItems.split(",").filter(function(item) { item = item.trim(); return item.length > 0});
				$scope.eatenItemsList.forEach(function(item, index, arr) {arr[index] = item.trim();})
			}
			if($scope.eatenItemsList.length <= 0) {
				$scope.message = "Please enter data first !!!";
				$scope.image = "enterDataFirst";
				$scope.buttonState = "danger";
				$scope.message_color = "red";
				/* Removing timeut to adhere to assignment requirements
				setTimeout(function() {
					$scope.image = "defaultFood";
					$scope.message = "(Please enter comma separated values)";
					$scope.buttonState = "primary";
					$scope.message_color = "blue";
					$scope.$apply();
				}, 900); */
			} else if($scope.eatenItemsList.length <= 3) {
				$scope.message = "Enjoy!";
				$scope.image = "enjoyEating";
				$scope.buttonState = "success";
				$scope.message_color = "green";

			} else {
				$scope.message = "Too much!";
				$scope.image = "tooMuch";
				$scope.buttonState = "success";
				$scope.message_color = "green";
			}
		}
	};

})();
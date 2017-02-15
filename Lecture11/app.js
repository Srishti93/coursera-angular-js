(function(){
	angular.module('InterpolationApp', [])
	.controller('InterpolationAppController', InterpolationAppController);

	InterpolationAppController.$inject = ['$scope'];
	function InterpolationAppController($scope) {
		$scope.name = "Srishti";
		$scope.age = null;
		$scope.displayMessage = function () {
			return "I have no message for you fool";
		};

	//Part 2 of the lecture 
		$scope.state = "hungry";
		$scope.feedSrishti = function () {
			$scope.state = "fed";
			setTimeout(function(){ 
				$scope.state = "hungry";
				$scope.$apply();
			}, 6000);
		}
	}
})();
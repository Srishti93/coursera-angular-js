(function() { //IFFY
	'use strict';

	angular.module("DepInj", [/*no dependencies*/]).
		controller("DepInjController", DepInjControllerFn);

	DepInjControllerFn.$inject = ['$scope', '$filter']
	function DepInjControllerFn($scope, $filter) {
		$scope.name="Srishti";

		$scope.upper = function() {
			var upCase = $filter('uppercase');
			$scope.name = upCase($scope.name);
		}
	};
})();


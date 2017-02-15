(function() {
'use strict';

//x = "hello" //Without strict, this would be defined in (bleeded to) global space acc. to JS, as it has no var

	angular.module("MyFirstApp", [/*dependencies*/])

		.controller("MyFirstController", function(){
			//function that determines what happens to the div associated with this controller
		});

})();
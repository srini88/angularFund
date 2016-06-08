'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope){
	
	$scope.saveEvent = function(event){
		console.log(event.name)
	};
	$scope.cancelEdit = function(){
		window.location = "/EventDetails.html";
	}
})
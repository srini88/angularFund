'use strict';

eventsApp.controller('EditEventController', function EditEventController($scope){
	
	$scope.saveEvent = function(event, newEventForm){
		console.log(event.name)
		console.log(newEventForm)
	};
	$scope.cancelEdit = function(){
		window.location = "/EventDetails.html";
	}
})
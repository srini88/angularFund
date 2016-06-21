eventsApp.controller('EventListController',
	function EventListController($scope, $location, eventData){
		$scope.events = eventData.getAllEvents();
	})

//all it is doing is calling factory eventData and getting all events from it..
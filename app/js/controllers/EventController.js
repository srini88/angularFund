'use strict';
eventsApp.controller('EventsController',
	function EventController($scope){
		$scope.event ={
			name :'Angular Boot Camp',
			date: '1/1/2013',
			time:'10.30am'
		}
	})
'use strict';
//modules are basic building blocks of angular...eventsApp is a global variable...
var eventsApp = angular.module('eventsApp', ['ngRoute'])
	.config(function($routeProvider) {   
		

		$routeProvider.when('/newEvent',
		{
			templateUrl:'templates/NewEvent.html',
			controller : 'EditEventController'
		})
	})

'use strict';
eventsApp.controller('EventsController',
	function EventController($scope){
		$scope.event ={
			name :'Angular Boot Camp',
			date: '1/1/2013',
			time:'10.30am',
			location:{
				address:'Google headquarters',
				city:'Mountain View',
				province :'CA'
			},
			imageUrl:'/img/angularjs-logo.png',
			sessions:[
				{
					name:'Directives Masterclass',
					creatorName :'Srinivas Palghat',
					duration :'1 hr',
					level :'Advanced',
					abstract:'In this session you will learn in and outs of directives',
					upVoteCount :0
				},
				{
					name:'Scopes for fun and profit',
					creatorName :'John Doe',
					duration :'2 hr',
					level :'Amateaur',
					abstract:'In this session you will learn in and outs of scopes',
					upVoteCount :0
				},
				{
					name:'Well Behaved Controllers',
					creatorName :'Jane Doe',
					duration :'10 hr',
					level :'Advanced',
					abstract:'In this session you will learn in and outs of Controllers',
					upVoteCount :0
				}

			]

		}
	})
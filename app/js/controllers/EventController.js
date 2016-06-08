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
					upVoteCount :3
				},
				{
					name:'Scopes for fun and profit',
					creatorName :'John Doe',
					duration :'2 hr',
					level :'Amateaur',
					abstract:'In this session you will learn in and outs of scopes',
					upVoteCount :2
				},
				{
					name:'Well Behaved Controllers',
					creatorName :'Jane Doe',
					duration :'10 hr',
					level :'Advanced',
					abstract:'In this session you will learn in and outs of Controllers',
					upVoteCount :35
				}

			]

		}
		$scope.boolValue = true;
		$scope.upVoteSession = function(session){
			session.upVoteCount++;   //passing in the session itself from ng-click--dont need any fancy
			console.log(session.upVoteCount);
		}
		$scope.downVoteSession = function(session){
			session.upVoteCount--;   //passing in the session itself from ng-click--dont need any fancy
			console.log(session.upVoteCount);
		}
	})

//PS at this point ng-click works and does upvoting and downvoting..but when you refresh the page , the data is gone...it is setting back to its original values..


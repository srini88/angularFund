'use strict';
eventsApp.controller('EventsController',
	function EventController($scope, eventData){
		eventData.getEvent(function(event){
			$scope.event = event;
		});
		$scope.boolValue = true;
		$scope.upVoteSession = function(session){
			session.upVoteCount++;   //passing in the session itself from ng-click--dont need any fancy
			console.log(session.upVoteCount);
		}
		$scope.downVoteSession = function(session){
			session.upVoteCount--;   //passing in the session itself from ng-click--dont need any fancy
			console.log(session.upVoteCount);
		}
		$scope.mystyle = {
			color :'red'
		};
		$scope.myclass = "blue";
		$scope.buttonDisabled = true;
		$scope.sortorder ='-upVoteCount';  //by default it will be upVoteCount
		///also ng-model in select will show this by default
		//$scope.query = "introductory";  //not needed since we put query.level
	})

//PS at this point ng-click works and does upvoting and downvoting..but when you refresh the page , the data is gone...it is setting back to its original values..


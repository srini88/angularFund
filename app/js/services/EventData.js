//eventsApp is available on the windows scope..
////event data service is creating an object inline...instead put that stuff in a json file..
eventsApp.factory('eventData',function($http, $log){
	return {
		//http call is asybc.. wgeb we calll getevent fun we pass in success callback...
		getEvent : function(successcb){
			$http({
				method:'GET',
				url:'/data/event/1'
			}).then(function (response){
				successcb(response.data);

			}, function (response){
				$log.warn(response);
			})
		}
	};
})
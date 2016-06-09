//eventsApp is available on the windows scope..
////event data service is creating an object inline...instead put that stuff in a json file..


//we are doing successCB and all that...instead do it other way..normal way like I used to read..s
///the calleer will call then instead of passing a callback successscb
eventsApp.factory('eventData',function($http, $log){
	return {

		getEvent : function(){
			//returning a promise,,caller will call then
			return $http({method:'GET',url:'/data/event/1'});
		}
	};
})
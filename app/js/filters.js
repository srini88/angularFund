'use strict';
//filter must be on a module..
eventsApp.filter('durations', function(){
	//must return another fn, this fn first parameter is input
	return function(duration){
		switch(duration){
			case 1:
				return "Half Hour";
			case 2:
				return "1 Hour";
			case 3:
				return "Half Day";
			case 4:
				return "Full Day";

		}

	}
})

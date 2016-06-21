'use strict';

eventsApp.directive('mySample', function(){

	return {
		link:function(scope, element, attr, controller){
			var markup ="<input type='text' ng-model='sampleData'/>{{sampleData}}<br/>";

			angular.element(element).html(markup);
		}
	};


});


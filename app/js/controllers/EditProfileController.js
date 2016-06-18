'use strict';

eventsApp.controller('EditProfileController', function EditProfileController($scope, gravatarUrlBuilder){
	$scope.user = {};
	//takes in an email adderss and gives gravatar immage url...
	$scope.getGravatarUrl = function(email){
		return gravatarUrlBuilder.buildGravatarUrl(email);
	}
})


//our html 

//<img ng-src="{{getGravatarUrl(user.emailAddress)}}">  binding your email address

////gravatarUrlBuilder factory....

// eventsApp.factory('gravatarUrlBuilder', function(){

// 	return {
// 		buildGravatarUrl: function(email){
	

		//return 'http://www.gravatar.com/avatar/' + MD5(email) + ".jpg?s=200&r=g";
//		}
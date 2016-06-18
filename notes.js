controllers and templates..

services 

directives...

As web apps bigger...angularJS for MVC style spa's..

Single responsibility principle...

Services=

Testing ---

what , why

EventReg...angular event registration site....

he course is out of date. Angular 1.5 has released, and although all the code in this course works with 1.5, there is the new feature of components which you should learn about. 


Angular - JS framework -- MV* framework -- knockout or backbone...

It is opinioted framework.....do it in a certain way...

Model -- data -- view - render to user ---

controller/presenter/viewModel -- angular uses a controller--

Angular Features -- handles AJAX --- page --- partial templates....2 way data binding --- routing....one view to another -- key in spa's ...angular will also update url in the browser..

also Testability... supports isolated unit tests --- integrating ened-to -end test
Angular team uses Karma... 

Extends HTML vocabulary...by doing directives...
teach HTML new tricks..


directives -- make display widget...all shit like that...

Angular is forward thinking..

1) Web Componenet s --- truly encapsulate widgets and all that...
2) Object.observe -- watch an object for changes, and react to those changes...


Angular supports - both unit tests and end to end tests..


Angular Architecture --- supports two way binding..
you dont need to watch specific  events and manula update...
Angular does dirty checking...
Depency injection -- nice encapsulation...and good for testing..


Controllers contain logic and state... views/directives...one way or two way  binding..

services -- 
---working on application ----angular EventReg----

List of angular Events --- event details -- create new events and sessions...edit events and sessions...

Login- ----  user to login.....freely register user account----

server-- technology in place.....build and use node server and asp.net MVC>. we will make ajax calls to server...

also using a bootstrarp themee.....

Command shell -- bash shell -- for command line work...



Agenda  --- controllers and scope...markup and binding...filters...validation....



can modules depend on other modules ---- yes//


//installed node,js from our angularFund directory...installed express framework...it downloaded anutomaticlally...

C:\xampp\htdocs\rejuvenate\angularFund>npm install express@4.13.0 body-parser@1.
13.1
npm WARN package.json demoapp@1.0.0 No repository field.

served this...

http://localhost:8000/img/angularjs-logo.png


controllers and scope.. controller provides scope..scope is not the model..model is not the data  that is put in the scope.....

scope is not the model ---

view bind to functions on the scope....and also porperties on the scope object...



This is the URL I entered...working http://localhost:8000/EventDetails.html



<div class="span0 well votingWidget">
					<div class="votingButton">   
						<i class="icon-chevron-up icon-white"></i> provides up arrow
					</div>
					<div class="badge badge-inverse">
						<div>{{session.upVoteCount}}</div> put the number in a circlle
					</div>
					<div class="votingButton">
						<i class="icon-chevron-down"></i>  provides down array
					</div>
				</div>

--now need to implement votion

so we need to rig up clcik event on the up and down icons


 ng-click="upVoteSession(session)">  pass in the session that you are upvoting...this session is one entity in the ng-repeat

with just click it does not work...got to use ng-click

----Built in directives -----------
directives are new HTML functionality.....
Angular parses through html and look for directives and takes action...

///how will you write directives...  4 ways - 4th way is by HTML comment...
<ng-form/>   //just as tag
div ng-form/>  //just as attribute

<div class="ng-form"/>  //as class

--------Event Directives------
ng-click
ngDblClick
ngMouseDown
ngMouseenter
ngMouseup
ngChange --- detect a change event on lot of HTML input elements..

<input type ="checkbox" ng-change ="handleChange()" ng-model ="property" />


whenever checkbox is checed or unchecekd -- ngChange requires ngModel direct..imp...

--Other directives ------
ngApp , ngBind , ngBindTempalte , ngBindHtml, ngBindHtmlUnsafe

ngBind - remove curly braces and do this <h2 ng-bind="event.name"></h2>

ng-bind-template ="{{event.name}}{{event.date}}"   -- can put multiple stuff in curly braces in bind template

ngBindHtml -- part of angular sanitise........have to inject sanitize as a dependency...

sanitize removes anything that  is dangerous...still allows you to have html...

--ngHide and ngShow --- mirror images of each other..

only manipulate dom using directives, and never manipulate using controler

never manipulate dom with controller

<h2 ng-show="boolValue">Show This</h2>   will show when true....ng-hide will hide when true

<h2 ng-hide="boolValue" class="ng-hide">Hide This</h2>   ng-hide class will make display:none

ngClock -- hide portions or all of the page until angular has time to run and go through and parse the html and replace the directives or bindings with actual values...otherwise you get flashes.... it will show angular syntax...{{}}

<h2 ng-style="mystyle"   put this in html 

$scope.mystyle = {
			color :'red'    this in our controller.....text will turn to red color...
		};

		also there are ngClass,-- ngClassEven, ngClassOdd   ------ use it inside of ngRepeat directives...


ngClass 

<h2 ng-class="myclass"

css file 
.blue{
  color:blue;
}

$scope.myclass = "blue"; -- create the name of the class in the js file..which is blue and use that class in the css..

ngCloak - to avoid a flash of unbound html...
ngBind does not support multiple bindings....the ngBindTemplate directive does..


---ngDisabled, ngChecked, ngMultiple, ngReadOnly, ngSelected...

ngDisabled --
$scope.buttonDisabled = true;
<button class="btn" ng-disabled="buttonDisabled">Disabled</button> if the value is true it will be disabled..

ngForm ----- ngForm can be nested in other forms....
ngSubmit --- allows you to call a method on scope if the form is submitted....on submit button or enter key..

ngHref = binding href att on anchor tag...
ngSrc =  will set as binding...

ngNonBindable --- specifies an area that do not parse and do the binding...


<div ng-non-bindable>{{1+2}}</div>  will not evaluate......and will see actual text...and angular will not parse..


what does ngForm do -- Nest forms within each other....
ngSrc directive delays fetching an image until after binding has occured...

setting disabled = false , does not disable control in many browsers...so deal with angular instted by means of ngDisabled..

-IE restrictions---

Polyfill JSON.stringify...
no NG tags --- dont use tag format of the directive....

tag form, attribute form and classname form --- instead use attribute fform or class form in IE.....

what do you need to do to support older versions of IE with angular?  

polyfull JSON.stringify and avoid custom tag name directives..


---------Expressions in Angular -----
JS like code snippets  {{expression}} typically variable names....

you can create an array inside expressions {{[1, 2, 3, 4][0]}}  -expressions have lot of power..

-----Filters ------
Modifying Output --- FOrmatting... sorting Dataset....Fitering dataset....s


using filter {{expression | filter}} 

Built in filters ----

uppercase, lowercase... piece of string data either uppercase or lowercase..


json filter ---

orderBy limitTo limit records to certain number of recors..  filter - by exression

<select ng-model="sortorder" class="input-small">
<option selected value ="name">Name</option>
			<option value ="-upVoteCount">Votes</option>

			values matching up with the variable names in the js file..



<select ng-model="query" class="input-medium">
			<option selected value ="">All</option>
			<option value ="introductory">Introductory</option>
			<option value ="intermediate">Intermediate</option>
			<option value ="advanced">Advanced</option>
			
		</select>

<li ng-repeat="session in event.sessions | orderBy:sortorder|filter:query">

<select ng-model="query" class="input-medium"> problem with this :does not filter by variable..it checks everything...so use query.level...


you can limit a filter to only search in a specific field:

you can specify custom date formats with the date filter...

------writing custom filter...

module.filter('name', function(){
	//have to return a function..
	return function(input, filter parameters){

		//modify input
		return modifiedOutput;
	}
})
---to try lets make duration an integer..instead of a string..

<span>Duration: {{session.duration | durations}}</span><br/>   -- durations is the filter , that returns a function..


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

-------two way data binding --------------

ngModel  - works with input select and textArea, will hook up two way data binding..


<input type ="text" ng-model = "object.propery"


<input type ="text" ng-model = "propery"

<input type ="text" ng-model = "object.container.propery"



put data inside your scope...add model xdirective to each field..


<input type="url" id="eventImageUrl" ng-model ="event.imageUrl" class="input-xlarge" placeholder="Url of image...">
				</fieldset>

				<img ng-src="{{event.imageUrl}}" src="">

I copied one url of a google image and put it...
below it started loading..means the image tag is bound by ng-model  event.imageUrl


Two way binding will update on every key stroke..

Input, select and textarea will be bound to two way binding..

---------validation=-----

Required attribute...
ngPattern ...meat of validation 
CSS classes...


<button type="submit" ng-disabled = "newEventForm.$invalid"ng-click="saveEvent(event, newEventForm)" class="btn btn-primary">Save</button>


form name is newEventForm --- form will be invalid until you enter the right values...

logging out the form name itself --- console.log(newEventForm)


$dirty 
opposites
$pristine 

$invalid
opposites
$valid


angular puts some classes also..ng-invalid , valid to your form shit..

opposite of dirty is pristine...

ngPattern lets you create regex for validation...

a form must have a name to do any validation properties....

A service is some object that performs business logic...

services are often stateless...


built in services --- navigation, ajax interaction, custom services...

services encapsulate reusable business logic.... 
break app into pieces that is easier to maintain....

SRP single responsibility principle...

an object should  have onyl a single responsibility...

Inject them to other controllers using DI...

Testable --- isolate your tests for just pieces of code you just want to test...you can just inject any service you need... s

AngularJS built from ground to be testable...


service1, service2  -- can inject both in a controller....


$scope itself is an angular service..you injected it in the controller...


-----factory=========

eventsApp.factory('eventData',function(){
	return {


then inject this eventData in the controller...




---gravatar --- binding to the email address=--- in the gravatar website each user has an image with an email address...when I type...

angularjsdemo@gmail.com  I getting angular imag...dynamically...

<img ng-src="{{getGravatarUrl(user.emailAddress)}}">


---angular comes with a whole host of built in services...

$http
$resource 
$anchorScroll
$cacheFactory 
$compile 
$parse 
$locale 
$timeout 
$exceptionHandler 
$filter 
$cookieStore 


$interpolate 
$log 
$rootScope 
$window 

$routeParams, $location...


=---------------resource service --------------

based on rest architecture...your web server is using rest based architecture....

godammn resource is in a different module......you got to include ng-resporce..........you have to include angular-resource module...



I feel that other answers, while correct, don't quite explain the root of the question: REST is a subset of HTTP. This means everything that can be done via REST can be done via HTTP but not everything that can be done via HTTP can be done via REST. That is why $resource uses $http internally.

So, when to use each other?

If all you need is REST, that is, you are trying to access a RESTful webservice, $resource is going to make it super easy to interact with that webservice.

If instead, you're trying to access ANYTHING that is not a RESTful webservice, you're going to have to go with $http. Keep in mind, you could also access a RESTful webservice via $http, it will just be much more cumbersome than with $resource. This is the way most people have been doing it outside AngularJS, by using jQuery.ajax (equivalent of Angular's $http).



$http makes general purpose AJAX call, in which general means it can include RESTful api plus Non-RESTful api.

and $resource is specialized for that RESTful part.

$resource way to fetch data
angular.module('myApp', ['ngResource'])

    // Service
    .factory('FooService', ['$resource', function($resource) {
        return $resource('/api/cars/:carId')
    }]);

    // Controller
    .controller('MainController', ['FooService', function(FooService){
        var self = this;
        self.cars = FooService.query();
        self.myCar = FooService.get('123');

    }]);

This will give you an resource object, which is accompanied with get, save, query, remove, delete methods automatically.



$http way to fetch data

angular.module('myApp', [])

    // Service
    .factory('FooService', ['$http', function($http){
        return {
            query: function(){
                return $http.get('/api/cars');
            },

            get: function(){
                return $http.get('/api/cars/123');
            }
            // etc...
        }

See how we need to define each common operation on RESTFul API. Also one difference is that $http returns promise while $resource returns an object. There are also third-party plugins to help Angular deal with RESTFul API like restangular






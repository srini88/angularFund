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

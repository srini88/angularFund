//eventsApp is available on the windows scope..
eventsApp.factory('eventData',function(){
	return {
		event : {
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
					name:'Scopes for fun and profit',
					creatorName :'John Doe',
					duration :2,
					level :'introductory',
					abstract:'In this session you will learn in and outs of scopes',
					upVoteCount :2
				},
				{
					name:'Directives Masterclass introductory',
					creatorName :'Srinivas Palghat',
					duration :1,
					level :'Advanced',
					abstract:'In this session you will learn in and outs of directives',
					upVoteCount :3
				},
				{
					name:'Well Behaved Controllers',
					creatorName :'Jane Doe',
					duration :4,
					level :'Advanced',
					abstract:'In this session you will learn in and outs of Controllers',
					upVoteCount :35
				}

			]

		}
	};
})
let AllGoals = [
	{	
		key: 'Buid Yourgoals.com',
		title: 'Buid Yourgoals.com',
		deadline: '02-06-2019',
		duration: '10 days',
		status: 'Complete',
		routine: 'Weekly',
		current: true
	},
	{	
		key: 'Play Gamess',
		title: 'Be World Class',
		deadline: '02-09-2909',
		duration: '50 days',
		status: 'Current',
		routine: 'Yearly'
	},
	{
		key: 'Play Gamesaa',
		title: 'Start User page',
		deadline: '02-09-2909',
		duration: '50 days',
		status: 'Overdue',
		routine: 'Monthly'
	},
	{
		key: 'Play s',
		title: 'Start User page',
		deadline: '02-09-2909',
		duration: '50 days',
		status: 'Overdue',
		routine: 'Monthly'
	},
	{
		key: 'Play ss',
		title: 'Start User page',
		deadline: '02-09-2909',
		duration: '50 days',
		status: 'Current',
		routine: 'Monthly'
	},
	{
		key: 'Play sss',
		title: 'Start User page',
		deadline: '02-09-2909',
		duration: '50 days',
		status: 'Current',
		routine: 'Monthly'
	},
	{
		key: 'Play ssss',
		title: 'Start User page',
		deadline: '02-09-2909',
		duration: '50 days',
		status: 'Current',
		routine: 'Monthly'
	},
	{
		key: 'Play saaa',
		title: 'Start User page',
		deadline: '02-09-2909',
		duration: '50 days',
		status: 'Current',
		routine: 'Monthly'
	}		
];

let CurrentGoals = AllGoals.filter(goal => 
	goal.status == 'Current'
);

let CompletedGoals = AllGoals.filter(goal => 
	goal.status == 'Complete'
);

let OverdueGoals = AllGoals.filter(goal => 
	goal.status == 'Overdue'
);
export { AllGoals, CurrentGoals, CompletedGoals, OverdueGoals }
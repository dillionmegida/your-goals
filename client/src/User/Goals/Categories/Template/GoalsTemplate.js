import React from 'react';

import './style.css';

let Today = new Date();
let FullDate = `${Today.getDay()} ${Today.getMonth()}, ${Today.getFullYear()}`;

let Goals = [
	{	
		key: 'Buid Yourgoals.com',
		title: 'Buid Yourgoals.com',
		deadline: '02-06-2019',
		duration: '10 days',
		status: 'Incomplete',
		routine: 'Weekly',
		current: true
	},
	{	
		key: 'Play Gamess',
		title: 'Be World Class',
		deadline: '02-09-2909',
		duration: '50 days',
		status: 'Incomplete',
		routine: 'Yearly',
		current: true
	},
	{
		key: 'Play Gamesaa',
		title: 'Start User page',
		deadline: '02-09-2909',
		duration: '50 days',
		status: 'Complete',
		routine: 'Monthly',
		current: false,
	}
];

Goals.forEach(goal => {
	if(goal.status === 'Incomplete')
		goal.edit = true;
});

let TempAllGoals = Goals;

let TempCompletedGoals = Goals.filter(goal => 
	goal.status == 'Complete'
);

let TempIncompletedGoals = Goals.filter(goal =>
	goal.status === 'Incomplete'
);

let TempCurrentGoals = Goals.filter(goal =>
	goal.current
);

let GoalsTemplate = props => {

	let Category = props.Category;
	let CategoryName = props.CategoryName;

	let classes=['GoalsSection'];
	classes.push(Category);

	switch(Category) {
		case 'AllGoals':
		Category = TempAllGoals;
		break;

		case 'CompletedGoals':
		Category = TempCompletedGoals;
		break;

		case 'IncompletedGoals':
		Category = TempIncompletedGoals;
		break;

		case 'CurrentGoals':
		Category = TempCurrentGoals;
		break;
	}

	return (
		<section style={{height: props.DivHeight}} className={classes.join(' ')}>
		
			<h3>{CategoryName}</h3>
			{
				Category.map(goal => 
					<div className='Goal' key={goal.key}>
						<div className='GoalOptions'>
							{
								goal.edit ? 
								
								<button className='edit'>
									<i className='fa fa-pencil fa-2x'></i>
								</button>
								:
								null
							}

							<button className='trash'>
								<i className='fa fa-trash fa-2x'></i>
							</button>

						</div>
						<h4>{goal.title}</h4>
						<p>Deadline: {goal.deadline}</p>
						<p>Duration: {goal.duration}</p>
						<p>Routine: {goal.routine}</p>
						{goal.status === 'Complete' ?
							<p className='GoalStatusIcons'><i style={{color: 'var(--color6)'}} className='fa fa-check-circle' ariaHidden='true'></i></p>
							:
							goal.status === 'Incomplete' ?
								<p className='GoalStatusIcons'><i style={{color: 'gray'}} className='fa fa-exclamation-circle' ariaHidden='true'></i></p>
								:
								null
						}
						
					</div>
				)
			}
		</section>
	)
}

export default GoalsTemplate;


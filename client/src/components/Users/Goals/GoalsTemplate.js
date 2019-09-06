import React from 'react';

import './style.css';

let Goals = [
	{	
		key: 'Play Games',
		title: 'Play Games',
		deadline: '15th Feb, 2019',
		duration: '50 days',
		status: 'Complete'
	},
	{	
		key: 'Play Gamess',
		title: 'Fly Plane',
		deadline: '15th Feb, 2019',
		duration: '50 days',
		status: 'Complete'
	},
	{
		key: 'Play Gamesaa',
		title: 'Play School',
		deadline: '15th Feb, 2019',
		duration: '50 days',
		status: 'Incomplete'
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
	goal.status == 'Incomplete'
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
	}

	{console.log(Category)}



	return (
		<section style={{height: props.DivHeight}} className={classes.join(' ')}>

			<h3>{CategoryName}</h3>
			{
				Category.map(goal => 
					<div className='Goal'>
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
						<p>{goal.deadline}</p>
						<p>{goal.duration}</p>
						<p>{goal.status}</p>
					</div>
				)
			}
		</section>
	)
}

export default GoalsTemplate;


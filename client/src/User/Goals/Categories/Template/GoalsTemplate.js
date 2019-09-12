import React from 'react';

import './style.css';

let Today = new Date();
let FullDate = `${Today.getDay()} ${Today.getMonth()}, ${Today.getFullYear()}`;

import { AllGoals } from '../../Goals';

AllGoals.forEach(goal => {
	if(goal.status === 'Current')
		goal.edit = true;
});

let TempAllGoals = AllGoals;

let TempCompletedGoals = AllGoals.filter(goal => 
	goal.status == 'Complete'
);

let TempIncompletedGoals = AllGoals.filter(goal =>
	goal.status === 'Current'
);

let TempCurrentGoals = AllGoals.filter(goal =>
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


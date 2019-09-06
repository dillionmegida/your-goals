import React from 'react';
import GoalsTemplate from './GoalsTemplate.js';

let IncompletedGoals = () => {
	return(
		<GoalsTemplate
			DivHeight='230px'
			Category='IncompletedGoals'
			CategoryName='Incompleted Goals'
		/>
	)
}

export default IncompletedGoals;
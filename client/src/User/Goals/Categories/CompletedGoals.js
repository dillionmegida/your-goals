import React from 'react';
import GoalsTemplate from './Template/GoalsTemplate.js';

let CompletedGoals = () => {
	return(
		<GoalsTemplate
			DivHeight='230px'
			Category='CompletedGoals'
			CategoryName='Completed Goals'
		/>
	)
}

export default CompletedGoals;
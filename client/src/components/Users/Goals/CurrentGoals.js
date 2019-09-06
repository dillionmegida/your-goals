import React from 'react';
import GoalsTemplate from './GoalsTemplate.js';

let CurrentGoals = () => {
	return(
		<GoalsTemplate
			DivHeight='80%'
			Category='CurrentGoals'
			CategoryName='Current Goals'
		/>
	)
}

export default CurrentGoals;
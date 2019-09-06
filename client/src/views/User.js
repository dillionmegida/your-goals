import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

import AllGoals from '../components/Users/Goals/AllGoals';
import CompletedGoals from '../components/Users/Goals/CompletedGoals';
import IncompletedGoals from '../components/Users/Goals/IncompletedGoals.js';

import '../styles/User.css';

let User = () => {
	return(
		<Layout UserLoggedIn>
			<main className='Dashboard'>
				<div className='AddGoal'>
					<i className='fa fa-plus fa-2x'></i>
				</div>
				
				<AllGoals />
				<section className='CompAndIncomp'>
					<CompletedGoals />
					<IncompletedGoals />
				</section>
				



			</main>
		</Layout>
	)
}

export default User;
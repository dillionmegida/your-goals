import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';

import AllGoals from '../components/Users/Goals/AllGoals';
import CurrentGoals from '../components/Users/Goals/CurrentGoals';
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
				
				<CurrentGoals />

				<section className='CompAndIncomp'>
					<IncompletedGoals />
					<CompletedGoals />
				</section>
				
				<AllGoals />
				



			</main>
		</Layout>
	)
}

export default User;
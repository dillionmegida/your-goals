import React, { Component } from 'react';
// import Layout from '../components/Layout/Layout';
import UserLayout from '../User/components/Layout/UserLayout';
import '../styles/User.css';

// Categories of Goals
// import AllGoals from '../components/Users/Goals/Categories/AllGoals';
// import CurrentGoals from '../components/Users/Goals/Categories/CurrentGoals';
// import CompletedGoals from '../components/Users/Goals/Categories/CompletedGoals';
// import IncompletedGoals from '../components/Users/Goals/Categories/IncompletedGoals.js';
import { Goals } from '../User/Goals/Categories/Template/GoalsTemplate';

//For Modal
import Modal from '../components/Common/Modal/Modal';

import { FirstName } from '../User/components/common/Info.js';

import '../styles/User.css';

class User extends Component {

	state={
		ShowModal: false
	}

	closeModal = () => {
		this.setState({
			ShowModal: false
		})
	}

	showModal = () => {
		this.setState({
			ShowModal: true
		})
	}


	render() {
		return(
			// <Layout UserLoggedIn>
			// 	{this.state.ShowModal ?
			// 		<Modal
			// 			CloseModal={this.closeModal}
			// 		/>
			// 		:
			// 		null
			// 	}
				
			// 	<main className='Dashboard'>
			// 		<div onClick={this.showModal} className='AddGoal'>
			// 			<i className='fa fa-plus fa-2x'></i>
			// 		</div>
					
			// 		<CurrentGoals />

			// 		<section className='CompAndIncomp'>
			// 			<IncompletedGoals />
			// 			<CompletedGoals />
			// 		</section>
					
			// 		<AllGoals />
					



			// 	</main>
			// </Layout>
			<UserLayout>
				<h1 className='WelcomeUser'>Welcome {FirstName} &#128075;</h1>
				<section className='Statistics'>
					<div>
						<p className='tag'>Success</p>
						<p className='value'>80%</p>
					</div>
					<div>
						<p className='tag'>Failure</p>
						<p className='value'>10%</p>
					</div>
					<div>
						<p className='tag'>Total Number of Goals</p>
						<p className='value'>50</p>
					</div>
					<div>
						<p className='tag'>Current Goals</p>
						<p className='value'>23</p>
					</div>
				</section>
				<section className='Overview'>
					<div className='title'>
						<p>Goals Overview</p>	
					</div>
					<div className='GoalsDisplay'>
						{	
							Goals.map(goal => {
								let bgColor;
								goal.status == 'Complete' ? bgColor='completeColor' : 
									goal.status == 'Incomplete' ? bgColor='currentColor' : 
										goal.status == 'Overdue' ? bgColor='overdueColor' : bgColor=null;
								return(
									<div style={{backgroundColor: `var(--${bgColor})`}} className='GoalContainer' key={goal.key}>
										<p className='GoalTitle'>{goal.title}</p>
									</div>
								)
								
							})
						}
					</div>

				</section>
            </UserLayout>
		)
	}
}

export default User;
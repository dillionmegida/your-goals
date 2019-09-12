import React, { Component } from 'react';
// import Layout from '../components/Layout/Layout';
import UserLayout from '../User/components/Layout/UserLayout';
import '../styles/User.css';

// Categories of Goals
// import AllGoals from '../components/Users/Goals/Categories/AllGoals';
// import CurrentGoals from '../components/Users/Goals/Categories/CurrentGoals';
// import CompletedGoals from '../components/Users/Goals/Categories/CompletedGoals';
// import IncompletedGoals from '../components/Users/Goals/Categories/IncompletedGoals.js';

//For Modal
import Modal from '../components/Common/Modal/Modal';

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
			<section className='Dashboard'>
				<UserLayout />
			</section>
		)
	}
}

export default User;
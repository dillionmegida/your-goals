import React from 'react';
import './style.css';

let CurrentGoals = () => {
	return (
		<section className='GoalsSection CurrentGoals'>
			<h3>Current Goals</h3>
			<div className='Goal'>
				<div className='GoalOptions'>
					<button className='edit'>
						<i className='fa fa-pencil fa-2x'></i>
					</button>
					<button className='trash'>
						<i className='fa fa-trash fa-2x'></i>
					</button>
				</div>
	
				<h4>Play Games</h4>
				<p>Deadline: 15th Feb, 2019</p>
				<p>Duration: 50days</p>
				<p>Status: Complete</p>
			</div>
			<div className='Goal'>
				<div className='GoalOptions'>
					<button className='edit'>
						<i className='fa fa-pencil fa-2x'></i>
					</button>
					<button className='trash'>
						<i className='fa fa-trash fa-2x'></i>
					</button>
				</div>
				<h4>Play Games</h4>
				<p>Deadline: 15th Feb, 2019</p>
				<p>Duration: 50days</p>
			</div>
		</section>
	)
}

export default CurrentGoals;
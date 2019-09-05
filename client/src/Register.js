import React from 'react';
import Layout from './components/Layout/Layout';

import './Register.css';

let Register = () => {
	return(
		<Layout>
			<section className='RegisterSection'>
				<section className='Register'>
					<h2>Register</h2><br/>
					<p>Or Login</p>
					<input type='text' placeholder='e.g John Smith'/>
					<input type='text' placeholder='e.g john@gmail.com'/>
					<input type='text' placeholder='e.g johnsm'/>
					<input type='text' placeholder='*****'/>
				</section>
			</section>
		</Layout>
	)
}

export default Register;
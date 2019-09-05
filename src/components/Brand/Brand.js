import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo.js';

require('./Brand.css');

export default () => (
	<React.Fragment>
		<Link to='/' className='Brand'> 
			{/* <Logo /> */}
			<h3>YourGoals.com</h3>
		</Link>
	</React.Fragment>
)
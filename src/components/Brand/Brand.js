import React from 'react';
import Logo from './Logo.js';

require('./Brand.css');

export default () => (
	<React.Fragment>
		<a href='#Intro' className='Brand'> 
			<Logo />
			<h3>YourGoals.com</h3>
		</a>
	</React.Fragment>
)
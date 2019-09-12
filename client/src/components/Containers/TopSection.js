import React from 'react';
import Brand from '../Brand/Brand';
import NavLinks from '../Nav/NavLinks.js';

require('./TopSection.css');

export default (props) => (
	<header id='Intro' className='TopSection'>
		<NavLinks UserLoggedIn={props.UserLoggedIn}>
			<Brand color='var(--color1)'/>
		</NavLinks>
	</header>
);
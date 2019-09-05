import React from 'react';
import Brand from '../Brand/Brand';
import NavLinks from '../Nav/NavLinks.js';

require('./TopSection.css');

export default () => (
	<header id='Intro' className='TopSection'>
		<NavLinks>
			<Brand />
		</NavLinks>
	</header>
);
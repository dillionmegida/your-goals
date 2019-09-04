import React from 'react';
import NavLink from './NavLink';
import Button from '@material-ui/core/Button';

require('./NavLinks.css');

let navLinks = () => (
	<nav className='TopNav'>
		<ul>
			<NavLink nav='About Us'/>
		</ul>
		{/* <Button variant="outlined" color="primary">
			Sign Up
		</Button>
		<Button variant="contained" color="primary">
			Sign In
		</Button> */}
	</nav>
);

export default navLinks;
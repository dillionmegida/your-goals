import React from 'react';
import NavLink from './NavLink';
import Button from '@material-ui/core/Button';

require('./NavLinks.css');

let navLinks = () => (
	<nav className='TopNav'>
		<ul>
			<NavLink linkTo='#Testimonials' nav='Testomonials'/>
			<NavLink linkTo='#' nav='About Us'/>
			<NavLink linkTo='#' nav='Contact Us'/>
		</ul>
	</nav>
);

export default navLinks;
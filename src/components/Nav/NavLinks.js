import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import Button from '@material-ui/core/Button';

require('./NavLinks.css');

let navLinks = props => (
	<nav className='TopNav'>
		<ul>
			<div className='leftNavLinks'>
				<NavLink linkTo='#Intro' nav='Introduction'/>
				<NavLink linkTo='#Testimonials' nav='Testomonials'/>
			</div>

			{props.children}

			<div className='rightNavLinks'>
				<NavLink linkTo='#' nav='About'/>
				<NavLink linkTo='#' nav='Contact'/>
			</div>
			<div className='hamburger'>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</ul>
	</nav>
);

export default navLinks;
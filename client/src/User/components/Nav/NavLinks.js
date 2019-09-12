import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import Button from '@material-ui/core/Button';

require('./NavLinks.css');

let navLinks = props => (
	<nav className='Links'>
		<ul>
			<NavLink active To='overview' Title='Overview' Icon='fa fa-home' Nav='General' />
			<NavLink To='overview' Title='Current Goals' Icon='fa fa-clock-o' Nav='Current Goals' />
			<NavLink To='overview' Title='Current Goals' Icon='fa fa-check' Nav='Complete Goals' />
			{ /* <NavLink To='overview' Title='Current Goals' Icon='fa fa-tasks' Nav='Incomplete Goals' /> */ }
			<NavLink To='overview' Title='Current Goals' Icon='fa fa-times-circle' Nav='Overdue Goals' />
			<NavLink To='overview' Title='Current Goals' Nav='Shared Goals' />
			<NavLink To='overview' Title='Current Goals' Nav='Team Goals' />
			<NavLink To='overview' Title='Current Goals' Nav='Social Stats' />
		</ul>
	</nav>
);

export default navLinks;
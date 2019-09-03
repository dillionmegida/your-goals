import React from 'react';

require('./NavLink.css');

let navLink = props => (
	<li className='NavLink'>
		{props.nav}
	</li>
);

export default navLink;
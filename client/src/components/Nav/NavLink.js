import React from 'react';
import { Link } from 'react-router-dom';

let navLink = props => (
	<li>
		<a href={props.linkTo}>
			{props.nav}
		</a>
	</li>
);

export default navLink;
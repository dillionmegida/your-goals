import React from 'react';

let navLink = props => (
	<li>
		<a href={props.linkTo}>
			{props.nav}
		</a>
	</li>
);

export default navLink;
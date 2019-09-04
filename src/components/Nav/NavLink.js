import React from 'react';

let navLink = props => (
	<li style={{display: 'block'}} className={props.linkStyle}>
		{props.nav}
	</li>
);

export default navLink;
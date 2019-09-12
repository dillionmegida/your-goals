import React from 'react';
import { Link } from 'react-router-dom';

let navLink = props => (
	<li>
		<Link className={props.active? 'active' : null} to={props.To} title={props.Title}>
			<span style={{float: 'right', fontSize: '18px'}}>
				<i className={props.Icon}></i>
			</span>
			{props.Nav}
			
		</Link>
	</li>
);

export default navLink;
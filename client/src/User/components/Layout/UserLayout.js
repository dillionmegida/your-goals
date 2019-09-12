import React from 'react';
import './UserLayout.css';

import TopHeader from '../container/TopHeader/TopHeader.js';
import LeftColumn from '../container/LeftColumn/LeftColumn';
import RightColumn from '../container/RightColumn/RightColumn';

let UserLayout = props => (
	<React.Fragment>
		<TopHeader />
		<section className='Columns'>
			<LeftColumn />
			<RightColumn>
				{props.children}
			</RightColumn>
		</section>
	</React.Fragment>
	
);

export default UserLayout;
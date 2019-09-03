import React from 'react';
import TopSection from '../Containers/TopSection';

let layout = props => (
	<div>
		<TopSection />
		{props.children}
	</div>
);

export default layout;
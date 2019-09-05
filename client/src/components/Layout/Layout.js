import React from 'react';
import TopSection from '../Containers/TopSection';

let layout = props => (
	<div class='screen'>
		<TopSection />
		<main className={props.mainStyle}>
			{props.children}
		</main>
	</div>
);

export default layout;
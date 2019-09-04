import React from 'react';

require('./Testimonials.css');

let Testimonial = props => (
	<div style={{maxWidth: '500px'}}>
		<h2>Testimonials</h2>
		<h3>{props.Name}</h3>
		<p>"{props.Testimony}"</p>
		<hr/>
	</div>
);

let TestimonialSection = () => {
	return (
		<section className='TestimonialSection'>
			<Testimonial Name='Dillion Megida' Testimony='Working with Trace on this mind blowing project. Beta version soon to be out. Stay tuned. Working with Trace on this mind blowing project. Beta version soon to be out. Stay tuned. Working with Trace on this mind blowing project. Beta version soon to be out. Stay tuned.'
			/>

		</section>
	)
}

export default TestimonialSection;
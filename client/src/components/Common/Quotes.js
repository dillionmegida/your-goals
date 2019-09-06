import React from 'react';

let Quote = [
	{
		quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
		author: "Henry David Thoreau"
	}
];

let RandomIndex = array => {
	let index = Math.floor(Math.random() * array.length);
	return array[index];
}

let Quotes = () => {
	return (
		<p>
			{`"${RandomIndex(Quote)['quote']}"`}<br/>
			<span className='Author'>
				{`- ${RandomIndex(Quote)['author']}`}
			</span>
		</p>
	)
}

export default Quotes;
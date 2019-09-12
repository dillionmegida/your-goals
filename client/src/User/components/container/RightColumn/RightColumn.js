import React from 'react';
import './RightColumn.css';

let RightColumn = props => {
    return (
        <section className='RightColumn'>
            {props.children}
        </section>
    )
};

export default RightColumn;
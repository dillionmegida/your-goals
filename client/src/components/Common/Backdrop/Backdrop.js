import React from 'react';
import './Backdrop.css';

let Backdrop = props => (
    <section onClick={props.BackdropClicked} className='Backdrop'>
    </section>
);

export default Backdrop;
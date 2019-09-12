import React from 'react';
import './LeftColumn.css';


import NavLinks from '../../Nav/NavLinks';

let LeftColumn = props => {
    return (
        <section className='LeftColumn'>
            <section className='NavlinksSection'>
                <NavLinks />
            </section>
        </section>
    )
}

export default LeftColumn;
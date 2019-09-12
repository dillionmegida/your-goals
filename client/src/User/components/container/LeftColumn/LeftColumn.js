import React from 'react';
import './LeftColumn.css';

import Logo from '../../../../components/Brand/Brand';

import Dp from '../../Common/Dp';
import { name } from '../../Common/Info';

import NavLinks from '../../Nav/NavLinks';

let LeftColumn = props => {
    return (
        <section className='LeftColumn'>
            <Logo color='var(--color4)'/>
            <Dp Circle DivHeight='70px' DivWidth='70px' />
            <p className='UserFullname'>{name}</p>

            <section className='NavlinksSection'>
                <NavLinks />
            </section>
        </section>
    )
}

export default LeftColumn;
import React from 'react';
import './TopHeader.css';

import { Link } from 'react-router-dom';

import Logo from '../../../../components/Brand/Brand';
import Dp from '../../common/Dp';

let TopHeader = props => {
	return (
		<header className='TopHeader'>
			<Logo color='var(--color1)'/>
			<section className='UserSection' title='Click for options'>
				<Dp Circle DivHeight='40px' DivWidth='40px' />
				<i className='Caret fa fa-caret-down'></i>
			</section>
		</header>
	)
};

export default TopHeader;
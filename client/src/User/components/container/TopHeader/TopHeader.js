import React from 'react';
import './TopHeader.css';

import { Link } from 'react-router-dom';

import Logo from '../../../../components/Brand/Brand';
import Dp from '../../common/Dp';

import { FullName } from '../../common/Info';

class TopHeader extends React.Component  {

	state={
		UserDropdown: false
	}

	showDropDown = () => {
		this.setState(prevState => ({
			UserDropdown: !prevState.UserDropdown
		}))
	}

	render() {
		return (
			<header className='TopHeader'>
				<Logo color='var(--color1)'/>
				<section onClick={this.showDropDown} className='UserSection' title='Click for options'>
					<Dp Circle DivHeight='40px' DivWidth='40px' />
					<i className='Caret fa fa-caret-down'></i>
				</section>
				{this.state.UserDropdown ?
					<div className='UserDropdown'>
						<ul>
							<li className='fullname'>{FullName}</li>
							<li>
								<a href='#'><i className='fa fa-cog'></i>&nbsp;&nbsp;&nbsp;&nbsp;Settings</a>
							</li>	
							<li>
								<a href='#'><i className='fa fa-close'></i>&nbsp;&nbsp;&nbsp;&nbsp;Log Out</a>
							</li>
						</ul>	
					</div>
					:
					null
				}
				
			</header>
		)
	}
};

export default TopHeader;
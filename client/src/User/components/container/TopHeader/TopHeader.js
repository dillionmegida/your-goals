import React from 'react';
import './TopHeader.css';

import { Link } from 'react-router-dom';

import Logo from '../../../../components/Brand/Brand';
import Dp from '../../Common/Dp';

import { FullName } from '../../Common/Info';

class TopHeader extends React.Component {

  state = {
    UserDropdown: false
  }

  showDropDown = () => {
    this.setState( prevState => ( {
      UserDropdown: !prevState.UserDropdown
    } ) )
  }

  render() {
    return (
      <header className='TopHeader'>
        <Logo color='var(--color1)' />
        <button onClick={this.showDropDown} className='UserSection' title='Click for options' aria-haspopup="true">
          <Dp Circle DivHeight='40px' DivWidth='40px' />
          <i className='Caret fa fa-caret-down'></i>
        </button>
        {this.state.UserDropdown ?
          <div className='UserDropdown'>
            <ul>
              <li className='fullname'>{FullName}</li>
              <li>
                <Link href='#'><i className='fa fa-cog'></i>&nbsp;&nbsp;&nbsp;&nbsp;Settings</Link>
              </li>
              <li>
                <Link href='#'><i className='fa fa-close'></i>&nbsp;&nbsp;&nbsp;&nbsp;Log Out</Link>
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
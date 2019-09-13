import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import Button from '@material-ui/core/Button';

require( './NavLinks.css' );

let navLinks = props => (
  <nav className='TopNav'>
    <ul>
      <div className='leftNavLinks'>
        {props.UserLoggedIn ?
          <React.Fragment>
            <NavLink linkTo='#' nav='Hey' />
            <NavLink linkTo='#' nav='Hey' />
          </React.Fragment>
          :
          <React.Fragment>
            <NavLink linkTo='#' nav='Leaderboard' />
            <NavLink linkTo='#Testimonials' nav='Testomonials' />
          </React.Fragment>
        }

        {/*<NavLink linkTo='#' nav='Leaderboard'/>
				<NavLink linkTo='#Testimonials' nav='Testomonials'/> */}
      </div>

      {props.children}

      <div className='rightNavLinks'>
        {props.UserLoggedIn ?
          <React.Fragment>
            <NavLink linkTo='#' nav='Hey' />
            <div className='TopDp'>
              <div>
                <img alt="profile display" src='data:image/jpeg;base64,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' />
              </div>
            </div>

          </React.Fragment>
          :
          <React.Fragment>
            <NavLink linkTo='#' nav='About' />
            <NavLink linkTo='#Testimonials' nav='Contact' />
          </React.Fragment>
        }

        {/* <NavLink linkTo='#' nav='About'/>
				<NavLink linkTo='#' nav='Contact'/> */}
      </div>
      <div className='hamburger'>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </ul>
  </nav>
);

export default navLinks;
import React from 'react';
import { Link } from 'react-router-dom';

require( './Brand.css' );

export default () => (
  <React.Fragment>
    <Link to='/' className='Brand'>
      <h3>YourGoals.com</h3>
    </Link>
  </React.Fragment>
)
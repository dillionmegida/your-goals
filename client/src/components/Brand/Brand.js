import React from 'react';
import { Link } from 'react-router-dom';

require( './Brand.css' );

export default props => (
  <React.Fragment>
    <Link to='/' className='Brand' style={{color: props.color}}>
      <h3>YourGoals</h3>
    </Link>
  </React.Fragment>
)
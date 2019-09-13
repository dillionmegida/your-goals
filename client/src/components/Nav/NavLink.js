import React from 'react';
import { Link } from 'react-router-dom';

let navLink = props => (
  <li>
    <Link href={props.linkTo}>
      {props.nav}
    </Link>
  </li>
);

export default navLink;
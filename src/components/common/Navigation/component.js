'use strict';

import React from 'react';
import { Link } from 'react-router';

require('./styles.scss');

class Navigation extends React.Component {
  render () {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    );
  }
}
Navigation.displayName = "Navigation";

export default Navigation;

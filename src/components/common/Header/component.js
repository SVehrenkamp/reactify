'use strict';

import React from 'react';

//Components
import MiniCart from '../../cart/MiniCart/component';

//include styles
require('./styles.scss');
const logo = require('../../../images/logo.svg');

class Header extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    return;
  }
  componentDidMount(){
    return;
  }
  componentWillUnmount(){
    return;
  }
  render () {
    return (
      <div className="Header">
        <img className="Header--logo" src={logo} />
        <MiniCart className="u-pull-right" cart={this.props.cart} />
      </div>
    );
  }
}

Header.displayName = "Header";
Header.defaultProps = {};

export default Header;

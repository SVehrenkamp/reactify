'use strict';

import React from 'react';

//Components
import MiniCart from '../../cart/MiniCart/component';

//include styles
require('./styles.scss');
const logo = require('../../../images/logo.svg');

class Header extends React.Component {
  goBack() {
    this.context.router.push('/');
  }
  showBackButton() {
    const { routes } = this.props;
    const currentRoute = routes[routes.length-1];
    if (currentRoute.path !== '/') {
      return (
        <i onClick={this.goBack.bind(this)} className="fa fa-angle-left"></i>
      );
    }
  }
  render () {
    return (
      <div className="Header">
        {this.showBackButton()}
        <img className="Header--logo" src={logo} />
        <MiniCart className="u-pull-right" cart={this.props.cart} />
      </div>
    );
  }
}

Header.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default Header;

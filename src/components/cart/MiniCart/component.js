'use strict';

import React from 'react';

//include styles
require('./styles.scss');

class MiniCart extends React.Component {
  
  render () {
    const cartTotal = this.props.cart.cartTotal || '0.00';
    return (
      <div className={this.props.className + ' MiniCart'}>
        <div>
          <i className="fa fa-shopping-basket"></i>
          <p>${cartTotal}</p>
        </div>
      </div>
    );
  }
}

export default MiniCart;

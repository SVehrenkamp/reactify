'use strict';

import React from 'react';

//include styles
require('./styles.scss');

class CartSummary extends React.Component {
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
    const totalPrice = this.props.cart.cartTotal || '0.00';

    return (
      <div className="CartSummary">
      </div>
    );
  }
}

CartSummary.displayName = "Cart-Summary";
CartSummary.defaultProps = {};

export default CartSummary;

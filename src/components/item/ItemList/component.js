'use strict';

import React from 'react';
import Utils from '../../../utils/cart';
import ItemCard from '../ItemCard/component';

//include styles
require('./styles.scss');

class ItemList extends React.Component {
  updateCart(item, e) {
    const { cartItems } = this.props.cart;
    Utils.updateCart(cartItems, item, e);
  }
  sendActionWithProps(item, e) {
    console.log(this.props.action);
    this.props.action(item, e)
  }
  render () {
    const { items } = this.props;
    return (
      <div className="ItemList">
        {items.map( (item, i) => {
          return (
            <ItemCard onClick={this.sendActionWithProps.bind(this)} cart={this.props.cart} action={this.updateCart.bind(this)} item={item}/>
          );
        })}
      </div>
    );
  }
}

export default ItemList;

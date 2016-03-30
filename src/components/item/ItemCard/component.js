'use strict';

import React from 'react';
import Button from '../../common/Button/component';

//include styles
require('./styles.scss');

class ItemCard extends React.Component {

  sendActionWithProps(e) {
    this.props.action(this.props.item, e)
  }
  transitionToPDP(e) {
    const item = this.props.item;
    this.props.onClick(item, e);
  }
  formatPrice(){
    let item  = this.props.item.onlineInfo;
    if (item.price) {
      return item.price.currentPriceText
    } else {
      return item.priceRange.currentPriceRangeText;
    }

  }
  render () {
    const item = this.props.item;
    var _item;
    if (this.props.cart.cartItems){
      _item = this.props.cart.cartItems.filter(function(cartItem){
        return cartItem.tcin === item.tcin || cartItem.parentTcin === item.tcin || cartItem.tcin === item.parentTcin;
      })[0];
    }
    let buttonState = _item ? "Remove From Cart" : "Add To Cart";
    let buttonClass = buttonState === "Remove From Cart" ? 'item-in-cart' : '' ;

    return (
      <div onClick={this.transitionToPDP.bind(this)} className="itemCard three columns">
        <img src={this.props.item.images.primaryUri} />
        <p className="itemCard--price">{this.formatPrice()}</p>
        <Button className={buttonClass} onClick={this.sendActionWithProps.bind(this)} item={item}>{buttonState}</Button>
      </div>

    );
  }
}

export default ItemCard;


import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from '../../common/Button/component';

//Styles
require('./styles.scss');

class ItemDetails extends Component {

  updateCart(e) {
    const { item } = this.props;
    e.preventDefault();
    e.stopPropagation();

    const cartItems = this.props.cart.cartItems;

    var _item;
    if (cartItems){
      _item = cartItems.filter(function(cartItem){
        return cartItem.tcin === item.tcin || cartItem.parentTcin === item.tcin || cartItem.tcin === item.parentTcin;
      })[0];
    }
    const buttonState = _item ? "Remove From Cart" : "Add To Cart";

    switch (buttonState) {
      case "Remove From Cart": {
        this.props.actions.removeFromCart(item);
      }break;
      case "Add To Cart": {
        this.props.actions.addToCart(item);
      }break;
    }
  }
  render() {
    console.log('ITEMD', this.props);
    const {item, cart } = this.props;
    var _item;
    if (this.props.cart.cartItems){
      _item = this.props.cart.cartItems.filter(function(cartItem){
        return cartItem.tcin === item.tcin || cartItem.parentTcin === item.tcin || cartItem.tcin === item.parentTcin;
      })[0];
    }
    const buttonState = _item ? "Remove From Cart" : "Add To Cart";
    const buttonClass = buttonState === "Remove From Cart" ? 'item-in-cart' : '' ;

    return (
      <div className="ItemDetails">
        <img src={item.images.primaryUri} />
        <h2>{item.title}</h2>
        <p className="ItemDetails--price">{item.onlineInfo.price.currentPriceText}</p>
        <Button className={buttonClass} onClick={this.updateCart.bind(this)} item={item}>{buttonState}</Button>
      </div>
    );
  }
}


export default ItemDetails;


import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Utils from '../../../utils/cart';

import Button from '../../common/Button/component';

//Styles
require('./styles.scss');

class ItemDetails extends Component {

  updateCart(e) {
    const { cart, item } = this.props;
    Utils.updateCart(cart.cartItems, item, e);
  }
  render() {
    const { cart, item } = this.props;
    const { buttonState, buttonClass } = Utils.setButtonState(cart, item);

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

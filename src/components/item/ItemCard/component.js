'use strict';

import React from 'react';
import Button from 'components/common/Button/component';
import Utils from 'utils/cart';

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
  render () {
    const { cart, item } = this.props;
    const { buttonState, buttonClass } = Utils.setButtonState(cart, item);
    const formattedPrice = Utils.formatPrice(item);

    return (
      <div onClick={this.transitionToPDP.bind(this)} className="itemCard three columns">
        <img src={this.props.item.images.primaryUri} />
        <p className="itemCard--price">{formattedPrice}</p>
        <Button className={buttonClass} onClick={this.sendActionWithProps.bind(this)} item={item}>{buttonState}</Button>
      </div>

    );
  }
}

export default ItemCard;

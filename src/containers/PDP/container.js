
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const api = require('../../apis/products');

import Actions from '../../actions/actions';
import Button from '../../components/common/Button/component';

class PDPContainer extends Component {
  componentWillMount(){
    const tcin = this.props.routeParams.splat.split('/-/A-')[1];
    api.getProduct(tcin);
  }
  componentDidMount(){
  }
  updateCart(e) {
    const { item } = this.props;
    e.preventDefault();
    e.stopPropagation();

    let cartItems = this.props.cart.cartItems;

    var _item;
    if (cartItems){
      _item = cartItems.filter(function(cartItem){
        return cartItem.tcin === item.tcin || cartItem.parentTcin === item.tcin || cartItem.tcin === item.parentTcin;
      })[0];
    }
    let buttonState = _item ? "Remove From Cart" : "Add To Cart";

    switch (buttonState) {
      case "Remove From Cart": {
        console.log('REMOVING FROM CART');
        this.props.actions.removeFromCart(item);
      }break;
      case "Add To Cart": {
        console.log('ADDING TO CART');
        this.props.actions.addToCart(item);
      }break;
    }
  }
  render() {
    const { actions, item, cart } = this.props;
    var _item;
    if (this.props.cart.cartItems){
      _item = this.props.cart.cartItems.filter(function(cartItem){
        return cartItem.tcin === item.tcin || cartItem.parentTcin === item.tcin || cartItem.tcin === item.parentTcin;
      })[0];
    }

    let buttonState = _item ? "Remove From Cart" : "Add To Cart";
    let buttonClass = buttonState === "Remove From Cart" ? 'item-in-cart' : '' ;

    return (
      <div className="PDP">
        <h2>{item.title}</h2>
        <Button className={buttonClass} onClick={this.updateCart.bind(this)} item={item}>{buttonState}</Button>


      </div>
    );
  }
}

PDPContainer.propTypes = {
  actions: PropTypes.object.isRequired
};
PDPContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    cart: state.cart,
    item: state.api.pdp || {}
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, Actions.cart, Actions.api)
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(PDPContainer);

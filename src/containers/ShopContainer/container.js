
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../../actions/actions';
import Button from '../../components/common/Button/component';

require('./styles.scss');

class ShopContainerContainer extends Component {
  updateCart(e) {
    e.preventDefault();
    e.stopPropagation();

    let cartItems = this.props.cart.cartItems;

    const item = this.props.items.filter( (_item) => {
      return _item.tcin === +this.props.routeParams.tcin;
    })[0];

    var _item;
    if (cartItems){
      _item = cartItems.filter(function(cartItem){
        //console.log(cartItem.tcin);
        return cartItem.tcin === item.tcin;
      })[0];
    }
    //console.log("ITEM IN CART", _item);
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
    const {actions} = this.props;
    console.log('PDP', this);
    const item = this.props.items.filter( (_item) => {
      return _item.tcin === +this.props.routeParams.tcin;
    })[0];

    var _item;
    if (this.props.cart.cartItems){
      _item = this.props.cart.cartItems.filter(function(cartItem){
        //console.log(cartItem.tcin);
        return cartItem.tcin === item.tcin;
      })[0];
    }
    //console.log("ITEM IN CART", _item);
    let buttonState = _item ? "Remove From Cart" : "Add To Cart";
    let buttonClass = buttonState === "Remove From Cart" ? 'item-in-cart' : '' ;


    return (
      <div className="ShopContainer">
        <img src={item.image} />
        <h2>{item.title}</h2>
        <p>{item.price}</p>
          <Button className={buttonClass} onClick={this.updateCart.bind(this)} item={item}>{buttonState}</Button>
      </div>
    );
  }
}

ShopContainerContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

ShopContainerContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    cart: state.cart,
    items: state.api.items
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actionMap = {actions: bindActionCreators(Actions.cart, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopContainerContainer);

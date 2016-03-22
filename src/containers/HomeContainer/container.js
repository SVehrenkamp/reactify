import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Hero from '../../components/common/Hero/component';
import Actions from '../../actions/actions';
import Button from '../../components/common/Button/component';

require('./styles.scss');

let HeroImage = require('../../images/hero.jpg');
const item = {tcin: 12345, price: "$99.95", qty: 1 };

class HomeContainer extends Component {
  updateCart() {
    let cartItems = this.props.cart.cartItems;
    let buttonState = cartItems && cartItems.length > 0 ? "Remove From Cart" : "Add To Cart";
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
    console.log("COMPONENT STATE::", this.props.cart);
    const {actions} = this.props;
    let cartItems = this.props.cart.cartItems;
    let buttonState = cartItems && cartItems.length > 0 ? "Remove From Cart" : "Add To Cart";
    return (
      <div className="Home">
        <h1>Home</h1>
        <Hero image={HeroImage} title="Reactivity is here..."/>
        <h2>{this.props.cart.cartQty || 0}</h2>
        <Button onClick={this.updateCart.bind(this)} item={item}>{buttonState}</Button>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    cart: state.cart
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actionMap = {actions: bindActionCreators(Actions.cart, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

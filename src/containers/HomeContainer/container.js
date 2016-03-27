import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Hero from '../../components/common/Hero/component';
import Actions from '../../actions/actions';
import ItemCard from '../../components/item/ItemCard/component';

require('./styles.scss');

let HeroImage = require('../../images/hero.jpg');
const items = [
  {tcin: 12345, price: "99.95", qty: 1, image: 'http://target.scene7.com/is/image/Target/21533465' },
  {tcin: 67890, price: "9.95", qty: 1, image: 'http://target.scene7.com/is/image/Target/21530747' },
  {tcin: 10123, price: "29.95", qty: 1, image: 'http://target.scene7.com/is/image/Target/21533474' },
  {tcin: 10456, price: "3.95", qty: 1, image: 'http://target.scene7.com/is/image/Target/18852352' }
];


class HomeContainer extends Component {
  updateCart(item) {
    console.log("ITEM =>", item);
    let cartItems = this.props.cart.cartItems;

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
    console.log("COMPONENT STATE::", this.props.cart);
    const {actions} = this.props;
    return (
      <div className="Home">
        <h1>Home</h1>
        <Hero image={HeroImage} title="Reactivity is here..."/>
        <div className="row">
          {items.map( (item, i) => {
            return (
              <ItemCard cart={this.props.cart} action={this.updateCart.bind(this)} item={item}/>
            );
          })}
        </div>
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

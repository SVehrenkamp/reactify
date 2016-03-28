import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
const api = require('../../apis/products');

import Hero from '../../components/common/Hero/component';
import Actions from '../../actions/actions';

import ItemCard from '../../components/item/ItemCard/component';

require('./styles.scss');

let HeroImage = require('../../images/logo.svg');


class HomeContainer extends Component {
  componentWillMount(){
    api.getProducts();
  }
  updateCart(item, e) {
    e.preventDefault();
    e.stopPropagation();

    let cartItems = this.props.cart.cartItems;

    var _item;
    if (cartItems){
      _item = cartItems.filter(function(cartItem){
        return cartItem.tcin === item.tcin;
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
  goToPDP(item, e) {
    const uri = item.targetDotComUri.split('/p/')[1];
    this.context.router.push('/p/'+uri);
  }
  search(item, e) {
    this.context.router.push('/s?searchTerm=shirts&limit=20');
  }
  goToPLP() {
    return
  }
  render() {
    console.log("COMPONENT STATE::", this);
    const {actions} = this.props;
    const items = this.props.items;
    return (
      <div className="Home">
        <Hero image={HeroImage} />
        <div className="row">
          {items.map( (item, i) => {
            return (
              <ItemCard onClick={this.goToPDP.bind(this)} cart={this.props.cart} action={this.updateCart.bind(this)} item={item}/>
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
HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    cart: state.cart,
    items: state.api.items || []
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, Actions.cart, Actions.api)
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

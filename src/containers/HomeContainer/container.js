import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import api from '../../apis/products';

import Actions from '../../actions/actions';

import ItemCard from '../../components/item/ItemCard/component';
import Speech from '../../components/common/Speech/component';

require('./styles.scss');
const spinner = require('../../images/spinner.gif');


class HomeContainer extends Component {

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
      case "Remove From Cart": {;
        this.props.actions.removeFromCart(item);
      }break;
      case "Add To Cart": {
        this.props.actions.addToCart(item);
      }break;
    }
  }
  goToPDP(item, e) {
    const uri = item.targetDotComUri.split('/p/')[1];
    this.context.router.push('/p/'+uri);
  }
  render() {
    const { actions, isFetching, items } = this.props;
    const { searchTerm } = this.props.speech;

    const loading = isFetching ? <img className="spinner" src={spinner} /> : '';
    const searchHeader = searchTerm ? <h2>search results for "{searchTerm}"</h2> : '';

    return (
      <div className="Home">
        <h2>hi.</h2>
        <Speech />
        <div className="row">
          <div>
            {loading}
            {searchHeader}
            {items.map( (item, i) => {
              return (
                <ItemCard onClick={this.goToPDP.bind(this)} cart={this.props.cart} action={this.updateCart.bind(this)} item={item}/>
              );
            })}
          </div>
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
    items: state.products.items || [],
    isFetching: state.products.isFetching || false,
    speech:state.speech
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, Actions.cart, Actions.api)
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);


import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
const api = require('../../apis/products');

import Actions from '../../actions/actions';
import Button from '../../components/common/Button/component';
import ItemDetails from '../../components/item/ItemDetails/component';

//Styles
require('./styles.scss');

class PDPContainer extends Component {
  componentWillMount(){
    const tcin = this.props.routeParams.splat.split('/-/A-')[1];
    api.getProduct(tcin);
  }
  componentDidMount(){
  }
  render() {
    return (
      <div className="PDP">
        <ItemDetails cart={this.props.cart} item={this.props.item} />
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
    item: state.products.pdp || {}
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, Actions.cart, Actions.api)
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(PDPContainer);

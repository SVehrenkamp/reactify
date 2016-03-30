
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import api from '../../apis/products';

import Actions from '../../actions/actions';
import Button from '../../components/common/Button/component';
import ItemDetails from '../../components/item/ItemDetails/component';

//Styles
require('./styles.scss');
const spinner = require('../../images/spinner.gif');

class PDPContainer extends Component {
  componentWillMount(){
    const tcin = this.props.routeParams.splat.split('/-/A-')[1];
    api.getProduct(tcin);
  }
  componentDidMount(){
  }
  content() {
    if (this.props.item) {
      return <ItemDetails cart={this.props.cart} item={this.props.item} />
    } else {
      return <img src={spinner} />
    }
  }
  render() {
    return (
      <div className="PDP">
        {this.content()}
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

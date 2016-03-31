
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import api from '../../apis/products';

import Actions from '../../actions/actions';
import Button from '../../components/common/Button/component';
import ItemDetails from '../../components/item/ItemDetails/component';
import LoadingSpinner from '../../components/common/LoadingSpinner/component';

//Styles
require('./styles.scss');

class PDPContainer extends Component {

  content() {
    const { cart, item, actions, isFetching } = this.props;
    if (!isFetching) {
      return <ItemDetails cart={cart} item={item} actions={actions} isFetching={isFetching} />
    } else {
      return <LoadingSpinner text="loading..."/>;
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
    item: state.products.pdp || {},
    isFetching: state.products.isFetching
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, Actions.cart, Actions.api)
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(PDPContainer);

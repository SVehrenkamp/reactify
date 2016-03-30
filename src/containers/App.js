import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

//Components
import Header from '../components/common/Header/component';

//Actions
import Actions from '../actions/actions';

require('styles/global/app.scss');

class App extends Component {
  render() {
    const {actions, cart, routeParams} = this.props;
    return (
      <div className="wrapper">
        <div className="row">
          <Header cart={cart} route={routeParams}/>
        </div>
        <div id="wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    user: state.user,
    cart: state.cart,
    items: state.products.items
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Actions;
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Navigation from '../components/common/Navigation/component';
import Actions from '../actions/actions';

require('styles/global/app.scss');

class App extends Component {
  render() {
    const {actions} = this.props;
    return (
      <div className="wrapper">
        <Navigation />
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
    user: state.user
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Actions;
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

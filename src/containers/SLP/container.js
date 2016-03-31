
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import api from 'apis/products';

import Actions from 'actions/actions';

class SLPContainer extends Component {

  render() {
    const {actions} = this.props;
    return (
      <div className="SLP">
        <h1>SLP</h1>
      </div>
    );
  }
}

SLPContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(SLPContainer);

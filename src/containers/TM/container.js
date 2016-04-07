
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class TMContainer extends Component {
  render() {
    const {actions} = this.props;
    return (
      <div className="TM">
        <h1>TM</h1>
      </div>
    );
  }
}

TMContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(TMContainer);

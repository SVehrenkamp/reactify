
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class UserContainerContainer extends Component {
  render() {
    const {actions} = this.props;
    return (
      <div className="UserContainer">
        <h1>UserContainer</h1>
      </div>
    );
  }
}

UserContainerContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserContainerContainer);

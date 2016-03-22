
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

require('./styles.scss');

class AboutContainerContainer extends Component {
  render() {
    const {actions} = this.props;
    return (
      <div className="AboutContainer">
        <h1>AboutContainer</h1>
      </div>
    );
  }
}

AboutContainerContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainerContainer);

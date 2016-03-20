module.exports = function (name){

  return (
`
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ${name}Container extends Component {
  render() {
    const {actions} = this.props;
    return (
      <div className="${name}">
        <h1>${name}</h1>
      </div>
    );
  }
}

${name}Container.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(${name}Container);
`);
}

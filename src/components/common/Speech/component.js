'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Actions from '../../../actions/actions';

import Input from '../Input/component';
import Button from '../Button/component';

//include styles
require('./styles.scss');

class Speech extends React.Component {
  constructor() {
    super();
  }
  componentWillMount() {
    return;
  }
  componentDidMount(){
    return;
  }
  componentWillUnmount(){
    return;
  }
  voiceSearch(){
    console.log('SEARCHING....');
  }
  render () {
    console.log('SPEECH', this);
    return (
      <div className="Speech">
        <Input placeholder="search" refs="search-box" className="u-full-width" />
        <Button className="voiceSearch" onClick={this.voiceSearch.bind(this)}>
          <i className={'fa ' + this.props.microphoneIsActive }></i>
        </Button>
      </div>
    );
  }
}

Speech.propTypes = {
  actions: PropTypes.object.isRequired
};
Speech.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    cart: state.cart,
    items: state.products.items || []
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, Actions.cart, Actions.api)
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Speech);

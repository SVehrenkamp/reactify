'use strict';

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import speech from '../../../apis/speech';
import api from '../../../apis/products';

import Actions from '../../../actions/actions';

import Input from '../Input/component';
import Button from '../Button/component';

//include styles
require('./styles.scss');
const spinner = require('../../../images/spinner.gif');

class Speech extends React.Component {

  componentWillMount() {
    speech.initWebSpeech();
    return;
  }
  componentDidUpdate(){
    const { isVoiceActive, searchTerm } = this.props.speech;

    (isVoiceActive) ? speech.startRecording() : speech.stopRecording();
    if (searchTerm) this.search();
  }
  voiceSearch(){
    this.props.actions.voiceSearch();
  }
  search(){
    const { searchTerm } = this.props.speech;
    api.getProducts(searchTerm);
  }
  render () {
    const { isVoiceActive } = this.props.speech;

    const voiceState = isVoiceActive || false;
    const iconState = voiceState ? 'fa-microphone-slash' : 'fa-microphone';
    const isRecording = voiceState ? 'recording' : '';
    const placeHolderText = voiceState ? 'listening...' : 'whatcha looking for?';

    return (
      <div className="Speech">
        <Input placeholder={placeHolderText} refs="search-box" className="u-full-width" />
        <Button className="voiceSearch" onClick={this.voiceSearch.bind(this)}>
          <div className={'recording-btn ' + isRecording } />
          <i className={'fa ' + iconState }></i>
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
    speech: state.speech
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, Actions.cart, Actions.api)
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Speech);

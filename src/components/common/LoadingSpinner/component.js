'use strict';

import React from 'react';

//include styles
require('./styles.scss');
const spinner = require('images/spinner.gif');

class LoadingSpinner extends React.Component {
  render () {
    return (
      <div className="LoadingSpinner">
        <img className="LoadingSpinner--spinner" src={spinner} />
        <p className="LoadingSpinner--text">{this.props.text}</p>
      </div>
    );
  }
}

export default LoadingSpinner;

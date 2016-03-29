'use strict';

import React from 'react';

//include styles
require('./styles.scss');

class LoadingSpinner extends React.Component {
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
  render () {
    return (
      <div className="LoadingSpinner">
        <svg xmlns="http://www.w3.org/2000/svg" width="120px" height="120px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-ring-alt">
          <rect x="0" y="0" width="100" height="100" fill="none" className="bk"/>
          <circle cx="50" cy="50" r="40" stroke="#cec9c9" fill="none" strokeWidth="10" strokeLinecap="round"/>
          <circle cx="50" cy="50" r="40" stroke="#cc0000" fill="none" strokeWidth="6" strokeLinecap="round">
            <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502"/>
            <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4"/>
          </circle>
        </svg>
      </div>
    );
  }
}

LoadingSpinner.displayName = "LoadingSpinner";
LoadingSpinner.defaultProps = {};

export default LoadingSpinner;

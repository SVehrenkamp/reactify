'use strict';

import React from 'react';

//include styles
require('./styles.scss');

class Input extends React.Component {
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
      <div className="Input">
        {this.props.children}
      </div>
    );
  }
}

Input.displayName = "Input";
Input.defaultProps = {};

export default Input;

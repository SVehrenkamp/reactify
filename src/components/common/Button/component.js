'use strict';

import React from 'react';

//include styles
require('./styles.scss');

class Button extends React.Component {
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
      <button
        className={'Button ' + this.props.className}
        onClick={this.props.onClick}
        >
        {this.props.children}
      </button>
    );
  }
}

Button.displayName = "Button";
Button.defaultProps = {};

export default Button;

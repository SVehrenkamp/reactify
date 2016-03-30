'use strict';

import React from 'react';

//include styles
require('./styles.scss');

class Button extends React.Component {
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

export default Button;

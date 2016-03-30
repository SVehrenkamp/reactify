'use strict';

import React from 'react';

//include styles
require('./styles.scss');

class Input extends React.Component {

  render () {
    return (
      <input type="text" className={'search-input ' + this.props.className} refs={this.props.refs} placeholder={this.props.placeholder}  />
    );
  }
}

export default Input;

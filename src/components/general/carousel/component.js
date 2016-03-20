'use strict';

import React from 'react';

//include styles
require('./styles.scss');

class carousel extends React.Component {
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
      <div className="carousel">
        {this.props.children}
      </div>
    );
  }
}

carousel.displayName = "carousel";
carousel.defaultProps = {};

export default carousel;

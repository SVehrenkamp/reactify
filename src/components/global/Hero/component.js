'use strict';

import React from 'react';

require('./styles.scss');

class Hero extends React.Component {
  render () {
    return (
      <div className="Hero">
        <img src={this.props.image} />
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}
Hero.displayName = "Hero";

export default Hero;

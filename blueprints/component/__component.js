module.exports = function (name){

  return (
`'use strict';

import React from 'react';

//include styles
require('./styles.scss');

class ${name} extends React.Component {
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
      <div className="${name}">
        {this.props.children}
      </div>
    );
  }
}

${name}.displayName = "${name}";
${name}.defaultProps = {};

export default ${name};
`);

}

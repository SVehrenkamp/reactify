import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Hero from '../components/global/Hero/component';

let HeroImage = require('../images/hero.jpg');

class HomeContainer extends Component {
  render() {
    const {actions} = this.props;
    return (
      <div className="Home">
        <h1>Home</h1>
        <Hero image={HeroImage} title="Reactivity is here..."/>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    user: state.user
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {signIn: require('../actions/user/sign_in') };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

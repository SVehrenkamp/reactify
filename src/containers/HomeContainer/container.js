import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
//Actions
import Actions from '../../actions/actions';
//Utils
import Utils from '../../utils/cart';
//Apis
import api from '../../apis/products';
//Components
import ItemList from '../../components/item/ItemList/component';
import Speech from '../../components/common/Speech/component';
import LoadingSpinner from '../../components/common/LoadingSpinner/component';

require('./styles.scss');


class HomeContainer extends Component {

  goToPDP(item, e) {
    const uri = item.targetDotComUri.split('/p/')[1];
    const tcin = uri.split('/-/A-')[1];

    this.context.router.push('/p/'+uri);
    api.getProduct(tcin);
  }
  searchFeedback(){
    const { actions, isFetching, items, cart } = this.props;
    const { searchTerm } = this.props.speech;

    if (searchTerm) {
      if (isFetching) {
        return (<LoadingSpinner text="searching..."/>);
      } else {
        return (
          <div>
            <h2>search results for "{searchTerm}"</h2>
            <ItemList action={this.goToPDP.bind(this)} cart={cart} items={items}/>
          </div>
        );
      }
    }

  }
  render() {
    const { actions, isFetching, items } = this.props;

    return (
      <div className="Home">
        <h2>hi.</h2>
        <Speech />
        <div className="row">
          {this.searchFeedback()}
        </div>
      </div>
    );
  }
}

HomeContainer.propTypes = {
  actions: PropTypes.object.isRequired
};
HomeContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    cart: state.cart,
    items: state.products.items || [],
    isFetching: state.products.isFetching,
    speech:state.speech
  };
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, Actions.cart, Actions.api)
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

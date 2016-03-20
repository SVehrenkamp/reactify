//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

//Stores
import configureStore from './stores';
const store = configureStore();

//Component Containers
import App from './containers/App';
import HomeContainer from './containers/HomeContainer';
import AboutContainer from './containers/AboutContainer';
import ShopContainer from './containers/ShopContainer';

//Styles
require("skeleton-css");

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomeContainer} />
        <Route path="/about" component={AboutContainer} />
        <Route path="/shop" component={ShopContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

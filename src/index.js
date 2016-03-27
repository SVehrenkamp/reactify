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
import HomeContainer from './containers/HomeContainer/container';
import AboutContainer from './containers/AboutContainer/container';
import ShopContainer from './containers/ShopContainer/container';

//Styles
require("skeleton-css");
require("font-awesome-webpack");

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

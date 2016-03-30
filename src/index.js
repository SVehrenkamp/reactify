//Dependencies
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

//Stores
import store from './stores';
//const store = configureStore();

//Component Containers
import App from './containers/App';
import HomeContainer from './containers/HomeContainer/container';
import PLPContainer from './containers/PLP/container';
import SLPContainer from './containers/SLP/container';
import PDPContainer from './containers/PDP/container';

//Styles
require("skeleton-css");
require("font-awesome-webpack");

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={HomeContainer} />
        <Route path="/s" component={SLPContainer} />
        <Route path="/c/*" component={PLPContainer} />
        <Route path="/p/*" component={PDPContainer} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

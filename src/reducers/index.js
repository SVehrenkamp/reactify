import { combineReducers } from 'redux';

const reducers = {
  cart: require('../reducers/cart.js'),
  api: require('../reducers/api.js')
};

module.exports = combineReducers(reducers);

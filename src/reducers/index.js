import { combineReducers } from 'redux';

const reducers = {
  cart: require('../reducers/cart.js')
};

module.exports = combineReducers(reducers);

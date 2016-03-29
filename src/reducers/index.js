import { combineReducers } from 'redux';

const reducers = {
  cart: require('../reducers/cart.js'),
  products: require('../reducers/products.js')
};

module.exports = combineReducers(reducers);

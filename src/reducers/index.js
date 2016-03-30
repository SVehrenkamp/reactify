import { combineReducers } from 'redux';

const reducers = {
  cart: require('../reducers/cart.js'),
  products: require('../reducers/products.js'),
  speech: require('../reducers/speech.js')
};

module.exports = combineReducers(reducers);

'use strict';

//Include Actions
const ADD_TO_CART = require('./cart/ADD_TO_CART');
const REMOVE_FROM_CART = require('./cart/REMOVE_FROM_CART');
const INCREMENT_QTY = require('./cart/INCREMENT_QTY');
const DECREMENT_QTY = require('./cart/DECREMENT_QTY');

module.exports = {
  cart: {
    addToCart: ADD_TO_CART,
    removeFromCart: REMOVE_FROM_CART,
    incrementQty: INCREMENT_QTY,
    decrementQty: DECREMENT_QTY
  }
};

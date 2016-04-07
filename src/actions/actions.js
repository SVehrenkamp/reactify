'use strict';

//Cart Actions
const ADD_TO_CART = require('./cart/ADD_TO_CART');
const REMOVE_FROM_CART = require('./cart/REMOVE_FROM_CART');
const INCREMENT_QTY = require('./cart/INCREMENT_QTY');
const DECREMENT_QTY = require('./cart/DECREMENT_QTY');

//API Actions
const GET_PRODUCTS = require('./api/GET_PRODUCTS');
const GET_PRODUCT = require('./api/GET_PRODUCT');
const FETCH_DATA = require('./api/FETCH_DATA');
const FETCHING_DATA = require('./api/FETCHING_DATA');
const VOICE_SEARCH = require('./api/VOICE_SEARCH');
const FIND_TEAM_MEMBER = require('./api/FIND_TEAM_MEMBER');


module.exports = {
  cart: {
    addToCart: ADD_TO_CART,
    removeFromCart: REMOVE_FROM_CART,
    incrementQty: INCREMENT_QTY,
    decrementQty: DECREMENT_QTY
  },
  api: {
    getProducts: GET_PRODUCTS,
    getProduct: GET_PRODUCT,
    fetchData: FETCH_DATA,
    voiceSearch: VOICE_SEARCH,
    findTeamMember: FIND_TEAM_MEMBER
  }
};

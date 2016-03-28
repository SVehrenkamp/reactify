
const initialState = {};
const ProductsAPI = require('../apis/products.js');
module.exports = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_PRODUCTS': {
      let nextState = Object.assign({}, state);

      nextState.items = action.data.products;
      return nextState;
    }break;
    case 'GET_PRODUCT': {
      let nextState = Object.assign({}, state);

      nextState.pdp = action.data[0];
      return nextState;
    }break;
    default: {
      return state;
    }
  }
}

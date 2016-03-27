
const initialState = {};
const ProductsAPI = require('../apis/products.js');
module.exports = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_PRODUCTS': {
      const products = ProductsAPI.getProducts();
      let nextState = Object.assign({}, state);

      nextState.items = products;
      console.log('ITEMS', nextState.items);
      return nextState;
    }break;
    case 'GET_PRODUCT': {

    }break;
    default: {
      return state;
    }
  }
}

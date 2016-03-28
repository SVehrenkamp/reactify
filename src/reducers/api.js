
const initialState = {};
const ProductsAPI = require('../apis/products.js');
module.exports = (state = initialState, action) => {

  switch (action.type) {
    case 'GET_PRODUCTS': {
      console.log('CAUGHT BY REDUCER');
      let nextState = Object.assign({}, state);

      nextState.items = action.data.products;
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

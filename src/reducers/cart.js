
const initialState = {};

module.exports = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_CART': {
      let nextState = Object.assign({}, state);
      nextState.cartItems = nextState.cartItems || [];
      nextState.cartQty = nextState.cartQty  || 0;

      nextState.cartItems.unshift(action.data.tcin);
      nextState.cartQty += action.data.qty;
      console.log('Adding ', action.data.qty, ' To Cart ', action.data.tcin);
      return nextState;
    }break;
    case 'REMOVE_FROM_CART': {
      let nextState = Object.assign({}, state);
      nextState.cartItems = nextState.cartItems || [];
      nextState.cartQty = nextState.cartQty  || 0;

      nextState.cartItems.splice(state.cartItems.indexOf(action.data.tcin), 1);
      console.log(nextState.cartItems[0]);
      nextState.cartQty -= action.data.qty;
      console.log('REMOVE_FROM_CART');
      return nextState;
    }break;
    case 'INCREMENT_QTY': {
      let nextState = Object.assign({}, state);
      nextState.cartQty += action.data.qty;
      console.log('Incrementing Quantity by ', action.data.qty);
      return nextState;
    }break;
    case 'DECREMENT_QTY': {
      let nextState = Object.assign({}, state);
      nextState.cartQty  = nextState.cartQty < 1 ? 0 : (nextState.cartQty -= action.data.qty);
      console.log('Decrementing Quantity by ', action.data.qty);
      return nextState;
    }break;

    default: {
      return state;
    }
  }
}

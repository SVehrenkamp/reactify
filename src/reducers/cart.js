
const initialState = {};

module.exports = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_TO_CART': {
      let nextState = Object.assign({}, state);

      //Don't Allow an item with a price range to be added to cart
      const  { onlineInfo } = action.data;

      if (!onlineInfo.price) {
        return nextState;
      } else {
        action.data.price = action.data.onlineInfo.price.currentPrice;

        nextState.cartItems = nextState.cartItems || [];
        nextState.cartQty = nextState.cartQty  || 0;

        nextState.cartItems.unshift(action.data);
        nextState.cartQty += action.data.qty || 1;

        if (nextState.cartItems.length > 1) {
          nextState.cartTotal = nextState.cartItems.reduce(function(a, b){
            return {price: parseFloat(a.price) + parseFloat(b.price)};
          }).price.toFixed(2);

        } else {
          nextState.cartTotal = parseFloat(action.data.price);
        }

        return nextState;
      }
    }break;
    case 'REMOVE_FROM_CART': {

      let nextState = Object.assign({}, state);


      nextState.cartItems = nextState.cartItems || [];
      nextState.cartQty = nextState.cartQty  || 0;

      nextState.cartItems = state.cartItems.filter(function(_item){
        return _item.tcin !== action.data.tcin && _item.tcin !== action.data.parentTcin && _item.parentTcin !== action.data.tcin;
      });

      nextState.cartQty--;

      if (nextState.cartItems.length > 1) {
        nextState.cartTotal = nextState.cartItems.reduce(function(a, b){
          return {price: parseFloat(a.price) + parseFloat(b.price)};
        }).price.toFixed(2);

      } else {
        nextState.cartTotal = nextState.cartItems.length > 0 ? +nextState.cartItems[0].price : '0.00';
      }

      return nextState;
    }break;
    case 'INCREMENT_QTY': {
      let nextState = Object.assign({}, state);
      nextState.cartQty += action.data.qty;
      return nextState;
    }break;
    case 'DECREMENT_QTY': {
      let nextState = Object.assign({}, state);
      nextState.cartQty  = nextState.cartQty < 1 ? 0 : (nextState.cartQty -= action.data.qty);
      return nextState;
    }break;

    default: {
      return state;
    }
  }
}

//Stores
import store from '../stores';

module.exports = {
  updateCart(cart, item, e){
    e.preventDefault();
    e.stopPropagation();

    var _item;
    if (cart){
      _item = cart.filter(function(cartItem){
        return cartItem.tcin === item.tcin || cartItem.parentTcin === item.tcin || cartItem.tcin === item.parentTcin;
      })[0];
    }
    const buttonState = _item ? "Remove From Cart" : "Add To Cart";

    switch (buttonState) {
      case "Remove From Cart": {
        store.dispatch({
          type: 'REMOVE_FROM_CART',
          data: item
        });
      }break;
      case "Add To Cart": {
        store.dispatch({
          type: 'ADD_TO_CART',
          data: item
        });
      }break;
    }
  },
  setButtonState(cart, item){
    var _item;
    if (cart.cartItems){
      _item = cart.cartItems.filter(function(cartItem){
        return cartItem.tcin === item.tcin || cartItem.parentTcin === item.tcin || cartItem.tcin === item.parentTcin;
      })[0];
    }
    const buttonState = _item ? "Remove From Cart" : "Add To Cart";
    const buttonClass = buttonState === "Remove From Cart" ? 'item-in-cart' : '' ;

    return {buttonState: buttonState, buttonClass: buttonClass};
  },
  formatPrice(item){
    if (item.onlineInfo.price) {
      return item.onlineInfo.price.currentPriceText;
    } else {
      return item.onlineInfo.priceRange.currentPriceRangeText;
    }
  }
};

const initialState = {};

module.exports = function(state = initialState, action){

  switch (action.type) {
    case 'SIGN_IN': {
      let nextState = Object.assign({}, state);
      nextState.currentUser = action.data;
      console.log('Signinig in ', action.data);
      return nextState;
    }break;

    default: {
      return state;
    }
  }
}
module.exports = (name) =>{
  return (`
const initialState = {};

module.exports = (state = initialState, action) => {

  switch (action.type) {
    case 'SOME_ACTION': {
      // let nextState = Object.assign({}, state);
      // nextState.currentUser = action.data;
      // console.log('Signinig in ', action.data);
      // return nextState;
    }break;

    default: {
      return state;
    }
  }
}
`);
}

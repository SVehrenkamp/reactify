import {createStore, applyMiddleware} from'redux';
import thunk from 'redux-thunk';
const reducers = require('../reducers');

//module.exports = function(initialState){
  const store = createStore(reducers, applyMiddleware(thunk));
  export default store;
  // if (module.hot) {
  //   module.hot.accept('../reducers', () => {
  //     const nextReducer = require('../reducers')
  //     store.replaceReducer(nextReducer)
  //   })
  // }
  // return store;
// }

import { combineReducers } from 'redux';

const reducers = {
  user: require('../reducers/user.js')
};

module.exports = combineReducers(reducers);

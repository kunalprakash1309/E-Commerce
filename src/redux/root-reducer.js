// actual base reducer represent all the reducer function of code

import { combineReducers } from 'redux';

import userReducer from './user/user.reducer.js';

export default combineReducers({
    user: userReducer
})
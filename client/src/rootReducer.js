import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import navigationSlice from 'features/navigation/navigationSlice';
import authenticationSlice from 'features/authentication/authenticationSlice';

export default combineReducers({
  navigation: navigationSlice,
  authentication: authenticationSlice,
  counter: counterReducer,
});

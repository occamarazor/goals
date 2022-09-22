import { combineReducers } from '@reduxjs/toolkit';
import { AUTHENTICATION_SLICE_NAME } from 'features/authentication/authenticationConstants';
import counterReducer from 'features/counter/counterSlice';
import navigationSlice from 'features/navigation/navigationSlice';
import authenticationSlice from 'features/authentication/authenticationSlice';

// TODO: dynamic slice names
export default combineReducers({
  navigation: navigationSlice,
  [AUTHENTICATION_SLICE_NAME]: authenticationSlice,
  counter: counterReducer,
});

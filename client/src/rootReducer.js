import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import navigationSlice from 'features/navigation/navigationSlice';

export default combineReducers({
  navigation: navigationSlice,
  counter: counterReducer,
});

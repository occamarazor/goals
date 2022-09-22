import { combineReducers } from '@reduxjs/toolkit';
import NAVIGATION_SLICE_NAME from 'features/navigation/navigationConstants';
import { AUTHENTICATION_SLICE_NAME } from 'features/authentication/authenticationConstants';
import navigationSlice from 'features/navigation/navigationSlice';
import authenticationSlice from 'features/authentication/authenticationSlice';

export default combineReducers({
  [NAVIGATION_SLICE_NAME]: navigationSlice,
  [AUTHENTICATION_SLICE_NAME]: authenticationSlice,
});

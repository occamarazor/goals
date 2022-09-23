import { combineReducers } from '@reduxjs/toolkit';
import NAVIGATION_SLICE_NAME from 'features/navigation/navigationConstants';
import { AUTHENTICATION_SLICE_NAME } from 'features/authentication/authenticationConstants';
import { GOALS_SLICE_NAME } from 'features/goals/goalsConstants';
import navigationSlice from 'features/navigation/navigationSlice';
import authenticationSlice from 'features/authentication/authenticationSlice';
import goalsSlice from 'features/goals/goalsSlice';

export default combineReducers({
  [NAVIGATION_SLICE_NAME]: navigationSlice,
  [AUTHENTICATION_SLICE_NAME]: authenticationSlice,
  [GOALS_SLICE_NAME]: goalsSlice,
});

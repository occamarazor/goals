import { createSlice } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import {
  AUTHENTICATION_SLICE_NAME,
  AUTHENTICATION_STORAGE_KEY,
} from 'features/authentication/authenticationConstants';
import { getStorageItem, setStorageItem } from 'features/authentication/authenticationHelpers';
import { LOGIN_SLICE_NAME } from 'features/authentication/login/loginConstants';
import loginReducers, { loginState } from 'features/authentication/login/loginSlice';

const initialState = {
  user: getStorageItem(AUTHENTICATION_STORAGE_KEY) || null,
  ...loginState,
};

const authenticationSlice = createSlice({
  name: AUTHENTICATION_SLICE_NAME,
  initialState,
  reducers: {
    logoutSubmit: (state) => {
      state.user = null;
      state[LOGIN_SLICE_NAME].status = REQUEST_STATUS_TYPES.INITIAL;
      state[LOGIN_SLICE_NAME].error = '';
      setStorageItem(AUTHENTICATION_STORAGE_KEY, null);
    },
  },
  extraReducers: (builder) => {
    loginReducers(builder);
  },
});

export const { logoutSubmit } = authenticationSlice.actions;

export const selectAuthentication = (state) => state[AUTHENTICATION_SLICE_NAME];

export default authenticationSlice.reducer;

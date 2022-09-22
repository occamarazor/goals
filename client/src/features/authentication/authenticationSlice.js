import { createSlice } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import {
  AUTHENTICATION_SLICE_NAME,
  AUTHENTICATION_STORAGE_KEY,
} from 'features/authentication/authenticationConstants';
import { getStorageItem, setStorageItem } from 'features/authentication/authenticationHelpers';
import { REGISTER_SLICE_NAME } from 'features/authentication/register/registerConstants';
import { LOGIN_SLICE_NAME } from 'features/authentication/login/loginConstants';
import registerReducers, { registerState } from 'features/authentication/register/registerSlice';
import loginReducers, { loginState } from 'features/authentication/login/loginSlice';

const initialState = {
  user: getStorageItem(AUTHENTICATION_STORAGE_KEY) || null,
  ...registerState,
  ...loginState,
};

const authenticationSlice = createSlice({
  name: AUTHENTICATION_SLICE_NAME,
  initialState,
  reducers: {
    logoutSubmit: (state) => {
      state.user = null;
      state[REGISTER_SLICE_NAME].status = REQUEST_STATUS_TYPES.INITIAL;
      state[REGISTER_SLICE_NAME].error = '';
      state[LOGIN_SLICE_NAME].status = REQUEST_STATUS_TYPES.INITIAL;
      state[LOGIN_SLICE_NAME].error = '';
      setStorageItem(AUTHENTICATION_STORAGE_KEY, null);
    },
  },
  extraReducers: (builder) => {
    registerReducers(builder);
    loginReducers(builder);
  },
});

export const { logoutSubmit } = authenticationSlice.actions;

export const selectAuthentication = (state) => state[AUTHENTICATION_SLICE_NAME];

export default authenticationSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import { getStorageItem, setStorageItem } from 'features/authentication/authenticationHelpers';
import { AUTHENTICATION_STORAGE_KEY } from 'features/authentication/authenticationConstants';

const initialState = {
  status: REQUEST_STATUS_TYPES.INITIAL,
  user: getStorageItem(AUTHENTICATION_STORAGE_KEY) || null,
  error: '',
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    submitLogin: (state) => {
      state.status = REQUEST_STATUS_TYPES.LOADING;
    },
    submitLoginSuccess: (state, { payload }) => {
      state.user = payload;
      setStorageItem(AUTHENTICATION_STORAGE_KEY, payload);
      state.status = REQUEST_STATUS_TYPES.SUCCESS;
    },
    submitLoginError: (state, { payload }) => {
      state.error = payload;
      state.status = REQUEST_STATUS_TYPES.ERROR;
    },
    submitLogout: (state) => {
      state.status = REQUEST_STATUS_TYPES.INITIAL;
      state.user = null;
      state.error = '';
      setStorageItem(AUTHENTICATION_STORAGE_KEY, null);
    },
  },
});

export const { submitLogin, submitLoginSuccess, submitLoginError, submitLogout } =
  authenticationSlice.actions;

export const selectAuthentication = (state) => state.authentication;

export default authenticationSlice.reducer;

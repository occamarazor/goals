import { createSlice } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import { AUTHENTICATION_STORAGE_KEY } from 'features/authentication/authenticationConstants';

const initialUserState = JSON.parse(localStorage.getItem(AUTHENTICATION_STORAGE_KEY));

const initialState = {
  status: REQUEST_STATUS_TYPES.INITIAL,
  user: initialUserState || null,
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
      localStorage.setItem(AUTHENTICATION_STORAGE_KEY, JSON.stringify(payload));
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
      localStorage.setItem(AUTHENTICATION_STORAGE_KEY, null);
    },
  },
});

export const { submitLogin, submitLoginSuccess, submitLoginError, submitLogout } =
  authenticationSlice.actions;

export const selectAuthentication = (state) => state.authentication;

export default authenticationSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';

const initialState = {
  status: REQUEST_STATUS_TYPES.INITIAL,
  user: null,
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
      state.status = REQUEST_STATUS_TYPES.SUCCESS;
    },
    submitLoginError: (state, { payload }) => {
      state.error = payload;
      state.status = REQUEST_STATUS_TYPES.ERROR;
    },
  },
});

export const { submitLogin, submitLoginSuccess, submitLoginError } = authenticationSlice.actions;

export const selectAuthentication = (state) => state.authentication;

export default authenticationSlice.reducer;

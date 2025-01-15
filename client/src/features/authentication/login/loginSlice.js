import { createAction } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import {
  AUTHENTICATION_SLICE_NAME,
  AUTHENTICATION_STORAGE_KEY,
} from 'features/authentication/authenticationConstants';
import { setStorageItem } from 'features/authentication/authenticationHelpers';
import { LOGIN_SLICE_NAME } from 'features/authentication/login/loginConstants';

export const loginState = {
  [LOGIN_SLICE_NAME]: {
    status: REQUEST_STATUS_TYPES.INITIAL,
    error: '',
  },
};

export const loginSubmit = createAction(`${AUTHENTICATION_SLICE_NAME}/${LOGIN_SLICE_NAME}/submit`);
export const loginSubmitSuccess = createAction(
  `${AUTHENTICATION_SLICE_NAME}/${LOGIN_SLICE_NAME}/submitSuccess`,
);
export const loginSubmitError = createAction(
  `${AUTHENTICATION_SLICE_NAME}/${LOGIN_SLICE_NAME}/submitError`,
);

const loginReducers = (builder) => {
  builder
    .addCase(loginSubmit, (state) => {
      state[LOGIN_SLICE_NAME].status = REQUEST_STATUS_TYPES.LOADING;
    })
    .addCase(loginSubmitSuccess, (state, { payload }) => {
      state.user = payload;
      setStorageItem(AUTHENTICATION_STORAGE_KEY, payload);
      state[LOGIN_SLICE_NAME].status = REQUEST_STATUS_TYPES.SUCCESS;
    })
    .addCase(loginSubmitError, (state, { payload }) => {
      state[LOGIN_SLICE_NAME].error = payload;
      state[LOGIN_SLICE_NAME].status = REQUEST_STATUS_TYPES.ERROR;
    });
};

export default loginReducers;

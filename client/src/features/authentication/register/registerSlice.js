import { createAction } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import {
  AUTHENTICATION_SLICE_NAME,
  AUTHENTICATION_STORAGE_KEY,
} from 'features/authentication/authenticationConstants';
import { setStorageItem } from 'features/authentication/authenticationHelpers';
import { REGISTER_SLICE_NAME } from 'features/authentication/register/registerConstants';

export const registerState = {
  [REGISTER_SLICE_NAME]: {
    status: REQUEST_STATUS_TYPES.INITIAL,
    error: '',
  },
};

export const registerSubmit = createAction(
  `${AUTHENTICATION_SLICE_NAME}/${REGISTER_SLICE_NAME}/registerSubmit`,
);
export const registerSubmitSuccess = createAction(
  `${AUTHENTICATION_SLICE_NAME}/${REGISTER_SLICE_NAME}/registerSubmitSuccess`,
);
export const registerSubmitError = createAction(
  `${AUTHENTICATION_SLICE_NAME}/${REGISTER_SLICE_NAME}/registerSubmitError`,
);

const registerReducers = (builder) => {
  builder
    .addCase(registerSubmit, (state) => {
      state[REGISTER_SLICE_NAME].status = REQUEST_STATUS_TYPES.LOADING;
    })
    .addCase(registerSubmitSuccess, (state, { payload }) => {
      state.user = payload;
      setStorageItem(AUTHENTICATION_STORAGE_KEY, payload);
      state[REGISTER_SLICE_NAME].status = REQUEST_STATUS_TYPES.SUCCESS;
    })
    .addCase(registerSubmitError, (state, { payload }) => {
      state[REGISTER_SLICE_NAME].error = payload;
      state[REGISTER_SLICE_NAME].status = REQUEST_STATUS_TYPES.ERROR;
    });
};

export default registerReducers;

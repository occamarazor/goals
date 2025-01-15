import { createAction } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import { GOALS_SLICE_NAME } from 'features/goals/goalsConstants';
import { GOALS_FORM_SLICE_NAME, GOALS_FORM_MODES } from 'features/goals/form/goalsFormConstants';

export const goalsFormState = {
  [GOALS_FORM_SLICE_NAME]: {
    status: REQUEST_STATUS_TYPES.INITIAL,
    error: '',
    mode: GOALS_FORM_MODES.CREATE,
  },
};

export const goalsFormSubmit = createAction(`${GOALS_SLICE_NAME}/${GOALS_FORM_SLICE_NAME}/submit`);
export const goalsFormSubmitSuccess = createAction(
  `${GOALS_SLICE_NAME}/${GOALS_FORM_SLICE_NAME}/submitSuccess`,
);
export const goalsFormSubmitError = createAction(
  `${GOALS_SLICE_NAME}/${GOALS_FORM_SLICE_NAME}/submitError`,
);

const goalsFormReducers = (builder) => {
  builder
    .addCase(goalsFormSubmit, (state) => {
      state[GOALS_FORM_SLICE_NAME].status = REQUEST_STATUS_TYPES.LOADING;
    })
    .addCase(goalsFormSubmitSuccess, (state) => {
      state[GOALS_FORM_SLICE_NAME].status = REQUEST_STATUS_TYPES.SUCCESS;
    })
    .addCase(goalsFormSubmitError, (state, { payload }) => {
      state[GOALS_FORM_SLICE_NAME].error = payload;
      state[GOALS_FORM_SLICE_NAME].status = REQUEST_STATUS_TYPES.ERROR;
    });
};

export const selectGoalsForm = (state) => state[GOALS_SLICE_NAME][GOALS_FORM_SLICE_NAME];

export default goalsFormReducers;

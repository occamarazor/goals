import { createAction } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import { GOALS_SLICE_NAME } from 'features/goals/goalsConstants';
import { GOALS_FORM_SLICE_NAME, GOALS_FORM_MODES } from 'features/goals/form/goalsFormConstants';

export const goalsFormState = {
  [GOALS_FORM_SLICE_NAME]: {
    status: REQUEST_STATUS_TYPES.INITIAL,
    mode: GOALS_FORM_MODES.CREATE,
    error: '',
  },
};

export const goalsFormSubmit = createAction(
  `${GOALS_SLICE_NAME}/${GOALS_FORM_SLICE_NAME}/formSubmit`,
);
export const goalsFormSubmitSuccess = createAction(
  `${GOALS_SLICE_NAME}/${GOALS_FORM_SLICE_NAME}/formSubmitSuccess`,
);
export const goalsFormSubmitError = createAction(
  `${GOALS_SLICE_NAME}/${GOALS_FORM_SLICE_NAME}/formSubmitError`,
);

const goalsFormReducers = (builder) => {
  builder
    .addCase(goalsFormSubmit, (state) => {
      state[GOALS_FORM_SLICE_NAME].status = REQUEST_STATUS_TYPES.LOADING;
    })
    .addCase(goalsFormSubmitSuccess, (state, { payload }) => {
      // TODO: goal
      state.goal = payload;
      state[GOALS_FORM_SLICE_NAME].status = REQUEST_STATUS_TYPES.SUCCESS;
    })
    .addCase(goalsFormSubmitError, (state, { payload }) => {
      state[GOALS_FORM_SLICE_NAME].error = payload;
      state[GOALS_FORM_SLICE_NAME].status = REQUEST_STATUS_TYPES.ERROR;
    });
};

export default goalsFormReducers;

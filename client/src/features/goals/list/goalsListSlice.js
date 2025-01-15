import { createAction } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import { GOALS_SLICE_NAME } from 'features/goals/goalsConstants';
import { GOALS_LIST_SLICE_NAME } from 'features/goals/list/goalsListConstants';

export const goalsListState = {
  [GOALS_LIST_SLICE_NAME]: {
    status: REQUEST_STATUS_TYPES.INITIAL,
    error: '',
    list: [],
  },
};

export const goalsListSubmit = createAction(`${GOALS_SLICE_NAME}/${GOALS_LIST_SLICE_NAME}/submit`);
export const goalsListSubmitSuccess = createAction(
  `${GOALS_SLICE_NAME}/${GOALS_LIST_SLICE_NAME}/submitSuccess`,
);
export const goalsListSubmitError = createAction(
  `${GOALS_SLICE_NAME}/${GOALS_LIST_SLICE_NAME}/submitError`,
);

const goalsListReducers = (builder) => {
  builder
    .addCase(goalsListSubmit, (state) => {
      state[GOALS_LIST_SLICE_NAME].status = REQUEST_STATUS_TYPES.LOADING;
    })
    .addCase(goalsListSubmitSuccess, (state, { payload }) => {
      state[GOALS_LIST_SLICE_NAME].list = payload;
      state[GOALS_LIST_SLICE_NAME].status = REQUEST_STATUS_TYPES.SUCCESS;
    })
    .addCase(goalsListSubmitError, (state, { payload }) => {
      state[GOALS_LIST_SLICE_NAME].error = payload;
      state[GOALS_LIST_SLICE_NAME].status = REQUEST_STATUS_TYPES.ERROR;
    });
};

export const selectGoalsList = (state) => state[GOALS_SLICE_NAME][GOALS_LIST_SLICE_NAME];

export default goalsListReducers;

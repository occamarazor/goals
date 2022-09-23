import { createSlice } from '@reduxjs/toolkit';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import { GOALS_SLICE_NAME } from 'features/goals/goalsConstants';
import { GOALS_FORM_SLICE_NAME } from 'features/goals/form/goalsFormConstants';
import goalsFormReducers, { goalsFormState } from 'features/goals/form/goalsFormSlice';

// TODO: goal
const initialState = {
  goal: null,
  ...goalsFormState,
};

const goalsSlice = createSlice({
  name: GOALS_SLICE_NAME,
  initialState,
  reducers: {
    reset: (state) => {
      state.goal = null;
      state[GOALS_FORM_SLICE_NAME].status = REQUEST_STATUS_TYPES.INITIAL;
      state[GOALS_FORM_SLICE_NAME].error = '';
    },
  },
  extraReducers: (builder) => {
    goalsFormReducers(builder);
  },
});

export const { logoutSubmit } = goalsSlice.actions;

export const selectGoals = (state) => state[GOALS_SLICE_NAME];

export default goalsSlice.reducer;

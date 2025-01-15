import { createSlice } from '@reduxjs/toolkit';
import { GOALS_SLICE_NAME } from 'features/goals/goalsConstants';
import goalsListReducers, { goalsListState } from 'features/goals/list/goalsListSlice';
import goalsFormReducers, { goalsFormState } from 'features/goals/form/goalsFormSlice';

const initialState = {
  ...goalsListState,
  ...goalsFormState,
};

const goalsSlice = createSlice({
  name: GOALS_SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    goalsFormReducers(builder);
    goalsListReducers(builder);
  },
});

export default goalsSlice.reducer;

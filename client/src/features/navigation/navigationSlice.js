import { createSlice } from '@reduxjs/toolkit';
import NAVIGATION_SLICE_NAME from 'features/navigation/navigationConstants';

const initialState = {
  menuOpen: false,
};

const navigationSlice = createSlice({
  name: [NAVIGATION_SLICE_NAME],
  initialState,
  reducers: {
    setMenuOpen: (state, { payload }) => {
      state.menuOpen = payload;
    },
  },
});

export const { setMenuOpen } = navigationSlice.actions;

export const selectNavigation = (state) => state.navigation;

export default navigationSlice.reducer;

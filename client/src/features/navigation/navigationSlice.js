import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  menuOpen: false,
};

const navigationSlice = createSlice({
  name: 'navigation',
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

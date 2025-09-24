import { createSlice } from '@reduxjs/toolkit';

type DisplayState = {
  mode: 'grid' | 'list';
};
const initialState: DisplayState = {
  mode: 'grid',
};
const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    toggleDisplayMode(state) {
      state.mode = state.mode === 'grid' ? 'list' : 'grid';
    },
    setDisplayMode(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { toggleDisplayMode, setDisplayMode } = displaySlice.actions;
export default displaySlice.reducer;

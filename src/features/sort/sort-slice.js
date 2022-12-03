/*jshint esversion: 6 */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortBy: '',
};

const sortSlice = createSlice({
  name: '@@sort',
  initialState,
  reducers: {
    setSort: (state, action) => {
      state.sortBy = action.payload;
    },
    clearFilters: () => initialState,
  },
});

export const { setSort, clearFilters } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
export const selectSort = (state) => state.sort.sortBy;

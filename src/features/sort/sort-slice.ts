/*jshint esversion: 6 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { SortType } from 'types';

const initialState: SortType = 'Сортировка по цене';

const sortSlice = createSlice({
  name: '@@sort',
  initialState: 'Сортировка по цене' as SortType,
  reducers: {
    setSort: (state, action: PayloadAction<SortType>) => {
      state = action.payload;
    },
    clearFilters: () => initialState,
  },
});

export const { setSort, clearFilters } = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
export const selectSort = (state: RootState) => state.sort;

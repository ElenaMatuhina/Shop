/*jshint esversion: 6 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { API_URL, API_KEY } from '../../config';

export const goodsLoading = createAsyncThunk('@@goods/load-goods', (_, { extra: { client } }) => {
  return client.get(API_URL, { headers: { Authorization: API_KEY } });
});

const initialState = {
  status: 'idle',
  error: null,
  goods: [],
};

export const goodsSlice = createSlice({
  name: '@@goods',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(goodsLoading.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(goodsLoading.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.payload || action.meta.error;
      })
      .addCase(goodsLoading.fulfilled, (state, action) => {
        state.status = 'received';
        state.goods = action.payload.data.featured;
      });
  },
});

export const goodsReducer = goodsSlice.reducer;
export const selectAllGoods = (state) => state.goodsList.goods;
export const selectNameGoods = (state) => state.goodsList.goods.name;

export const selectGoodsInfo = (state) => ({
  status: state.goodsList.status,
  error: state.goodsList.error,
  quantity: state.goodsList.goods.length,
});

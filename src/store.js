import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';
import { goodsReducer } from './features/goods/goods-slice';

export const store = configureStore({
  reducer: {
    goodsList: goodsReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});

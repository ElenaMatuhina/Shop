import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from './config';
import { goodsReducer } from './features/goods/goods-slice';
import { basketReducer } from './features/basket/basket-slice';

export const store = configureStore({
  reducer: {
    goodsList: goodsReducer,
    basket: basketReducer,
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

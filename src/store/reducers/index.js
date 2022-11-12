import { combineReducers } from 'redux';
import { goodsReducer } from './goodsReducer';

export const rootreducer = combineReducers({ goodsList: goodsReducer });

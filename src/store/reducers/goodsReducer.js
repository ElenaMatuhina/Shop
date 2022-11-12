import { SET_GOODS, SET_LOADING, SET_ERROR } from '../actions/constants';

const initialState = {
  status: 'idle',
  error: null,
  goods: [],
};

export const goodsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_GOODS:
      return {
        ...state,
        status: 'received',
        goods: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload
      };
    default:
      return state;
  }
};

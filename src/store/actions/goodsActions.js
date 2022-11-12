import { SET_GOODS, SET_LOADING, SET_ERROR } from './constants';
import { API_URL, API_KEY } from '../../config';

const setGoods = (goods) => ({
  type: SET_GOODS,
  payload: goods,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const goodsLoading = () => (dispatch) => {
  dispatch(setLoading());
  fetch(API_URL, { headers: { Authorization: API_KEY } })
    .then((res) => res.json())
    .then((data) => {
      dispatch(setGoods(data.featured));
    })
    .catch((error) => dispatch(setError(error.message)));
};

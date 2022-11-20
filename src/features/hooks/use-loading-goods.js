import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goodsLoading } from '../goods/goods-slice';
import { selectGoodsInfo, selectAllGoods } from '../goods/goods-slice';

export const useGoods = () => {
  const dispatch = useDispatch();
  const { status, error, quantity } = useSelector(selectGoodsInfo);
  const goods = useSelector(selectAllGoods);

  useEffect(() => {
    if (!quantity) {
      dispatch(goodsLoading());
    }
  }, [quantity, dispatch]);

  return [goods, {status, error}];
};

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goodsLoading } from './goods-slice';
import { selectGoodsInfo} from './goods-slice';

export const useInfo = () => {
  const dispatch = useDispatch();
  const { status, error, quantity } = useSelector(selectGoodsInfo);
  

  useEffect(() => {
    if (!quantity) {
      dispatch(goodsLoading());
    }
  }, [quantity, dispatch]);

  return [status, error];
}
import { useDispatch } from 'react-redux';
import { addToBasket } from '../basket/basket-slice';

export const useAddGoods = (id, name, price) => {
  const dispatch = useDispatch();
  
  const addGoods = () => {
    dispatch(addToBasket(id, name, price));
  };
  return [addGoods];
};

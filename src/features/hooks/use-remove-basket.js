import { useDispatch } from 'react-redux';
import { removeFromBasket } from '../basket/basket-slice';

export const useRemoveBasket = (id) => {
  const dispatch = useDispatch();
  const removeItem = () => dispatch(removeFromBasket(id));

  return [removeItem];
};

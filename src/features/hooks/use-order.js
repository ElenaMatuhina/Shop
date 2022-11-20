import { useSelector } from 'react-redux';
import { setOrder } from '../basket/basket-slice';

export const useOrder = () => {
  const order = useSelector(setOrder);
  return order;
};

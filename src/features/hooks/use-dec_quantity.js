import { useDispatch } from 'react-redux';
import { decQuantity } from '../basket/basket-slice';

export const useDecQuantity= (id) => {
  const dispatch = useDispatch();
  const decQuan = () =>  dispatch(decQuantity(id));
  return [decQuan];
};

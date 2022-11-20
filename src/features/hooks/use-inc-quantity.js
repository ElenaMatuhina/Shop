import { useDispatch } from 'react-redux';
import { incQuantity } from '../basket/basket-slice';

export const useIncQuan = (id) => {
  const dispatch = useDispatch();
  
  const incQuan = () => {
    dispatch(incQuantity(id));
  };
  return [incQuan];
};

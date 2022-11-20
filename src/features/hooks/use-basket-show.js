import { useSelector, useDispatch } from 'react-redux';
import { setBasketShow, handleBasketShow} from '../basket/basket-slice';

export const useBasketShow = () => {
  const isBasketShow = useSelector(setBasketShow);
  const dispatch = useDispatch();

  const basketShow = () => {
    dispatch(handleBasketShow());
  };

  return [isBasketShow, basketShow];
};

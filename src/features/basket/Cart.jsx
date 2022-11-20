import { useDispatch, useSelector } from 'react-redux';
import { setOrder, handleBasketShow } from './basket-slice';
import { useBasketShow } from '../hooks/use-basket-show';

export const Cart = () => {
  const order = useSelector(setOrder);
  const [isBasketShow, basketShow] = useBasketShow();

  const quantity = order.length;

  return (
    <div className="cart red white-text" onClick={basketShow}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;

import { useDecQuantity } from '../hooks/use-dec_quantity';
import { useIncQuan } from '../hooks/use-inc-quantity';
import { useRemoveBasket } from '../hooks/use-remove-basket';
import { useDispatch } from 'react-redux';
import { decQuantity, removeFromBasket } from '../basket/basket-slice';

//!!!!!!!!!!!!тут работает некорректно(!!) 24 строка, узнать разницу между в передаче аргументов {}
function BasketItem({ id, name, price, quantity }) {
  const dispatch = useDispatch();
  const [decQuan] = useDecQuantity(id);
  const [incQuan] = useIncQuan(id);
  const [removeItem] = useRemoveBasket(id);

  return (
    <li className="collection-item">
      {name} x {quantity} = {price * quantity} руб.
      <span className="secondary-content">
        <i className="material-icons basket-delete" onClick={incQuan}>
          exposure_plus_1
        </i>
        <i
          className="material-icons basket-delete"
          //тут работает некорректно(!!)
          onClick={quantity <= 0 ? removeItem : decQuan}>
          exposure_neg_1
        </i>

        <i className="material-icons basket-delete" onClick={removeItem}>
          close
        </i>
      </span>
    </li>
  );
}

export default BasketItem;

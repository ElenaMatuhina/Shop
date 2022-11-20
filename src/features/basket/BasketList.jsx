import BasketItem from './BasketItem';
import { useOrder } from '../hooks/use-order';
import { useBasketShow } from '../hooks/use-basket-show';

const BasketList = () => {
  const order = useOrder();
  const [isBasketShow, basketShow] = useBasketShow();

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  console.log(order);

  return (
    <>
      <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        {order.length ? (
          order.map((item) => <BasketItem key={item.id} {...item} />)
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )}
        <li className="collection-item active">Общая стоимость: {totalPrice} руб.</li>
        <li className="collection-item">
          <button className="btn btn-small">Оформить</button>
        </li>

        <i className="material-icons basket-close" onClick={basketShow}>
          close
        </i>
      </ul>
    </>
  );
};

export { BasketList };

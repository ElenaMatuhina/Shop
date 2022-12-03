import { useGoods } from '../hooks/use-loading-goods';
import { GoodList } from '../goods/GoodList';
import { Preloader } from '../../components/preloader';
import { Cart } from '../basket/Cart';
import { BasketList } from '../basket/BasketList';
import Alert from '../basket/Alert';
import { useBasketShow } from '../hooks/use-basket-show';
import { useAlertName } from '../hooks/use-alert-name';
import { Sort } from '../sort/Sort';

const Shop = () => {
  const [goods, { status, error }] = useGoods();
  const [isBasketShow, basketShow] = useBasketShow();
  const alertName = useAlertName();

  return (
    <main className="container content">
      <Sort/>
      <Cart />
      {error && <h2>Error</h2>}
      {status === 'loading' && <Preloader />}
      {status === 'received' && <GoodList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export { Shop };

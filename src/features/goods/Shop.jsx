import { useGoods } from './use-goods';
import { GoodList } from './GoodList';
import { Preloader } from '../../components/preloader';

const Shop = () => {
  const [goods, { status, error }] = useGoods();

  return (
    <main className="container content">
      {error && <h2>Error</h2>}
      {status === 'loading' && <Preloader />}
      {status === 'received' && <GoodList />}
    </main>
  );
};

export { Shop };

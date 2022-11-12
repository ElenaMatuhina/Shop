import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goodsLoading } from '../../store/actions/goodsActions';
import { selectAllGoods, selectGoodsInfo } from '../../store/selectors/goodsSelector';
import { GoodList } from '../goods';
import { Preloader } from '../preloader';

const Shop = () => {
  const dispatch = useDispatch();
  const goods = useSelector(selectAllGoods);
  const { status, error, quantity } = useSelector(selectGoodsInfo);

  useEffect(() => {
    if (!quantity) {
      dispatch(goodsLoading());
    }
  }, [quantity, dispatch]);

  return (
    <main className="container content">
      {error && <h2>Error</h2>}
      {status === 'loading' && <Preloader />}
      {status === 'received' && <GoodList />}
    </main>
  );
};

export { Shop };

import { useSelector } from 'react-redux';
import { selectAllGoods } from '../../store/selectors/goodsSelector';
import { Item } from './item/Item';

const GoodList = () => {
  const goods = useSelector(selectAllGoods);

  if (!goods.length) {
    return <h2>Nothing here</h2>;
  }

  return <div className="goods">
    {goods.map((item) => (
      <Item key={item.id} {...item}/>
    ))}
  </div>;
};

export { GoodList };

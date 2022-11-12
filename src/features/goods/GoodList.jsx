import { useGoods } from './use-goods';
import { Item } from '../../components/item/Item';

const GoodList = () => {
  const [goods, {status, error}] = useGoods();
  console.log(goods);

  if (!goods.length) {
    return <h2>Nothing here</h2>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
};

export { GoodList };

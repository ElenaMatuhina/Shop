import { Selectbox } from './Selectbox';
import { useSort } from '../hooks/use-sort';

const sortBy = [
  { value: '',           label: 'Сортировка по цене'  },
  { value: 'lowestprice', label: 'Lowest to highest' },
  { value: 'highestprice', label: 'Highest to lowest' },
]
  

const Sort = () => {
  const [sort, handleSort] = useSort();

  return (
    <div className="sort">
       <Selectbox options={sortBy} handleOnChange={handleSort} />
    </div>
  );
};

export { Sort };

import { Selectbox } from './Selectbox';
import { useSort } from '../hooks/use-sort';
import { SortType } from 'types';



const sortBy: Record<SortType,  {value: SortType, label: SortType}>= {
  'Сортировка по цене': { value: 'Сортировка по цене', label: 'Сортировка по цене' },
  'Lowest to highest': { value: 'Lowest to highest', label: 'Lowest to highest' },
  'Highest to lowest': {value: 'Highest to lowest', label: 'Highest to lowest'}
}

const optionsSort = Object.values(sortBy);

const Sort = () => {
  const [sort, handleSort] = useSort();

  return (
    <div className="sort">
      <Selectbox options={optionsSort} handleOnChange={handleSort} value={sort} />
    </div>
  );
};

export { Sort };

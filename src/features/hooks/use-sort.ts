import { useDispatch, useSelector } from 'react-redux';
import { selectSort, setSort } from '../sort/sort-slice';
import { SortType } from 'types';


export const useSort = ():[SortType, (value: string)=>void] => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const handleSort = () => {
    dispatch(setSort(sort));
  };

  return [sort, handleSort];
};

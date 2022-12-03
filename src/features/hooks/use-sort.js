import { useDispatch, useSelector } from 'react-redux';
import { selectSort } from '../sort/sort-slice';

export const useSort = () => {
  const dispatch = useDispatch();
  const sort = useSelector(selectSort);

  const handleSort = (goodsSort) => {
    dispatch(selectSort(goodsSort || ''));
  };

  return [sort, handleSort];
};

import { setAlertName } from '../basket/basket-slice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { closeAlert } from '../basket/basket-slice';

export const useAlertName = () => {
  const alertName = useSelector(setAlertName);
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setTimeout(() => dispatch(closeAlert()), 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [alertName]);

  return alertName;
};

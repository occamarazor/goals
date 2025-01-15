import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { goalsListSubmit, selectGoalsList } from 'features/goals/list/goalsListSlice';

const useGoalsListSubmit = () => {
  const dispatch = useDispatch();
  const { list } = useSelector(selectGoalsList);

  useEffect(() => {
    dispatch(goalsListSubmit());
  }, [dispatch]);

  return list;
};

export default useGoalsListSubmit;

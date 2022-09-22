import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectNavigation, setMenuOpen } from 'features/navigation/navigationSlice';

export const useNavigationHandler = (url) => {
  const navigate = useNavigate();

  return useCallback(() => {
    navigate(url);
  }, [navigate, url]);
};

export const useNavigationMenu = () => {
  const dispatch = useDispatch();
  const { menuOpen } = useSelector(selectNavigation);

  const handleSetMenuOpen = useCallback(
    (isOpen) => () => {
      dispatch(setMenuOpen(isOpen));
    },
    [dispatch],
  );

  return [menuOpen, handleSetMenuOpen];
};

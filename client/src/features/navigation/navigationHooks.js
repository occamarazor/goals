import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useNavigateHandler = (url) => {
  const navigate = useNavigate();

  return useCallback(() => {
    navigate(url);
  }, [navigate, url]);
};

export default useNavigateHandler;

import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { LOGIN } from 'configs/routing/routingPaths';
import { publicRoutes, privateRoutes } from 'configs/routing/routingRoutes';
import { useNavigationHandler } from 'features/navigation/navigationHooks';
import { selectAuthentication } from 'features/authentication/authenticationSlice';

const AppMain = () => {
  const { user } = useSelector(selectAuthentication);
  const routes = user ? privateRoutes : publicRoutes;
  const element = useRoutes(routes);

  const handleLoginNavigate = useNavigationHandler(LOGIN);
  useEffect(() => {
    if (!user) {
      handleLoginNavigate();
    }
  }, [user, handleLoginNavigate]);

  return <main>{element}</main>;
};

export default AppMain;

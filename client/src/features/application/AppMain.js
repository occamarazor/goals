import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from 'configs/routing/routingRoutes';
import { selectAuthentication } from 'features/authentication/authenticationSlice';

const AppMain = () => {
  const { user } = useSelector(selectAuthentication);
  const routes = user ? privateRoutes : publicRoutes;
  const element = useRoutes(routes);

  return <main>{element}</main>;
};

export default AppMain;

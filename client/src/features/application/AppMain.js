// import { useState, useCallback } from 'react';
import { useRoutes } from 'react-router-dom';
// import { publicRoutes, privateRoutes } from 'configs/routing/routingRoutes';
import { privateRoutes } from 'configs/routing/routingRoutes';

// TODO: auth
const AppMain = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const routes = isAuthenticated ? privateRoutes : publicRoutes;
  const element = useRoutes(privateRoutes);

  // const handleAuthToggle = useCallback(() => {
  //   setIsAuthenticated(!isAuthenticated);
  // }, [isAuthenticated]);

  return (
    <main>
      {element}
      {/* <div className='text-center'> */}
      {/*  <button onClick={handleAuthToggle}>Authenticated: {`${isAuthenticated}`}</button> */}
      {/* </div> */}
    </main>
  );
};

export default AppMain;

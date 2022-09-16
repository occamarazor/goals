import { useState, useCallback } from 'react';
import { useRoutes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from 'configs/routing/routingRoutes';

const AppMain = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const routes = isAuthenticated ? privateRoutes : publicRoutes;
  const element = useRoutes(routes);

  const handleAuthToggle = useCallback(() => {
    setIsAuthenticated(!isAuthenticated);
  }, [isAuthenticated]);

  return (
    <main className='flex justify-center pt-[80px] bg-zinc-300'>
      <div className='max-w-screen-2xl px-2 pt-20'>
        {element}
        <div>
          Authenticated: {`${isAuthenticated}`}
          <button onClick={handleAuthToggle}>Auth</button>
        </div>
      </div>
    </main>
  );
};

export default AppMain;

import { useRoutes } from 'react-router-dom';
import routes from 'configs/routing/routingRoutes';

const AppMain = () => {
  const element = useRoutes(routes);

  return (
    <main className='flex justify-center pt-[80px] bg-zinc-300'>
      <div className='max-w-screen-2xl px-2 pt-20'>{element}</div>
    </main>
  );
};

export default AppMain;

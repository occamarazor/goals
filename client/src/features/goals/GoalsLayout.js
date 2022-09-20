import { Outlet } from 'react-router-dom';

const GoalsLayout = () => (
  <div className='bg-white dark:bg-gray-900'>
    <div className='flex justify-center h-screen pt-[64px] lg:pt-[68px]'>
      <Outlet />
    </div>
  </div>
);

export default GoalsLayout;

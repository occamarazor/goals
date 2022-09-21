import { Outlet } from 'react-router-dom';

const GoalsLayout = () => (
  <div className='bg-white min-h-screen pt-[64px] lg:pt-[68px] dark:bg-gray-900 '>
    <div className='flex flex-col items-start justify-center py-10 lg:flex-row'>
      <Outlet />
    </div>
  </div>
);

export default GoalsLayout;

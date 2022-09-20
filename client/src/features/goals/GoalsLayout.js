import { Outlet } from 'react-router-dom';

const GoalsLayout = () => (
  <div className='bg-white dark:bg-gray-900'>
    <div className='pt-[64px] lg:pt-[68px]'>
      <div className='flex flex-col justify-center lg:flex-row'>
        <Outlet />
      </div>
    </div>
  </div>
);

export default GoalsLayout;

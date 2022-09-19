import { Outlet } from 'react-router-dom';
import GoalsInfo from 'features/goals/GoalsInfo';

const GoalsLayout = () => (
  <div className='pt-[64px] lg:pt-[68px]'>
    <GoalsInfo />
    <Outlet />
  </div>
);

export default GoalsLayout;

import { Outlet } from 'react-router-dom';
import GoalsInfo from 'features/goals/GoalsInfo';

const GoalsLayout = () => (
  <div className='pt-[80px]'>
    <GoalsInfo />
    <Outlet />
  </div>
);

export default GoalsLayout;

import AuthorizationPage from 'features/authorization/AuthorizationPage';
import GoalsPage from 'features/goals/GoalsPage';

// TODO: guarded routing
const AppMain = () => (
  <main className='pt-[80px]'>
    <AuthorizationPage />
    <GoalsPage />
  </main>
);

export default AppMain;

import AuthorizationPage from 'components/authorization/AuthorizationPage';
import GoalsPage from 'components/goals/GoalsPage';

// TODO: guarded routing
const AppMain = () => (
  <main className='pt-[80px]'>
    <AuthorizationPage />
    <GoalsPage />
  </main>
);

export default AppMain;

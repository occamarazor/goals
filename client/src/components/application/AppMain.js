import AuthorizationPage from '../authorization/AuthorizationPage';
import GoalsPage from '../goals/GoalsPage';

// TODO: guarded routing
const AppMain = () => (
  <main>
    <AuthorizationPage />
    <GoalsPage />
  </main>
);

export default AppMain;

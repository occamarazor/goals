import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  ROOT,
  LOGIN,
  REGISTER,
  LOGOUT,
  GOALS,
  COUNTER,
  NO_MATCH,
} from 'configs/routing/routingPaths';
import App from 'features/application/App';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const GoalsPage = lazy(() => import('pages/GoalsPage'));
const CounterPage = lazy(() => import('pages/CounterPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<>...</>}>
            <GoalsPage />
          </Suspense>
        ),
      },
      {
        path: LOGIN,
        element: (
          <Suspense fallback={<>...</>}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: REGISTER,
        element: (
          <Suspense fallback={<>...</>}>
            <RegisterPage />
          </Suspense>
        ),
      },
      {
        path: LOGOUT,
        element: <>Logout</>,
      },
      {
        path: GOALS,
        element: (
          <Suspense fallback={<>...</>}>
            <GoalsPage />
          </Suspense>
        ),
      },
      {
        path: COUNTER,
        element: (
          <Suspense fallback={<>...</>}>
            <CounterPage />
          </Suspense>
        ),
      },
      {
        path: NO_MATCH,
        element: (
          <Suspense fallback={<>...</>}>
            <ErrorPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;

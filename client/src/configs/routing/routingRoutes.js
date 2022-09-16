import { lazy, Suspense } from 'react';
import { LOGIN, REGISTER, LOGOUT, GOALS, COUNTER, NO_MATCH } from 'configs/routing/routingPaths';

const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const GoalsPage = lazy(() => import('pages/GoalsPage'));
const CounterPage = lazy(() => import('pages/CounterPage'));
const ErrorPage = lazy(() => import('pages/ErrorPage'));

const errorRoute = {
  path: NO_MATCH,
  element: (
    <Suspense fallback={<>...</>}>
      <ErrorPage />
    </Suspense>
  ),
};

export const publicRoutes = [
  {
    index: true,
    element: (
      <Suspense fallback={<>...</>}>
        <LoginPage />
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
    path: COUNTER,
    element: (
      <Suspense fallback={<>...</>}>
        <CounterPage />
      </Suspense>
    ),
  },
  errorRoute,
];

export const privateRoutes = [
  {
    index: true,
    element: (
      <Suspense fallback={<>...</>}>
        <GoalsPage />
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
  errorRoute,
];

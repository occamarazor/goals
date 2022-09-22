import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { ROOT, LOGIN, REGISTER, GOALS, COUNTER, NO_MATCH } from 'configs/routing/routingPaths';
import AppLoader from 'features/application/AppLoader';
import AuthenticationLoader from 'features/authentication/AuthenticationLoader';

const AuthenticationLayout = lazy(() => import('features/authentication/AuthenticationLayout'));
const AuthenticationLogin = lazy(() => import('pages/AuthenticationLogin'));
const AuthenticationRegister = lazy(() => import('pages/AuthenticationRegister'));
const GoalsLayout = lazy(() => import('features/goals/GoalsLayout'));
const GoalsPage = lazy(() => import('pages/GoalsPage'));
const Counter = lazy(() => import('features/counter/Counter'));
const NotFoundError = lazy(() => import('features/error/NotFoundError'));

const errorRoute = {
  path: NO_MATCH,
  element: (
    <Suspense fallback={<AppLoader />}>
      <NotFoundError />
    </Suspense>
  ),
};

export const publicRoutes = [
  {
    path: ROOT,
    element: (
      <Suspense fallback={<AppLoader />}>
        <AuthenticationLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<AuthenticationLoader />}>
            <div className='flex justify-center lg:w-2/6'>
              <Navigate to={LOGIN} replace />
            </div>
          </Suspense>
        ),
      },
      {
        path: LOGIN,
        element: (
          <Suspense fallback={<AuthenticationLoader />}>
            <AuthenticationLogin />
          </Suspense>
        ),
      },
      {
        path: REGISTER,
        element: (
          <Suspense fallback={<AuthenticationLoader />}>
            <AuthenticationRegister />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: COUNTER,
    element: (
      <Suspense fallback={<AppLoader />}>
        <Counter />
      </Suspense>
    ),
  },
  errorRoute,
];

export const privateRoutes = [
  {
    path: ROOT,
    element: (
      <Suspense fallback={<AppLoader />}>
        <GoalsLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<AppLoader />}>
            <Navigate to={GOALS} replace />
          </Suspense>
        ),
      },
      {
        path: GOALS,
        element: (
          <Suspense fallback={<AppLoader />}>
            <GoalsPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: COUNTER,
    element: (
      <Suspense fallback={<AppLoader />}>
        <Counter />
      </Suspense>
    ),
  },
  errorRoute,
];

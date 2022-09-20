import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import { ROOT, LOGIN, REGISTER, GOALS, COUNTER, NO_MATCH } from 'configs/routing/routingPaths';
import AppLoader from 'features/application/AppLoader';
import AuthenticationFormLoader from 'features/authentication/AuthenticationFormLoader';

const AuthenticationLayout = lazy(() => import('features/authentication/AuthenticationLayout'));
const AuthenticationLoginForm = lazy(() =>
  import('features/authentication/AuthenticationLoginForm'),
);
const AuthenticationRegisterForm = lazy(() =>
  import('features/authentication/AuthenticationRegisterForm'),
);
const GoalsLayout = lazy(() => import('features/goals/GoalsLayout'));
const Goals = lazy(() => import('features/goals/Goals'));
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
          <Suspense fallback={<AuthenticationFormLoader />}>
            <div className='flex justify-center lg:w-2/6'>
              <Navigate to={LOGIN} replace />
            </div>
          </Suspense>
        ),
      },
      {
        path: LOGIN,
        element: (
          <Suspense fallback={<AuthenticationFormLoader />}>
            <AuthenticationLoginForm />
          </Suspense>
        ),
      },
      {
        path: REGISTER,
        element: (
          <Suspense fallback={<AuthenticationFormLoader />}>
            <AuthenticationRegisterForm />
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
            <Goals />
          </Suspense>
        ),
      },
    ],
  },
  errorRoute,
];

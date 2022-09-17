import { lazy, Suspense } from 'react';
import {
  ROOT,
  LOGIN,
  REGISTER,
  LOGOUT,
  GOALS,
  COUNTER,
  NO_MATCH,
} from 'configs/routing/routingPaths';
import AuthenticationFormLoader from 'features/authentication/AuthenticationFormLoader';

const AuthenticationLayout = lazy(() => import('features/authentication/AuthenticationLayout'));
const AuthenticationLoginForm = lazy(() =>
  import('features/authentication/AuthenticationLoginForm'),
);
const AuthenticationRegisterForm = lazy(() =>
  import('features/authentication/AuthenticationRegisterForm'),
);
const Goals = lazy(() => import('features/goals/Goals'));
const Counter = lazy(() => import('features/counter/Counter'));
const NotFoundError = lazy(() => import('features/error/NotFoundError'));

const errorRoute = {
  path: NO_MATCH,
  element: (
    <Suspense fallback={<>...</>}>
      <NotFoundError />
    </Suspense>
  ),
};

export const publicRoutes = [
  {
    path: ROOT,
    element: (
      <Suspense fallback={<>...</>}>
        <AuthenticationLayout />
      </Suspense>
    ),

    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<AuthenticationFormLoader />}>
            <AuthenticationLoginForm />
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
      <Suspense fallback={<>...</>}>
        <Counter />
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
        <Goals />
      </Suspense>
    ),
  },
  {
    path: LOGOUT,
    element: <div className='pt-20'>Logout</div>,
  },
  {
    path: GOALS,
    element: (
      <Suspense fallback={<>...</>}>
        <Goals />
      </Suspense>
    ),
  },
  errorRoute,
];

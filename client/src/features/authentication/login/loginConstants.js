import formConfigToState from 'features/form/formHelpers';
import { AUTHENTICATION_URL } from 'features/authentication/authenticationConstants';

export const LOGIN_SLICE_NAME = 'login';

export const LOGIN_URL = `${AUTHENTICATION_URL}login/`;

export const loginFormConfig = [
  {
    id: 'email',
    placeholder: 'example@example.com',
    value: '',
  },
  {
    id: 'password',
    placeholder: 'Your password',
    value: '',
  },
];

export const loginFormState = formConfigToState(loginFormConfig);

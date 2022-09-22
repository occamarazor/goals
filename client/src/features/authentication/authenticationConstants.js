import formConfigToState from 'features/form/formHelpers';

export const AUTHENTICATION_STORAGE_KEY = 'user';

const AUTHENTICATION_URL = 'users/';

export const AUTHENTICATION_LOGIN_URL = `${AUTHENTICATION_URL}login/`;

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

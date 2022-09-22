import formConfigToState from 'features/form/formHelpers';
import { AUTHENTICATION_URL } from 'features/authentication/authenticationConstants';

export const REGISTER_SLICE_NAME = 'register';

export const REGISTER_URL = `${AUTHENTICATION_URL}register/`;

export const registerFormConfig = [
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

export const registerFormState = formConfigToState(registerFormConfig);

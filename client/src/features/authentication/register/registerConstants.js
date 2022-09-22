import formConfigToState from 'features/form/formHelpers';
import { AUTHENTICATION_URL } from 'features/authentication/authenticationConstants';

export const REGISTER_SLICE_NAME = 'register';

export const REGISTER_URL = AUTHENTICATION_URL;

export const registerFormConfig = [
  {
    id: 'name',
    placeholder: 'Your name',
    type: 'text',
    value: '',
  },
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
  {
    id: 'passwordConfirm',
    placeholder: 'Confirm password',
    type: 'password',
    label: 'Confirm password',
    value: '',
  },
];

export const registerFormState = formConfigToState(registerFormConfig);

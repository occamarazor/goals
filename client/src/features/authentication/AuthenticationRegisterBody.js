import { useCallback } from 'react';
import FormField from 'features/forms/FormField';
import FormButton from 'features/forms/FormButton';

// TODO: register
const AuthenticationRegisterBody = () => {
  const handleRegisterFormSubmit = useCallback(() => {
    console.log('Submit register form');
  }, []);

  return (
    <>
      <FormField id='name' placeholder='Your name' type='text' first />
      <FormField id='email' placeholder='example@example.com' />
      <FormField id='password' placeholder='Your password' />
      <FormField
        id='passwordConfirm'
        placeholder='Confirm password'
        type='password'
        label='Confirm Password'
      />
      <FormButton title='Sign up' handler={handleRegisterFormSubmit} />
    </>
  );
};

export default AuthenticationRegisterBody;

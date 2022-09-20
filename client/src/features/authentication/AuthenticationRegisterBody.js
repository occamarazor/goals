import { useCallback } from 'react';
import FormField from 'features/forms/FormField';
import FormButton from 'features/forms/FormButton';

const AuthenticationRegisterBody = () => {
  const handleRegisterFormSubmit = useCallback(() => {
    console.log('Submit register form');
  }, []);

  return (
    <>
      <FormField id='name' placeholder='Your Name' type='text' first />
      <FormField id='email' placeholder='example@example.com' />
      <FormField id='password' placeholder='Your Password' />
      <FormField
        id='passwordConfirm'
        placeholder='Confirm Password'
        type='password'
        label='Confirm Password'
      />
      <FormButton title='Sign up' handler={handleRegisterFormSubmit} />
    </>
  );
};

export default AuthenticationRegisterBody;

import { useCallback } from 'react';
import FormField from 'features/forms/FormField';
import FormButton from 'features/forms/FormButton';

const AuthenticationLoginFormBody = () => {
  const handleLoginFormSubmit = useCallback(() => {
    console.log('Submit login form');
  }, []);

  return (
    <>
      <FormField id='email' placeholder='example@example.com' first />
      <FormField id='password' placeholder='Your Password' />
      <FormButton title='Sign in' handler={handleLoginFormSubmit} />
    </>
  );
};

export default AuthenticationLoginFormBody;

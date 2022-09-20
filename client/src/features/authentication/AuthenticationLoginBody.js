import { useCallback } from 'react';
import FormField from 'features/forms/FormField';
import FormButton from 'features/forms/FormButton';

// // TODO: login
const AuthenticationLoginBody = () => {
  const handleLoginFormSubmit = useCallback(() => {
    console.log('Submit login form');
  }, []);

  return (
    <>
      <FormField id='email' placeholder='example@example.com' first />
      <FormField id='password' placeholder='Your password' />
      <FormButton title='Sign in' handler={handleLoginFormSubmit} />
    </>
  );
};

export default AuthenticationLoginBody;

import { useState, useCallback } from 'react';
import FormField from 'features/forms/FormField';
import FormButton from 'features/forms/FormButton';

// TODO: login
const AuthenticationLoginBody = () => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginForm;

  const handleLoginFieldChange = useCallback(
    (event) => {
      const { id, value } = event.target;
      setLoginForm({ ...loginForm, [id]: value });
    },
    [loginForm],
  );

  const handleLoginFormSubmit = useCallback(() => {
    console.log(loginForm);
  }, [loginForm]);

  return (
    <>
      <FormField
        id='email'
        placeholder='example@example.com'
        first
        value={email}
        changeHandler={handleLoginFieldChange}
      />
      <FormField
        id='password'
        placeholder='Your password'
        value={password}
        changeHandler={handleLoginFieldChange}
      />
      <FormButton title='Sign in' submitHandler={handleLoginFormSubmit} />
    </>
  );
};

export default AuthenticationLoginBody;

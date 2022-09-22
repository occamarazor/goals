import useForm from 'features/forms/formHooks';
import FormField from 'features/forms/FormField';
import FormButton from 'features/forms/FormButton';
import { loginFormConfig, loginFormState } from 'features/authentication/authenticationConstants';
import { submitLogin } from 'features/authentication/authenticationSlice';

const AuthenticationLoginBody = () => {
  const [loginForm, loginFieldChangeHandler, loginFormSubmitHandler] = useForm(
    loginFormState,
    submitLogin,
  );

  return (
    <>
      {loginFormConfig.map(({ id, placeholder }) => (
        <FormField
          key={id}
          id={id}
          placeholder={placeholder}
          value={loginForm[id]}
          changeHandler={loginFieldChangeHandler}
        />
      ))}

      <FormButton title='Sign in' submitHandler={loginFormSubmitHandler} />
    </>
  );
};

export default AuthenticationLoginBody;

import useForm from 'features/form/formHooks';
import FormField from 'features/form/FormField';
import FormButton from 'features/form/FormButton';
import { loginFormConfig, loginFormState } from 'features/authentication/login/loginConstants';
import { loginSubmit } from 'features/authentication/login/loginSlice';

const LoginBody = () => {
  const [loginForm, loginFieldChangeHandler, loginFormSubmitHandler] = useForm(
    loginFormState,
    loginSubmit,
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

export default LoginBody;

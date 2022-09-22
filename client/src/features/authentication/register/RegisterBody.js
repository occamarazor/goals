import { useCallback } from 'react';
import useForm from 'features/form/formHooks';
import FormField from 'features/form/FormField';
import FormButton from 'features/form/FormButton';
import {
  registerFormConfig,
  registerFormState,
} from 'features/authentication/register/registerConstants';
import { registerSubmit } from 'features/authentication/register/registerSlice';

const RegisterBody = () => {
  const [registerForm, registerFieldChangeHandler, registerFormSubmitHandler] = useForm(
    registerFormState,
    registerSubmit,
  );

  const handleRegisterFormSubmit = useCallback(() => {
    const { password, passwordConfirm } = registerForm;

    if (password === passwordConfirm) {
      registerFormSubmitHandler();
    } else {
      // TODO: error notification
      console.log("Passwords don't match");
    }
  }, [registerForm, registerFormSubmitHandler]);

  return (
    <>
      {registerFormConfig.map(({ id, placeholder, type, label }) => (
        <FormField
          key={id}
          id={id}
          placeholder={placeholder}
          type={type}
          label={label}
          value={registerForm[id]}
          changeHandler={registerFieldChangeHandler}
        />
      ))}
      <FormButton title='Sign up' submitHandler={handleRegisterFormSubmit} />
    </>
  );
};

export default RegisterBody;

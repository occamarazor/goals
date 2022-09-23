import useForm from 'features/form/formHooks';
import FormField from 'features/form/FormField';
import FormButton from 'features/form/FormButton';
import { goalsFormConfig, goalsFormState } from 'features/goals/form/goalsFormConstants';
import { goalsFormSubmit } from 'features/goals/form/goalsFormSlice';

const GoalsFormBody = () => {
  const [goalsForm, goalsFieldChangeHandler, goalsFormSubmitHandler] = useForm(
    goalsFormState,
    goalsFormSubmit,
  );

  return (
    <>
      {goalsFormConfig.map(({ id, placeholder, type }) => (
        <FormField
          key={id}
          id={id}
          type={type}
          placeholder={placeholder}
          value={goalsForm[id]}
          changeHandler={goalsFieldChangeHandler}
        />
      ))}

      <FormButton title='Create goal' submitHandler={goalsFormSubmitHandler} />
    </>
  );
};

export default GoalsFormBody;

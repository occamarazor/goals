import FormField from 'features/form/FormField';
import FormButton from 'features/form/FormButton';
import { goalsFormConfig } from 'features/goals/form/goalsFormConstants';
import useGoalsFormSubmit from 'features/goals/form/goalsFormHooks';

const GoalsFormBody = () => {
  const [goalsForm, goalsFieldChangeHandler, goalsFormSubmitHandler] = useGoalsFormSubmit();

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

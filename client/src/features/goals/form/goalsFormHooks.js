import { useSelector } from 'react-redux';
import REQUEST_STATUS_TYPES from 'features/common/commonConstants';
import useForm from 'features/form/formHooks';
import { goalsFormState } from 'features/goals/form/goalsFormConstants';
import { goalsFormSubmit, selectGoalsForm } from 'features/goals/form/goalsFormSlice';

const useGoalsFormSubmit = () => {
  const { status } = useSelector(selectGoalsForm);
  const goalsFormSubmitSuccessful = status === REQUEST_STATUS_TYPES.SUCCESS;

  const [goalsForm, goalsFieldChangeHandler, goalsFormSubmitHandler] = useForm(
    goalsFormState,
    goalsFormSubmit,
    goalsFormSubmitSuccessful,
  );

  return [goalsForm, goalsFieldChangeHandler, goalsFormSubmitHandler];
};

export default useGoalsFormSubmit;

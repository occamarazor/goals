import { useCallback } from 'react';
import FormField from 'features/forms/FormField';
import FormButton from 'features/forms/FormButton';

// TODO: submit goals
const GoalsBody = () => {
  const handleGoalsFormSubmit = useCallback(() => {
    console.log('Submit goals form');
  }, []);

  return (
    <>
      <FormField id='title' placeholder='Goal text' type='text' first />
      <FormField id='time' placeholder='Goal duration' type='text' />
      <FormButton title='Add a goal' handler={handleGoalsFormSubmit} />
    </>
  );
};

export default GoalsBody;

import { useCallback } from 'react';
import FormField from 'features/form/FormField';
import FormButton from 'features/form/FormButton';

// TODO: submit goal
// TODO: goal mode: title
// TODO: goal mode: handler
const GoalsBody = () => {
  const handleGoalsFormSubmit = useCallback(() => {
    console.log('Submit goals form');
  }, []);

  return (
    <>
      <FormField id='title' placeholder='Goal text' type='text' first />
      <FormField id='time' placeholder='Goal duration' type='text' />
      <FormButton title='Create goal' handler={handleGoalsFormSubmit} />
    </>
  );
};

export default GoalsBody;

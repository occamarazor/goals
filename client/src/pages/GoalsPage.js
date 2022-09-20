import FormLayout from 'features/forms/FormLayout';
import GoalsHeader from 'features/goals/GoalsHeader';
import GoalsBody from 'features/goals/GoalsBody';

const GoalsPage = () => {
  const header = <GoalsHeader />;
  const body = <GoalsBody />;

  return <FormLayout header={header} body={body} />;
};

export default GoalsPage;
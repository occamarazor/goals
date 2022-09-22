import FormLayout from 'features/form/FormLayout';
import GoalsHeader from 'features/goals/GoalsHeader';
import GoalsBody from 'features/goals/GoalsBody';
import GoalsList from 'features/goals/GoalsList';

const GoalsPage = () => {
  const header = <GoalsHeader />;
  const body = <GoalsBody />;

  return (
    <>
      <FormLayout header={header} body={body} />
      <GoalsList />
    </>
  );
};

export default GoalsPage;

import FormLayout from 'features/form/FormLayout';
import GoalsFormHeader from 'features/goals/form/GoalsFormHeader';
import GoalsFormBody from 'features/goals/form/GoalsFormBody';
import GoalsList from 'features/goals/list/GoalsList';

const GoalsPage = () => {
  const header = <GoalsFormHeader />;
  const body = <GoalsFormBody />;

  return (
    <>
      <FormLayout header={header} body={body} />
      <GoalsList />
    </>
  );
};

export default GoalsPage;

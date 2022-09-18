import GoalsInfo from 'features/goals/GoalsInfo';
import GoalsForm from 'features/goals/GoalsForm';
import GoalsList from 'features/goals/GoalsList';

const Goals = () => (
  <div className='pt-20'>
    <GoalsInfo />
    <GoalsForm />
    <GoalsList />
  </div>
);

export default Goals;

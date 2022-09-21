import GoalsListItemHeader from 'features/goals/GoalsListItemHeader';
import GoalsListItemBody from 'features/goals/GoalsListItemBody';
import GoalsListItemFooter from 'features/goals/GoalsListItemFooter';

const GoalsListItem = () => (
  <div className='p-4 space-y-2 border-2 border-blue-400 dark:border-blue-300 rounded-xl md:p-8'>
    <GoalsListItemHeader date='Mar 10, 2019' duration='1 h 30 min' />
    <GoalsListItemBody
      title='Take out the trash'
      description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos
      vel non corrupti doloribus voluptatum eveniet'
    />
    <GoalsListItemFooter editTitle='Edit' doneTitle='Done' />
  </div>
);

export default GoalsListItem;

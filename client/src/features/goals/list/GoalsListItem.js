import GoalsListItemHeader from 'features/goals/list/GoalsListItemHeader';
import GoalsListItemBody from 'features/goals/list/GoalsListItemBody';
import GoalsListItemFooter from 'features/goals/list/GoalsListItemFooter';

const GoalsListItem = ({ date, duration, title, description }) => (
  <div className='p-4 space-y-2 border-2 border-blue-400 dark:border-blue-300 rounded-xl md:p-8'>
    <GoalsListItemHeader date={date} duration={duration} />
    <GoalsListItemBody title={title} description={description} />
    <GoalsListItemFooter editTitle='Edit' doneTitle='Done' />
  </div>
);

export default GoalsListItem;

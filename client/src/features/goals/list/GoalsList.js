import GoalsListItem from 'features/goals/list/GoalsListItem';
import useGoalsListSubmit from 'features/goals/list/goalsListHooks';

const GoalsList = () => {
  const list = useGoalsListSubmit();

  return (
    <div className='mx-auto pt-10 px-2 md:px-6 lg:block lg:w-2/3 lg:pt-0 lg:pr-6'>
      <section className='bg-white dark:bg-gray-900'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 gap-2 md:gap-6 md:grid-cols-2 xl:grid-cols-3'>
            {list.map(({ id, date, text, time, note }) => (
              <GoalsListItem key={id} date={date} title={text} duration={time} description={note} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoalsList;

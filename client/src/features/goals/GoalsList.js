import GoalsListItem from 'features/goals/GoalsListItem';

const GoalsList = () => (
  <div className='mx-auto pt-10 px-2 md:px-6 lg:block lg:w-2/3 lg:pt-0 lg:pr-6'>
    <section className='bg-white dark:bg-gray-900'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-2 md:gap-6 md:grid-cols-2 xl:grid-cols-3'>
          <GoalsListItem />
          <GoalsListItem />
          <GoalsListItem />
          <GoalsListItem />
          <GoalsListItem />
          <GoalsListItem />
        </div>
      </div>
    </section>
  </div>
);

export default GoalsList;

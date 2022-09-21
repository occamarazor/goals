import GoalsListItem from 'features/goals/GoalsListItem';

const GoalsList = () => (
  <div className='mx-auto pt-10 pr-0 lg:block lg:w-2/3 lg:pt-0 lg:pr-6'>
    <section className='bg-white dark:bg-gray-900'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 gap-8 xl:gap-8 md:grid-cols-2 xl:grid-cols-3'>
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

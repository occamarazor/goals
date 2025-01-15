import { useCallback } from 'react';

// TODO: edit goal
// TODO: delete goal
const GoalsListItemFooter = ({ editTitle, doneTitle }) => {
  const handleGoalEdit = useCallback(() => {
    console.log('Edit goal');
  }, []);

  const handleGoalDone = useCallback(() => {
    console.log('Delete goal');
  }, []);

  return (
    <div className='flex items-center justify-end'>
      <button
        type='button'
        className='px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40'
        onClick={handleGoalEdit}
      >
        {editTitle}
      </button>

      <button
        type='button'
        className='px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
        onClick={handleGoalDone}
      >
        {doneTitle}
      </button>
    </div>
  );
};

export default GoalsListItemFooter;

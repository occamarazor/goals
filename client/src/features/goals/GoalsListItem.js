const GoalsListItem = () => (
  <div className='p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl'>
    <div className='flex items-center justify-between'>
      <span className='text-sm font-light text-gray-600 dark:text-gray-400'>Mar 10, 2019</span>
      <a
        href='/'
        className='px-3 py-1 text-sm text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500'
      >
        1 h 30 min
      </a>
    </div>

    <h1 className='text-2xl font-semibold text-gray-700 dark:text-white'>Take out the trash</h1>

    <p className='text-gray-500 dark:text-gray-300'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos
      vel non corrupti doloribus voluptatum eveniet
    </p>

    <div className='flex items-center justify-end'>
      <button
        type='button'
        className='px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40'
      >
        Edit
      </button>

      <button
        type='button'
        className='px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
      >
        Done
      </button>
    </div>
  </div>
);

export default GoalsListItem;

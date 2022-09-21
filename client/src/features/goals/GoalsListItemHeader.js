const GoalsListItemHeader = ({ date, duration }) => (
  <p className='flex items-center justify-between'>
    <span className='text-sm font-light text-gray-600 dark:text-gray-400'>{date}</span>
    <span className='px-3 py-1 text-sm text-gray-100 bg-gray-600 rounded'>{duration}</span>
  </p>
);

export default GoalsListItemHeader;

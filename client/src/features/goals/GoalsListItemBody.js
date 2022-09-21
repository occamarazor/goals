const GoalsListItemBody = ({ title, description }) => (
  <>
    <h1 className='text-2xl font-semibold text-gray-700 dark:text-white'>{title}</h1>
    <p className='text-gray-500 dark:text-gray-300'>{description}</p>
  </>
);

export default GoalsListItemBody;

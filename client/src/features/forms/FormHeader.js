const FormHeader = ({ title, subtitle }) => (
  <div className='text-center'>
    <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>{title}</h2>
    <p className='mt-3 text-gray-500 dark:text-gray-300'>{subtitle}</p>
  </div>
);

export default FormHeader;

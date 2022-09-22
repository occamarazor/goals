const FormFooter = ({ title, buttonTitle, buttonHandler }) => (
  <p className='mt-6 text-sm text-center text-gray-400'>
    {`${title} `}
    <button
      type='button'
      className='text-blue-500 focus:outline-none focus:underline hover:underline'
      onClick={buttonHandler}
    >
      {buttonTitle}
    </button>
  </p>
);

export default FormFooter;

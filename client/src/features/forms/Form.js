const Form = ({ header, body, footer }) => (
  <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
    <div className='flex-1'>
      {header}
      <div className='mt-8'>
        <form>{body}</form>
        {footer}
      </div>
    </div>
  </div>
);

export default Form;

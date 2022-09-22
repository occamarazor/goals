/*  eslint-disable jsx-a11y/label-has-associated-control */
const FormField = ({ id, placeholder, type, label, value, changeHandler }) => (
  <div className='mt-6'>
    <label htmlFor={id} className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
      {label || `${id[0].toUpperCase()}${id.slice(1)}`}
    </label>
    <input
      type={type || id}
      name={id}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={changeHandler}
      className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
    />
  </div>
);

export default FormField;

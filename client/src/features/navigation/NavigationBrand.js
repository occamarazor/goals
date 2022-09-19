import { InboxStackIcon } from '@heroicons/react/24/solid';
import { ROOT } from 'configs/routing/routingPaths';
import { useNavigationHandler } from 'features/navigation/navigationHooks';

const NavigationBrand = () => {
  const handleRootNavigate = useNavigationHandler(ROOT);

  return (
    <div className='text-xl font-semibold text-gray-700'>
      <button
        type='button'
        className='flex items-center text-2xl font-bold text-gray-700 transition-colors duration-300 transform  lg:text-3xl hover:text-gray-600 dark:text-white dark:hover:text-gray-300'
        onClick={handleRootNavigate}
      >
        <InboxStackIcon className='w-7 lg:w-9 mr-2 text-inherit' />
        Goals
      </button>
    </div>
  );
};

export default NavigationBrand;

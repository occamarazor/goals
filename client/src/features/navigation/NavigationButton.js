import { Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { useNavigationMenu } from 'features/navigation/navigationHooks';

const NavigationButton = () => {
  const [menuOpen, handleSetMenuOpen] = useNavigationMenu();

  return (
    <div className='flex lg:hidden'>
      <button
        type='button'
        className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
        aria-label='toggle menu'
        onClick={handleSetMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <XMarkIcon className='w-6 h-6 stroke-blue-500' />
        ) : (
          <Bars2Icon className='w-6 h-6 stroke-blue-500' />
        )}
      </button>
    </div>
  );
};

export default NavigationButton;

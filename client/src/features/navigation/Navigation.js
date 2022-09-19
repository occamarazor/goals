import { useState, useCallback } from 'react';
import { InboxStackIcon } from '@heroicons/react/24/solid';
import background from 'assets/background.jpg';
import { ROOT } from 'configs/routing/routingPaths';
import useNavigateHandler from 'features/navigation/navigationHooks';

// TODO: decompose
// TODO: user avatar
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleRootNavigate = useNavigateHandler(ROOT);

  const menuAnimationClasses = isMenuOpen
    ? 'translate-x-0 opacity-100'
    : 'opacity-0 -translate-x-full';

  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);

  // TODO: logout
  const handleLogout = useCallback(() => {
    setIsMenuOpen(false);
    handleRootNavigate();
  }, [handleRootNavigate]);

  return (
    <nav className='fixed w-screen bg-white shadow dark:bg-gray-800'>
      <div className='container px-6 py-4 mx-auto'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <div className='flex items-center justify-between'>
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

            {/* Mobile menu button */}
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                aria-label='toggle menu'
                onClick={handleMenuToggle}
              >
                {!isMenuOpen && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M4 8h16M4 16h16' />
                  </svg>
                )}
                {isMenuOpen && (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='2'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute z-20 inset-x-0 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${menuAnimationClasses}`}
          >
            <div className='flex items-center justify-end mt-4 lg:mt-0'>
              <button
                type='button'
                className='flex items-center hover:border-blue-500'
                onClick={handleLogout}
              >
                <h3 className='mx-2 text-gray-700 dark:text-gray-200'>Logout</h3>
                <div className='w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full hover:border-inherit'>
                  <img src={background} className='object-cover w-full h-full' alt='avatar' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

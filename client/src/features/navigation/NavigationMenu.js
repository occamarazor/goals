import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import user from 'assets/user.png';
import { LOGIN } from 'configs/routing/routingPaths';
import { submitLogout } from 'features/authentication/authenticationSlice';
import { useNavigationHandler, useNavigationMenu } from 'features/navigation/navigationHooks';

const NavigationMenu = () => {
  const dispatch = useDispatch();
  const [menuOpen, handleSetMenuOpen] = useNavigationMenu();
  const handleLoginNavigate = useNavigationHandler(LOGIN);
  const handleMenuClose = handleSetMenuOpen(false);

  const menuAnimationClasses = menuOpen
    ? 'translate-x-0 opacity-100'
    : '-translate-x-full opacity-0 ';

  const handleLogout = useCallback(() => {
    if (menuOpen) {
      handleMenuClose();
    }
    dispatch(submitLogout());
    handleLoginNavigate();
  }, [dispatch, menuOpen, handleMenuClose, handleLoginNavigate]);

  return (
    <div
      className={`absolute z-20 inset-x-0 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${menuAnimationClasses}`}
    >
      <div className='flex items-center justify-end mt-4 lg:mt-0'>
        <button type='button' className='flex items-center' onClick={handleLogout}>
          <h3 className='mx-2 text-gray-700 dark:text-gray-200'>Logout</h3>
          <div className='w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full'>
            <img src={user} className='object-cover w-full h-full' alt='avatar' />
          </div>
        </button>
      </div>
    </div>
  );
};

export default NavigationMenu;

import { useSelector } from 'react-redux';
import { selectAuthentication } from 'features/authentication/authenticationSlice';
import NavigationBrand from 'features/navigation/NavigationBrand';
import NavigationButton from 'features/navigation/NavigationButton';
import NavigationMenu from 'features/navigation/NavigationMenu';

const NavigationLayout = () => {
  const { user } = useSelector(selectAuthentication);

  return (
    <nav className='fixed w-screen bg-white shadow dark:bg-gray-800'>
      <div className='container px-6 py-4 mx-auto'>
        <div className='lg:flex lg:items-center lg:justify-between'>
          <div className='flex items-center justify-between'>
            <NavigationBrand />
            {user && <NavigationButton />}
          </div>
          {user && <NavigationMenu />}
        </div>
      </div>
    </nav>
  );
};

export default NavigationLayout;

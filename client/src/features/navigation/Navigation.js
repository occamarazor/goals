import { InboxStackIcon } from '@heroicons/react/24/solid';
import {
  ArrowRightOnRectangleIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/20/solid';
import { ROOT, LOGIN, REGISTER, LOGOUT } from 'configs/routing/routingPaths';
import useNavigateHandler from 'features/navigation/navigationHooks';

const Navigation = () => {
  const handleRootNavigate = useNavigateHandler(ROOT);
  const handleLoginNavigate = useNavigateHandler(LOGIN);
  const handleRegisterNavigate = useNavigateHandler(REGISTER);
  const handleLogoutNavigate = useNavigateHandler(LOGOUT);

  return (
    <div className='flex justify-center fixed w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg'>
      <div className='flex items-center w-full max-w-screen-2xl px-2'>
        <div className='flex-grow '>
          <button
            className='flex p-0 border-none bg-transparent text-black'
            onClick={handleRootNavigate}
          >
            <InboxStackIcon className='w-8 sm:w-10 mr-2' />
            <h1 className='text-2xl sm:text-4xl font-bold'>Goals</h1>
          </button>
        </div>
        <button
          className='flex justify-between items-center mr-2 border-none bg-transparent text-black'
          onClick={handleLoginNavigate}
        >
          <ArrowRightOnRectangleIcon className='w-5 mr-2' />
          Sign in
        </button>
        <button className='flex justify-between items-center' onClick={handleRegisterNavigate}>
          <UserIcon className='w-4 mr-2' />
          Sign up
        </button>
        <button
          className='flex justify-between items-center border-black bg-black hover:text-black'
          onClick={handleLogoutNavigate}
        >
          <ArrowLeftOnRectangleIcon className='w-4 mr-2' />
          Sign out
        </button>
      </div>
    </div>
  );
};

export default Navigation;

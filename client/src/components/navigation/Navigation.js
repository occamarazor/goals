import { InboxStackIcon } from '@heroicons/react/24/solid';
import {
  ArrowRightOnRectangleIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/20/solid';

const Navigation = () => (
  <div className='flex justify-center fixed w-screen h-[80px] z-10 bg-zinc-200 drop-shadow-lg'>
    <div className='flex items-center w-full max-w-screen-2xl px-2'>
      <div className='flex flex-grow mr-4'>
        <InboxStackIcon className='w-8 sm:w-10 mr-2' />
        <h1 className='text-2xl sm:text-4xl font-bold'>Goals</h1>
      </div>
      <button className='flex justify-between items-center mr-2 border-none bg-transparent text-black'>
        <ArrowRightOnRectangleIcon className='w-5 mr-2' />
        Sign in
      </button>
      <button className='flex justify-between items-center'>
        <UserIcon className='w-4 mr-2' />
        Sign up
      </button>
      <button className='flex justify-between items-center border-black bg-black hover:text-black'>
        <ArrowLeftOnRectangleIcon className='w-4 mr-2' />
        Sign out
      </button>
    </div>
  </div>
);

export default Navigation;

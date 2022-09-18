import { PuzzlePieceIcon } from '@heroicons/react/24/solid';

const AppLoader = () => (
  <div className='flex justify-center h-screen pt-[80px] bg-white dark:bg-gray-900'>
    <PuzzlePieceIcon className='animate-pulse w-28 text-gray-700 dark:text-gray-300' />
  </div>
);

export default AppLoader;

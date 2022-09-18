import { PuzzlePieceIcon } from '@heroicons/react/24/solid';

const AppLoader = () => (
  <div className='flex justify-center h-screen pt-[80px]'>
    <PuzzlePieceIcon className='animate-pulse w-28' />
  </div>
);

export default AppLoader;

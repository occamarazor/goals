import { Outlet } from 'react-router-dom';

const AuthenticationLayout = () => (
  <div className='bg-white dark:bg-gray-900'>
    <div className='flex justify-center h-screen pt-[80px]'>
      <div className='hidden bg-[url("assets/background.jpg")] bg-cover lg:block lg:w-2/3'>
        <div className='flex items-center h-full px-20 bg-gray-900 bg-opacity-40'>
          <div>
            <h2 className='text-4xl font-bold text-white'>Prioritize.</h2>
            <p className='max-w-sm mt-3 text-gray-300'>
              A goal is not always meant to be reached; it often serves simply as something to aim
              at.
            </p>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  </div>
);

export default AuthenticationLayout;

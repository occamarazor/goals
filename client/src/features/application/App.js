import AppHeader from 'features/application/AppHeader';
import AppMain from 'features/application/AppMain';
import AppFooter from 'features/application/AppFooter';

const App = () => (
  <>
    <AppHeader />

    <div className='flex justify-center pt-[80px]'>
      <div className='max-w-screen-2xl px-2 pt-20'>
        <AppMain />
        <AppFooter />
      </div>
    </div>
  </>
);

export default App;

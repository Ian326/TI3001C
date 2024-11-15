import { useLocation } from 'react-router-dom';
import { SideBar } from './Sidebar';
import Header from './Header';

const Layout = () => {
  const location = useLocation();

  const pathToText = () => {

    if (location.pathname === '/home') return 'TDR Dashboard';
    if (location.pathname === '/insights') return 'Data Insights';
    if (location.pathname === '/graphics') return 'Graphics & Charts';

  };

  return (
    <main className='flex w-screen h-screen overflow-auto'>
      <SideBar />
      <div className='flex flex-col w-full lg:h-screen lg:overflow-auto flex-1 pt-8 md:pt-0 px-5 md:px-10 pb-5 md:pb-1 min-h-0'>
        <Header pageTitle={pathToText()} />
        <section className='flex flex-col flex-1 mt-2 pb-2 lg:overflow-y-auto min-h-0 overflow-y-scroll'>
        </section>
      </div>
    </main>
  );
};

export default Layout;
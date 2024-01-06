import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import SideBar from '../SideBar';
import Container from '../ui/Container';
import About from '../ui/About';

const MainLayout = () => {
  return (
    <Container>
      <div className='drawer'>
        <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
        <div className='drawer-content flex flex-col'>
          {/* Navbar */}
          <div className='w-full navbar bg-base-300'>
            <div className='flex-none lg:hidden'>
              <label
                htmlFor='my-drawer-3'
                aria-label='open sidebar'
                className='btn btn-square btn-ghost'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  className='inline-block w-6 h-6 stroke-current'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  ></path>
                </svg>
              </label>
            </div>
            <Navbar />
          </div>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='my-drawer-3'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <SideBar />
        </div>
      </div>
    </Container>
  );
};

export default MainLayout;

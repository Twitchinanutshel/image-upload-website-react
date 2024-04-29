import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavButtons = () => {
  const linkClass = ({ isActive }) => (
    isActive
      ? 'text-2xl p-4 group underline underline-offset-8 decoration-orange-500'
      : 'text-2xl p-4 group hover:underline underline-offset-8'
  );

  return (
    <>
      <div className='absolute top-0 right-0 mr-4 bg-transparent'>
        <div className='flex space-x-2 text-white text-xl font-josefin'>
          <NavLink
            to='/image-upload-website-react/'
            className={linkClass}
          >
            Home
          </NavLink>

          <NavLink
            to='/images-page'
            className={linkClass}
          >
            All Photos
          </NavLink>

          <NavLink
            to='/add-image'
            className={linkClass}
          >
            Add Photo
          </NavLink>
        </div>
      </div>
      <Outlet />
      <ToastContainer />
    </>

  );
};

export default NavButtons;

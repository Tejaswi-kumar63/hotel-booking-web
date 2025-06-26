import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom'; // ✅ Required for nested routing
import Navbar from '../../components/hotelOwner/Navbar';
import Sidebar from '../../components/hotelOwner/Sidebar';
import { useAppContext } from '../../context/AppContext';

const Layout = () => {


const {isOwner, navigate}= useAppContext()

useEffect(()=>{
  if(!isOwner){
    navigate('/')
  }
},[isOwner])


  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-1 p-4 pt-10 md:px-10 h-full overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

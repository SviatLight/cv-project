import React from 'react';
import Logo from '../assets/logo.png';
import Navbar from './Navbar';
import SideBar from './SideBar';

const MainHeader = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: '50px' }} />
      </div>
      <Navbar />
      <SideBar />
    </div>
  );
};

export default MainHeader;

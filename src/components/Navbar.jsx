import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import MenuItem from './MenuItem';

const menuProperties = [
  {
    title: 'Home',
  },
  {
    title: 'About',
  },
  {
    title: 'Skills',
  },
  {
    title: 'Pet Projects',
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <ul
        className={
          !nav
            ? 'hidden md:flex'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        {menuProperties.map((item, index) => (
          <MenuItem
            key={index}
            setNav={nav ? setNav : null}
            burgerClass={nav ? 'py-6 text-4xl' : null}
            {...item}
          />
        ))}
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={() => setNav(!nav)}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
    </>
  );
};

export default Navbar;

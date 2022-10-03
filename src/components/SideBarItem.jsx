import React from 'react';

const SideBarItem = ({ bgColor, link, title, icon }) => {
  return (
    <li
      className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 ${bgColor}`}
    >
      <a
        className="flex justify-between items-center w-full text-gray-300"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        {title} {icon}
      </a>
    </li>
  );
};

export default SideBarItem;

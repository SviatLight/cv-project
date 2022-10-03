import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import CV from '../assets/CV _ Sviatoslav Sahno.pdf';
import SideBarItem from './SideBarItem';

const socialProperties = [
  {
    bgColor: 'bg-blue-600',
    link: 'https://www.linkedin.com/in/sviatoslav-sahno-20a165236',
    title: 'Linkedin',
    icon: <FaLinkedin size={30} />,
  },
  {
    bgColor: 'bg-[#333333]',
    link: 'https://github.com/SviatLight',
    title: 'GitHub',
    icon: <FaGithub size={30} />,
  },
  {
    bgColor: 'bg-[#6fc2b0]',
    link: 'mailto:alex0fasten@gmail.com',
    title: 'Email',
    icon: <HiOutlineMail size={30} />,
  },
  {
    bgColor: 'bg-[#565f69]',
    link: CV,
    title: 'Resume',
    icon: <BsFillPersonLinesFill size={30} />,
  },
];

const SideBar = () => {
  return (
    <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
      <ul>
        {socialProperties.map((item, index) => (
          <SideBarItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;

import React from 'react';
import { Link } from 'react-scroll';

const MenuItem = ({ title, burgerClass, setNav }) => {
  const handleClick = () => {
    if (setNav) {
      setNav((prev) => !prev);
    }
  };

  return (
    <li className={burgerClass}>
      <Link to={title.toLowerCase()} onClick={handleClick} smooth={true} duration={500}>
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;

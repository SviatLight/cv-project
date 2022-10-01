import React from 'react';

const Header = ({ title, description }) => {
  return (
    <div>
      <p className="text-4xl font-bold inline border-b-4 border-pink-600">{title}</p>
      <p className="py-4">// {description}</p>
    </div>
  );
};

export default Header;

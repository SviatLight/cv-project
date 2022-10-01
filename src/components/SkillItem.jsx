import React from 'react';

const SkillItem = ({ img, title }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
      <img className="w-20 mx-auto" src={img} alt={`${title} icon`} />
      <p className="pt-4">{title}</p>
    </div>
  );
};

export default SkillItem;

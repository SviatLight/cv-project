import React from 'react';

const WorkDescription = ({ projectName, projectDesc, technologies }) => {
  return (
    <div className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-between mx-auto p-4">
      <div>
        <h2 className="text-center text-2xl pb-2 font-bold">{projectName}</h2>
        <p>{projectDesc}</p>
      </div>
      <p className="pt-2">
        <span className="font-bold">Technologies: </span>
        {technologies}
      </p>
    </div>
  );
};

export default WorkDescription;

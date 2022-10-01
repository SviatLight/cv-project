import React from 'react';

const WorkIntroduce = ({ img, title, urlDemo = '', urlCode = '' }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      <div className="opacity-0 group-hover:opacity-100 duration-700">
        <span className="text-2xl font-bold text-white tracking-wider">{title}</span>
        <div className="pt-8 text-center">
          {urlDemo ? (
            <a href={urlDemo}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
          ) : null}
          {urlCode ? (
            <a href={urlCode}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WorkIntroduce;

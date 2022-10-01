import React from 'react';
import WaterControl from '../assets/water-control.jpg';
import OnlineStore from '../assets/online-store.jpg';
import WatchList from '../assets/watch-list.jpg';
import WorkIntroduce from './WorkIntroduce';
import WorkDescription from './WorkDescription';

const WorkSection = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <WorkIntroduce
        img={WaterControl}
        title="React JS Application"
        urlDemo="https://eleks-bootcamp-water-control.netlify.app"
        urlCode="https://github.com/eleks-bootcamp/water-control"
      />
      <WorkDescription
        projectName="Water Control"
        projectDesc={`Developed React App Water Control for improving the quality of life. We created this
          progect as a team. I was on a project as Team Lead. I was improving teamwork, gave my team
          tasks, was nding and bug xing, adding new functionality and improvements.`}
        technologies="ReactJS, HTML, Module CSS, Firebase, PWA"
      />
      <WorkDescription
        projectName="Online Store"
        projectDesc={`I already have finished Eleks bootcamp course. We created online store by means of React. Also we used github for communication in our team. My role on project was like React developer.`}
        technologies="ReactJS, HTML, Module CSS, Redux Toolkit"
      />
      <WorkIntroduce
        img={OnlineStore}
        title="React JS / Redux Application"
        urlDemo="https://online-store-light.netlify.app"
        urlCode="https://github.com/SviatLight/online-store-redux"
      />
      <WorkIntroduce
        img={WatchList}
        title="React JS / Redux Application"
        urlCode="https://github.com/SviatLight/watch-list"
      />
      <WorkDescription
        projectName="Watch List"
        projectDesc={`I created site just for myself. For me this site is very usefull, all my watched movies are in one place. I think this is good Pet Project. I am going to support this project update and implementing new features.`}
        technologies="ReactJS, HTML, CSS, Redux Toolkit, RTK query, React router"
      />
    </div>
  );
};

export default WorkSection;

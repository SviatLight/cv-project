import React from 'react';
import Header from '../components/Header';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Redux from '../assets/redux.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import SkillItem from '../components/SkillItem';

const skillItems = [
  {
    title: 'HTML',
    img: HTML,
  },
  {
    title: 'CSS',
    img: CSS,
  },
  {
    title: 'JavaScript',
    img: JavaScript,
  },
  {
    title: 'React',
    img: ReactImg,
  },
  {
    title: 'Redux',
    img: Redux,
  },
  {
    title: 'Firebase',
    img: FireBase,
  },
  {
    title: 'GitHub',
    img: GitHub,
  },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <Header title="Skills" description="These are the technologies I've worked with" />
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillItems.map((item, index) => (
            <SkillItem key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

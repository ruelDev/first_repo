import React, {useEffect, useRef} from 'react';
import {data} from '../../data';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Index = (props) => {
    const aboutRef = useRef(null);
    const experienceRef = useRef(null);
    const projectsRef = useRef(null);
    const aboutDivRef = useRef(null);
    const experienceDivRef = useRef(null);
    const projectsDivRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              // if (entry.isIntersecting) {
              //   console.log('entry', entry)
              //   console.log(`${entry.target.id} is in the viewport`);
              // } else {
              //   console.log(`${entry.target.id} is out of the viewport`);
              // }
              const targetDiv = entry.target.id === 'about' ? aboutDivRef.current :
                  entry.target.id === 'experience' ? experienceDivRef.current :
                      projectsDivRef.current;
              if (entry.isIntersecting) {
                targetDiv.style.width = '60px'; // Adjust the height as needed
              } else {
                targetDiv.style.width = '30px'; // Adjust the height as needed
              }
            });
          },
          { threshold: 0.05 }
      );

      if (aboutRef.current) observer.observe(aboutRef.current);
      if (experienceRef.current) observer.observe(experienceRef.current);
      if (projectsRef.current) observer.observe(projectsRef.current);

      return () => {
        if (aboutRef.current) observer.unobserve(aboutRef.current);
        if (experienceRef.current) observer.unobserve(experienceRef.current);
        if (projectsRef.current) observer.unobserve(projectsRef.current);
      };
    }, []);
  return (
    <div className={'fixed inset-0 px-20 text-white'}>
      <div className="grid grid-cols-2 grid-rows-1 h-full">
        <div className="py-20 px-5 flex flex-col justify-between">
          <div className="text-start flex flex-col gap-5 text-white">
            <div className="text-3xl  font-bold">{'<Hello World/>'}</div>
            <h1 className="text-6xl font-bold">I'm Ruel Lobo,</h1>
            <h2 className="text-6xl font-bold">Full Stack Web Developer</h2>
            <ul className="mt-10">
              <li className="text-2xl flex items-center gap-3">
                <div ref={aboutDivRef} className="h-[3px] w-[30px] bg-red"></div>About
              </li>
              <li className="text-2xl flex items-center gap-3">
                <div ref={experienceDivRef} className="h-[3px] w-[30px] bg-red"></div>
                Experience
              </li>
              <li className="text-2xl flex items-center gap-3">
                <div ref={projectsDivRef} className="h-[3px] w-[30px] bg-red"></div>
                Projects
              </li>
            </ul>
          </div>
          <ul className="flex gap-5">
            <li className="text-2xl rounded text-blue-pill-text border-blue-pill-text border p-1"><FaLinkedin /></li>
            <li className="text-2xl rounded text-blue-pill-text border-blue-pill-text border p-1"><FaGithub /></li>
            <li className="text-2xl rounded text-blue-pill-text border-blue-pill-text border p-1"><FaEnvelope /></li>
          </ul>
        </div>
        <div className="py-20 px-20 overflow-y-scroll overflow-x-hidden scroll-smooth scroll-hide">
          <div ref={aboutRef} id="about" className="mb-20 flex flex-col text-start gap-5">
            {data.about.content.map((content, index) => (
                <p key={index}>{content}</p>
              ))
            }
          </div>
          <div ref={experienceRef} id="experience" className="flex flex-col">
            {data.experience.map((experience, index) => (
              <div key={index} className="flex justify-start items-start gap-5 mb-20">
                <div className="flex items-center psm mt-1 w-full max-w-[150px]">
                  {experience.date[0]}
                  <span className="mx-2 inline-block rounded-full w-[30px] h-[3px] bg-red"></span>
                  <span className="uppercase">{experience.date[1]}</span>
                </div>
                <div className="flex flex-col gap-3 text-start">
                  <div className="p">{experience.position}</div>
                  {experience.content.map((content, index) => (
                      <p key={index} className="psm">{content}</p>
                    ))
                  }
                  <div className="flex flex-wrap gap-3">
                    {experience.skills.map((skill, index) => (
                        <div key={index} className="bg-blue-pill text-blue-pill-text rounded-full px-5 py-1 font-bold text-sm">{skill}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div ref={projectsRef} id="projects" className="flex flex-col mb-10">
            {data.projects.map((project, index) => (
              <div className="flex gap-5 mb-5">
                <div className="max-w-[150px]">
                  <div className="w-full border border-white-1 p-[1px] rounded">
                    <img src={project.image} alt={project.name} className="w-full rounded" />
                  </div>
                </div>
                <div key={index} className="flex justify-start items-start gap-5 mb-20">
                  <div className="flex items-center psm mt-1">
                    <div className="flex flex-col gap-3 text-start">
                      <div className="p leading-5">{project.name}</div>
                      {project.subTitle && (
                          <p className="psm">{project.subTitle}</p>
                      )}
                      {project.description && (
                        <p className="psm">{project.description}</p>
                      )}
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((technology, index) => (
                            <div key={index} className="bg-blue-pill rounded-full px-5 py-1 font-bold text-sm text-blue-pill-text">{technology}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
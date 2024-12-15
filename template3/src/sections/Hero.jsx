import React from 'react';
import {motion} from "framer-motion";
import {TextGenerateEffect} from "../components/ui/TextGenerate";
import {data} from "../data.jsx";

const Hero = () => {
  return (
      <section id='home' className="relative">
        <img src={`${data.hero.backgroundImage}`} alt='hero' className='absolute top-0 left-0 w-full h-full object-cover'/>
        <div className='absolute inset-0 bg-yellow opacity-70'></div>
        <div className={"container mx-auto flex flex-wrap md:flex-nowrap items-center justify-center gap-10 py-20 relative z-10"}>
          <div className='mt-10 md:mt-0 w-full max-w-[500px] flex items-center justify-center z-10'>
            <motion.img
                src={`${data.hero.image}`}
                alt='hero'
                className='w-6/12 z-10 md:w-11/12'
                animate={{x: [0, -15, 15, 0]}}
                transition={{repeat: Infinity, duration: 0.5, repeatDelay: 3}}
            />
          </div>
          <div className='max-w-[750px] px-5 md:p-0'>
            <h1>
              <TextGenerateEffect
                  words={`${data.hero.title}`}
                  className={`font-bold text-3xl text-center md:text-4xl md:text-start lg:text-6xl`}
              />
            </h1>
            <motion.p
                className='max-w-[600px] tracking-wider py-3 text-center md:text-start'
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.7}}
                style={{color: `${data.theme.dark}`}}
            >{data.hero.description}</motion.p>
            <motion.div
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 1}}
                className='flex gap-3 justify-center md:justify-start'
            >
              {data.hero.buttons.map((button, index) => (
                <a href={`${button.link}`} key={index}>
                  <button
                      className="relative inline-flex h-[40px] overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <span
                      className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                    <span
                        className="inline-flex h-full px-5 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 text-sm font-extrabold tracking-wide uppercase text-white backdrop-blur-3xl">
                        {button.text}
                  </span>
                  </button>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
        {/*<svg className={"absolute -top-[180px] z-0"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">*/}
        {/*  <path fill={`${data.theme.primary}`} fill-opacity="1" d="M0,192L1440,288L1440,0L0,0Z"></path>*/}
        {/*</svg>*/}
        {/*<svg className={"absolute bottom-0 z-0"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">*/}
        {/*  <path fill={`${data.theme.primary}`} fill-opacity="1" d="M0,192L1440,288L1440,320L0,320Z"></path>*/}
        {/*</svg>*/}
      </section>
  );
};

export default Hero;
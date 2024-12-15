import React from 'react';
import {motion} from "framer-motion";
import LitupbordersBtn from "../components/ui/LitupbordersBtn";
import {TextGenerateEffect} from "../components/ui/TextGenerate";
import {data} from "../data.jsx";

const Hero = () => {
  return (
      <section id='home' className="relative" style={{backgroundColor: `${data.theme.secondary}`}}>
        <div className={"container mx-auto md:flex items-center justify-between py-10 relative z-10"}>
          <div className='max-w-[750px]'>
            <h1>
              <TextGenerateEffect
                  words={`${data.hero.title}`}
                  className={`ff-roundy-rainbows font-bold text-4xl md:text-6xl`}
              />
            </h1>
            <motion.p
              className='max-w-[600px] tracking-wider py-3'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              style={{color: `${data.theme.dark}`}}
            >{data.hero.description}</motion.p>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='flex gap-3'
            >
              {data.hero.buttons.map((button, index) => (
                  <a href={button.link} key={index}>
                    <LitupbordersBtn text={button.text} />
                  </a>
              ))}
            </motion.div>
          </div>
          <div className='mt-10 md:mt-0 w-full max-w-[500px] relative z-10'>
            <motion.img
                src={`${data.hero.image}`}
                alt='hero'
                className='w-11/12 z-10'
                animate={{x: [0, -15, 15, 0]}}
                transition={{repeat: Infinity, duration: 0.5, repeatDelay: 3}}
            />
          </div>
        </div>
        <svg className={"absolute bottom-0 z-0"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill={`${data.theme.primary}`}
                d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </section>
  );
};

export default Hero;
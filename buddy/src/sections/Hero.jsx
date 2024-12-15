import React from 'react';
import HeroImg from '../assets/1.svg';
import {motion} from "framer-motion";
import LitupbordersBtn from "../components/ui/LitupbordersBtn";
import {TextGenerateEffect} from "../components/ui/TextGenerate";

const Hero = () => {
  return (
      <section id='home' className="bg-yellow-100 relative">
        <div className={"container mx-auto md:flex items-center justify-between py-10 relative z-10"}>
          <div className='max-w-[750px]'>
            <h1>
              <TextGenerateEffect
                  words={"Fly High with Dragon Doge: The Hottest Meme Coin on + the Blockchain"}
                  className={`ff-roundy-rainbows font-bold text-4xl md:text-6xl`}
              />
            </h1>

            <motion.p
              className='max-w-[600px] tracking-wider py-3'
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >Buy, trade, and laugh your way to the moon with Dragon
              Doge—where fiery gains meet meme magic.</motion.p>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className='flex gap-3'
            >
              <a href="/">
                <LitupbordersBtn text='Telegram'/>
              </a>
              <a href="/">
                <LitupbordersBtn text='Twitter'/>
              </a>
            </motion.div>
          </div>
          <div className='mt-10 md:mt-0 w-full relative z-10'>
            {/*<img src={`${HeroImg}`} alt='hero' className='w-11/12'/>*/}
            <motion.img
                src={`${HeroImg}`}
                alt='hero'
                className='w-11/12 z-10'
                animate={{x: [0, -15, 15, 0]}}
                transition={{repeat: Infinity, duration: 0.5, repeatDelay: 3}}
            />
          </div>
        </div>
        <svg className={"absolute bottom-0 z-0"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#E8B86D" fill-opacity="1"
                d="M0,192L80,202.7C160,213,320,235,480,224C640,213,800,171,960,170.7C1120,171,1280,213,1360,234.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </section>
  );
};

export default Hero;
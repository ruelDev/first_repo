import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./sections/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import './app.css';
import {InfiniteMovingSection} from "./components/ui/InfiniteXscroll";
import {data} from "./data";
import Tokenomiks from "./sections/Tokenomiks";
import HowToBuy from "./sections/HowToBuy";
import {BiMenuAltRight} from "react-icons/bi";

const App = (props) => {
  const [visible, setVisible] = useState(false);

  return (
      <main className={`scroll-smooth`}>
        {/*<AnimatePresence>*/}
        {/*  {visible &&*/}
        {/*      <motion.div*/}
        {/*          className={`ui sidebar visible inverted vertical menu`}*/}
        {/*          initial={{x: '-100%'}}*/}
        {/*          animate={{x: visible ? 0 : '-100%'}}*/}
        {/*          transition={{duration: 0.5}}*/}
        {/*          exit={{x: '-100%', transition: {duration: 0.5}}}*/}
        {/*      >*/}
        {/*        <div className="item mt-10">*/}
        {/*          <div className={`w-[80px] mx-auto`}>*/}
        {/*            <img src={`${data.hero.image}`} alt="side nav logo"/>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*        /!*<a href={`${data.}`} className="item text-center">*!/*/}

        {/*        /!*</a>*!/*/}
        {/*        /!*<a className="item text-center">*!/*/}
        {/*        /!*  3*!/*/}
        {/*        /!*</a>*!/*/}
        {/*        {data.navbar.menus.map((menu, index) => (*/}
        {/*            <a*/}
        {/*                href={`${menu.link}`}*/}
        {/*                key={index}*/}
        {/*                className={"item text-bold tracking-wider text-center"}*/}
        {/*                style={{*/}
        {/*                  color: `${data.theme.light}`,*/}
        {/*                  transition: "color 0.3s",*/}
        {/*                }}*/}
        {/*                onMouseEnter={(e) => e.target.style.color = `${data.theme.accent}`}*/}
        {/*                onMouseLeave={(e) => e.target.style.color = `${data.theme.light}`}*/}
        {/*            >*/}
        {/*              {menu.text}*/}
        {/*            </a>*/}
        {/*        ))}*/}
        {/*        <div className={"flex justify-center"}>*/}
        {/*          <a href={''}>*/}
        {/*            <button*/}
        {/*                className="relative mt-3 inline-flex h-[40px] overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">*/}
        {/*                <span*/}
        {/*                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>*/}
        {/*              <span*/}
        {/*                  className="inline-flex h-full px-5 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 text-sm font-bold tracking-wide uppercase text-white backdrop-blur-3xl">*/}
        {/*                  Buy $Wolf*/}
        {/*                </span>*/}
        {/*            </button>*/}
        {/*          </a>*/}
        {/*        </div>*/}
        {/*      </motion.div>*/}
        {/*  }*/}
        {/*</AnimatePresence>*/}
        {/*<Navbar handleHamburger={() => setVisible(!visible)}/>*/}
        <div className="fixed top-5 right-5 z-20 flex flex-col justify-end items-end gap-3">
          {data.navbar.button.map((button, index) => (
            <a href={`${button.link}`} key={index}>
              <button
                  className={`px-2 py-2 w-fit text-1xl md:text-3xl border-2 border-black dark:border-white uppercase bg-yellow text-black transition duration-200 shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]`}
              >
                {button.text && button.text}
                {button.image &&
                    <img src={`${button.image}`} className="w-[28px]"/>
                }
              </button>
            </a>
          ))}
        </div>
        <div>
          <Hero/>
          {/*<InfiniteMovingSection/>*/}
          <Tokenomiks/>
          <About/>
          {/*<InfiniteMovingSection/>*/}
          <HowToBuy/>
          <Footer/>
        </div>
      </main>
  );
};

export default App;

import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Drogenomics from "./sections/Drogenomics";
import About from "./sections/About";
import Dexscreener from "./sections/Dexscreener";
import Footer from "./sections/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import './app.css';
import {InfiniteMovingSection} from "./components/ui/InfiniteXscroll";
import {data} from "./data";
import HowToBuy from "./sections/HowToBuy";

const App = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <main className={`scroll-smooth`}>
      <AnimatePresence>
        {visible &&
            <motion.div
                className={`ui sidebar visible inverted vertical menu`}
                initial={{x: '-100%'}}
                animate={{x: visible ? 0 : '-100%'}}
                transition={{duration: 0.5}}
                exit={{x: '-100%', transition: {duration: 0.5}}}
            >
              <div className="item mt-10">
                <div className={`w-[80px] mx-auto`}>
                  <img src={`${data.hero.image}`} alt="side nav logo"/>
                </div>
              </div>
              {/*<a href={`${data.}`} className="item text-center">*/}

              {/*</a>*/}
              {/*<a className="item text-center">*/}
              {/*  3*/}
              {/*</a>*/}
              {data.navbar.menus.map((menu, index) => (
                  <a
                      href={`${menu.link}`}
                      key={index}
                      className={"item text-bold tracking-wider text-center"}
                      style={{
                        color: `${data.theme.light}`,
                        transition: "color 0.3s",
                      }}
                      onMouseEnter={(e) => e.target.style.color = `${data.theme.accent}`}
                      onMouseLeave={(e) => e.target.style.color = `${data.theme.light}`}
                  >
                    {menu.text}
                  </a>
              ))}
              <div className={"flex flex-col justify-center items-center gap-3 mt-3 "}>
                {data.navbar.button.map((button, index) => (
                  <a href={button.link} key={index}>
                    <button
                        className="relative inline-flex h-[40px] overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                      <span
                          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                                <span
                                    className="inline-flex h-full px-5 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 text-sm font-bold tracking-wide uppercase text-white backdrop-blur-3xl">
                        {button.text}
                      </span>
                    </button>
                  </a>
                ))}
              </div>
            </motion.div>
        }
      </AnimatePresence>
      <Navbar handleHamburger={() => setVisible(!visible)}/>
      <div>
        <Hero/>
        <Drogenomics/>
        <HowToBuy/>
        <About/>
        <InfiniteMovingSection/>
        <Dexscreener/>
        <Footer/>
      </div>
    </main>
  );
};

export default App;

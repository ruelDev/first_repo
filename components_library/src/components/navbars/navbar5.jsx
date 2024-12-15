import React, {useState} from 'react';
import logo from "../../assets/logos/redlogo2.png";
import mySvg from "../../assets/svgs/icons8-telegram-app.svg";
import {HiMenuAlt3} from "react-icons/hi";
import {AnimatePresence, motion} from "framer-motion";

const Navbar5 = (props) => {
  const [visible, setVisible] = useState(false);

  return (
      <section className={" bg-white-1 py-3 lg:px-10 relative"}>
        <div className="flex gap-3 justify-between">
          <div
              className="bg-yellow-4 px-5 text-black rounded-lg flex justify-between items-center border-2 border-black shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]">
            <div className="w-full max-w-[90px]">
              <img src={`${logo}`} alt="" className="w-full"/>
            </div>
          </div>
          <div className={`flex gap-2`}>
            <button
                className={"text-black tracking-wide text-nowrap  bg-purple-1 px-2 border-2 border-black-1 rounded-lg shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"}>
              <img src={mySvg} alt="Buy now" className="inline-block mr-2"/>
            </button>
            <button
                onClick={() => setVisible(!visible)}
                className={"bg-red-2 text-black font-bold tracking-wide text-2xl text-nowrap px-5 border-2 border-black-1 rounded-lg shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"}>
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
        <AnimatePresence>
          {visible &&
            <motion.div
              initial={{x: '100%', y: '10px'}}
              animate={{x: visible ? 0 : '100%'}}
              transition={{duration: 0.5}}
              exit={{ x: '150%', transition: { duration: 0.5 } }}
              className="absolute bg-white top-full right-10 border-2 border-black-1 p-5 rounded-lg z-10">
              <div className="flex flex-col items-start gap-2 w-full md:w-[20vw]">
                <a href="#" className="text-black-1 font-bold tracking-wide hover:text-black-1">Home</a>
                <a href="#" className="text-black-1 font-bold tracking-wide hover:text-black-1">About</a>
                <a href="#" className="text-black-1 font-bold tracking-wide hover:text-black-1">Community</a>
                <a href="#" className="text-black-1 font-bold tracking-wide hover:text-black-1">Tokenomics</a>
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </section>
  );
};

export default Navbar5;
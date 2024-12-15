import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Drogenomics from "./sections/Drogenomics";
import About from "./sections/About";
import Dexscreener from "./sections/Dexscreener";
import Footer from "./sections/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import './app.css';

const App = (props) => {
  const [visible, setVisible] = useState(false);

  return (
    <main>
      <AnimatePresence>
        {visible &&
        <motion.div
            className={`ui sidebar visible inverted vertical menu`}
            initial={{x: '-100%'}}
            animate={{x: visible ? 0 : '-100%'}}
            transition={{duration: 0.5}}
            exit={{ x: '-100%', transition: { duration: 0.5 } }}
        >
          <a className="item">
            1
          </a>
          <a className="item">
            2
          </a>
          <a className="item">
            3
          </a>
        </motion.div>
        }
      </AnimatePresence>
      <Navbar handleHamburger={() => setVisible(!visible)}/>
      <div>
        <Hero/>
        <Drogenomics/>
        <About/>
        <Dexscreener/>
          <Footer/>
        </div>
    </main>
  );
};

export default App;

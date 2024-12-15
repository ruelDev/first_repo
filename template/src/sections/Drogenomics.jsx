import React from 'react';
import {HoverEffect} from "../components/ui/CardHoverEffect";
import {motion} from "framer-motion";
import {data} from "../data";

const Drogenomics = () => {
  return (
    <section style={{backgroundColor: `${data.theme.primary}`}}>
      <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: .4 }}
          className='container mx-auto py-20'>
        <h2 className={`uppercase text-4xl md:text-6xl text-center font-bold mb-10 ff-roundy-rainbows`} style={{color: `${data.theme.light}`}}>{data.tokenomics.title}</h2>
        <HoverEffect items={data.tokenomics.details}/>
      </motion.div>
    </section>
  );
};

export default Drogenomics;
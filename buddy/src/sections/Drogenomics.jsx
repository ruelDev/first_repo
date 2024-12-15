import React from 'react';
import {HoverEffect} from "../components/ui/CardHoverEffect";
import {motion} from "framer-motion";

const Drogenomics = () => {
  return (
    <section className='bg-brown'>
      <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: .4 }}
          className='container mx-auto py-20'>
        <h2 className={`uppercase text-4xl md:text-6xl text-center text-black-100 font-bold mb-10 ff-roundy-rainbows`}>Drogenomics</h2>
        <HoverEffect items={projects}/>
      </motion.div>
    </section>
  );
};

export const projects = [
  {
    title: "0%",
    description: "Buy Tax",
    link: "https://stripe.com",
  },
  {
    title: "0%",
    description:
        "Sell Tax",
    link: "https://netflix.com",
  },
  {
    title: "100%",
    description:
        "LP Burnt",
    link: "https://google.com",
  }];

export default Drogenomics;
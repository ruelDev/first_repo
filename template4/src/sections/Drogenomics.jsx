import React from 'react';
import {CardDescription, CardTitle} from "../components/ui/CardHoverEffect";
import {motion} from "framer-motion";
import {data} from "../data";

const Drogenomics = () => {
  return (
    <section style={{backgroundColor: `${data.theme.secondary}`}}>
      <div className={`container mx-auto flex justify-center items-center gap-5 py-20`}>
        <div className='upper-layer p-10 rounded-lg'>
          <h2 className={`uppercase text-4xl md:text-6xl text-center font-bold mb-10 md:mb-20 ff-roundy-rainbows`}
              style={{
                color: `${data.theme.primary}`
              }}
          >
            {data.tokenomics.title}
          </h2>
          <div className={"grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3"}>
            {data.tokenomics.details.map((item, idx) => (
                <div
                    className={"rounded-2xl h-full w-full p-4 py-20 overflow-hidden border border-transparent group-hover:border-slate-700 relative z-20"}
                    style={{
                      backgroundColor: `${idx % 2 === 0 ? data.theme.secondary : data.theme.primary}`
                    }}
                >
                  <div className="relative z-50">
                    <div className="p-4">
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </div>
        <div className='mt-10 md:mt-0 w-full max-w-[500px] flex items-center justify-center z-10'>
          <img
              src={`${data.tokenomics.image}`}
              alt='hero'
              className='w-6/12 z-10 md:w-11/12'
          />
        </div>
      </div>
    </section>
  );
};

export default Drogenomics;
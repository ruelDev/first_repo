import React from 'react';
import {data} from "../data";

const HowToBuy = (props) => {
  return (
      <section
          className={`relative`}
        id={`howToBuy`}
       style={{
         backgroundColor: `${data.theme.dark}`,
         backgroundImage: `url(${data.howToBuy.backgroundImage})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
       }}
      >
        <div className='absolute inset-0 bg-yellow opacity-70'></div>
        <div className="container mx-auto py-20 z-10 relative">
          <h2 className={`text-center text-4xl md:text-6xl`}>{data.howToBuy.title}</h2>
          <div className={`flex flex-col gap-5`}>
            {data.howToBuy.steps.map((step, index) => (
                <div
                    style={{
                      backgroundColor: `${data.theme.primary}`,
                      color: `${data.theme.light}`,
                    }}
                    className={`flex items-stretch rounded-lg justify-start border border-2 p-0 border-black-100 w-full gap-5 mx-auto max-w-[700px]`}>
                  <div
                      className={`border-black-100 flex items-center justify-center border-r-2 w-full p-5 max-w-[80px] md:max-w-[100px]`}>
                    <h3 className={`text-2xl font-bold text-center`}>0{index + 1}</h3>
                  </div>
                  <div className="p-5">
                    <p className={`text-start`}>{step.description}</p>
                  </div>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default HowToBuy;
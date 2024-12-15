import React from 'react';
import {data} from "../data";

const HowToBuy = (props) => {
  return (
      <section id={`howToBuy`}
        style={{
          backgroundImage: `url(${data.howToBuy.backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="container mx-auto py-20">
          <h2 className={`text-center text-4xl md:text-6xl mb-10`}>{data.howToBuy.title}</h2>
          <div className={`flex flex-col gap-5`}>
            {data.howToBuy.steps.map((step, index) => (
              <div className={`grid grid-cols-6  p-0 w-full gap-5 mx-auto max-w-[700px]`}>
                <div
                    style={{
                      backgroundColor: `${data.theme.primary}`,
                      color: `${data.theme.dark}`,
                    }}
                    className={`col ${index % 2 === 0 ? 'col-start-1 col-span-6 md:col-start-1 md:col-span-5' : 'col-start-1 col-span-6 md:col-start-2 md:col-span-6'} flex items-stretch justify-start border-2 border-black-100 rounded-lg`}>
                  <div
                      className={`${index % 2 === 0 ? 'flex' : 'hidden'} border-black-100  items-center justify-center border-r-2 w-full p-5 max-w-[80px] md:max-w-[100px]`}>
                    <img src={`${step.image}`} alt="step" className={`w-full`}/>
                  </div>
                  <div className="p-5">
                    <p className={`text-start`}>{step.description}</p>
                  </div>
                  <div
                      className={`${index % 2 === 0 ? 'hidden' : 'flex'} border-black-100 flex items-center justify-center border-l-2 w-full p-5 max-w-[80px] md:max-w-[100px]`}>
                    <img src={`${step.image}`} alt="step" className={`w-full`}/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default HowToBuy;
import React from 'react';
import {data} from "../data";
import mySvg from "../assets/svgs/icons8-telegram.svg";

const Footer = () => (
    <setion id='footer' className={"relative"}>
      <img src={`${data.hero.backgroundImage}`} alt='footer'
           className='absolute top-0 left-0 w-full h-full object-cover  z-0'/>
      <div className='absolute inset-0 opacity-70 bg-yellow'></div>
      <div className='text-center py-40 z-10 relative'>
        <h2 className={`font-bold text-black-100 text-4xl md:text-7xl mb-5 ff-roundy-rainbows`}>
          {data.footer.title}Join Our <span style={{
            color: `${data.theme.primary}`,
        }}>Community</span></h2>
        <div className="px-5 mb-5">
          {data.footer.paragraph &&
            <p className='text-black-100 text-lg text-wrap max-w-[800px] mx-auto'>{data.footer.paragraph}</p>
          }
        </div>
        <div className='flex flex-wrap justify-center gap-3'>
          {data.footer.buttons.map((button, index) => (
            <a href={`${button.link}`} >
              <button
                  key={index}
                  className="relative inline-flex px-[2px] h-[50px] w-[50px] overflow-hidden rounded-full py-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className={`absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]`}/>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <img src={mySvg} alt="Buy now" className="inline-block"/>
                </span>
              </button>
            </a>
          ))}
        </div>
      </div>
      <div
        className="bg-black-100 uppercase text-center text-yellow py-10 relative z-10 border-t-2"
        style={{
          backgroundColor: `${data.theme.dark}`,
          color: `${data.theme.accent}`
        }}
      >
        {data.footer.appName} &copy; 2024 | All Rights Reserved
      </div>
    </setion>
);

export default Footer;
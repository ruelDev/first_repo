import React from 'react';
import LitupbordersBtn from "../components/ui/LitupbordersBtn";
import {data} from "../data";

const Footer = () => (
  <setion id='footer'>
    <div
      className='text-center py-40 z-0 mt-10'
      style={{
        backgroundColor: `${data.theme.primary}`,
        color: `${data.theme.accent}`
    }}
    >
      <h2 className={`font-bold text-4xl md:text-7xl mb-5 ff-roundy-rainbows`}>{data.footer.title}</h2>
      <div className='flex flex-wrap justify-center gap-3'>
        {data.footer.buttons.map((button, index) => (
            <a href={`${button.link}`} key={index}>
              <LitupbordersBtn text={`${button.text}`}/>
            </a>
        ))}
      </div>
    </div>
    <div
      className="bg-black-100 uppercase text-center text-yellow py-10"
      style={{
        backgroundColor: `${data.theme.dark}`,
          color: `${data.theme.accent}`
      }}
    >
      {data.footer.appName} &copy; 2024
    </div>
  </setion>
);

export default Footer;
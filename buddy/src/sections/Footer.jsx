import React from 'react';
import LitupbordersBtn from "../components/ui/LitupbordersBtn";

const Footer = () => (
  <setion id='footer' className="bg-yellow">
    <div className='text-center bg-yellow py-40 rounded-lg z-0 mt-10'>
      <h2 className={`text-black font-bold text-4xl md:text-7xl mb-5 ff-roundy-rainbows`}>Join Our Community</h2>
      <div className='flex flex-wrap justify-center gap-3'>
        <a href="/">
          <LitupbordersBtn text='Join Now'/>
        </a>
        <a href="/">
          <LitupbordersBtn text='Follow on Twitter'/>
        </a>
      </div>
    </div>
    <div className="bg-black-100 uppercase text-center text-yellow py-10">
      Droge &copy; 2024
    </div>
  </setion>
);

export default Footer;
import React from 'react';
import logo from '../../assets/logos/redlogo2.png'
import FigmaBtn from "../ui/FigmaBtn";

const Navbar1 = (props) => {
  return (
    <section className={" bg-red-1 py-3 lg:px-10"}>
      <div className="container mx-auto bg-black-1 text-white px-10 py-1 rounded-full flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="w-full max-w-[90px]">
            <img src={`${logo}`} alt="" className="w-full"/>
          </div>
          <span className={`tracking-wide`}>Navbar1</span>
        </div>

        <div className="flex items-center gap-2">
          <a href="#" className="text-white font-bold tracking-wide hover:text-yellow-2">Home</a>
          <a href="#" className="text-white font-bold tracking-wide hover:text-yellow-2">About</a>
          <a href="#" className="text-white font-bold tracking-wide hover:text-yellow-2">Community</a>
          <a href="#" className="text-white font-bold tracking-wide hover:text-yellow-2">Tokenomics</a>
        </div>

        <FigmaBtn text={'Buy Now'} className={'bg-yellow-2 text-black-1 rounded-full'} />
      </div>
    </section>
  );
};

export default Navbar1;
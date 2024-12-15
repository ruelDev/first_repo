import React from 'react';
import logo from "../../assets/logos/redlogo2.png";
import mySvg from "../../assets/svgs/icons8-telegram-app.svg";

const Navbar3 = (props) => {
  return (
    <section className={" bg-yellow-3 py-3 lg:px-10"}>
      <div className="flex gap-3">
        <div
            className="bg-yellow-4 mx-auto px-5 text-black rounded-lg flex justify-between items-center border-2 border-black w-full shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]">
          <div className="flex gap-2 items-center">
            <div className="w-full max-w-[90px]">
              <img src={`${logo}`} alt="" className="w-full"/>
            </div>
            <span className={`tracking-wide`}>Transparent bg</span>
          </div>

          <div className="flex items-center gap-2">
            <a href="#" className="text-black font-bold tracking-wide hover:text-yellow-2">Home</a>
            <a href="#" className="text-black font-bold tracking-wide hover:text-yellow-2">About</a>
            <a href="#" className="text-black font-bold tracking-wide hover:text-yellow-2">Community</a>
            <a href="#" className="text-black font-bold tracking-wide hover:text-yellow-2">Tokenomics</a>
          </div>
        </div>
        <button
            className={"text-black tracking-wide hover:text-yellow-2 text-nowrap  bg-yellow-4 px-2 border-2 border-black-1 rounded-lg shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"}>
          <img src={mySvg} alt="Buy now" className="inline-block mr-2"/>
        </button>
        <button
            className={"bg-yellow-4 text-black font-bold tracking-wide hover:text-yellow-2 text-nowrap px-5 border-2 border-black-1 rounded-lg shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"}>Buy now</button>
      </div>
    </section>
  );
};

export default Navbar3;
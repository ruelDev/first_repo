import React from 'react';
import logo from "../../assets/logos/redlogo2.png";
import mySvg from "../../assets/svgs/icons8-telegram-app.svg";

const Navbar4 = (props) => {
  return (
      <section className={" bg-white-1 py-3 lg:px-10"}>
        <div className="flex gap-3 justify-between">
          <div
              className="bg-yellow-4 px-5 text-black rounded-lg flex justify-between items-center border-2 border-black shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]">
            <div className="w-full max-w-[90px]">
              <img src={`${logo}`} alt="" className="w-full"/>
            </div>
          </div>
          <div className={`flex gap-2`}>
            <button
                className={"text-black tracking-wide hover:text-yellow-2 text-nowrap  bg-green-3 px-5 border-2 border-black-1 rounded-lg shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"}>
              About
            </button>
            <button
                className={"text-black tracking-wide hover:text-yellow-2 text-nowrap  bg-blue-1 px-5 border-2 border-black-1 rounded-lg shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"}>
              Tokenomics
            </button>
            <button
                className={"text-black tracking-wide hover:text-yellow-2 text-nowrap  bg-purple-1 px-2 border-2 border-black-1 rounded-lg shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"}>
              <img src={mySvg} alt="Buy now" className="inline-block mr-2"/>
            </button>
            <button
                className={"bg-red-2 text-black font-bold tracking-wide hover:text-yellow-2 text-nowrap px-5 border-2 border-black-1 rounded-lg shadow-[2px_2px_1px_1px_rgba(0,0,0,1)]"}>Buy
              now
            </button>
          </div>
        </div>
      </section>
  );
};

export default Navbar4;
import React from 'react';
import logo from "../../assets/logos/redlogo2.png";
import FigmaBtn from "../ui/FigmaBtn";

const Navbar2 = (props) => {
  return (
    <section className={" bg-transparent py-3 lg:px-10"}>
      <div
          className=" mx-auto text-black rounded-full flex justify-between items-center">
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
          <button className={"text-black font-bold tracking-wide hover:text-yellow-2"}>Buy now</button>
        </div>
      </div>
    </section>
  );
};

export default Navbar2;
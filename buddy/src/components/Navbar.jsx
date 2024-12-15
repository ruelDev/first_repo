import React from 'react';
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = (props) => (
  <nav className={"bg-black-100 border-b-2 border-b-black"}>
    <div className={"container mx-auto flex justify-between items-center py-5"}>
    <div className={"text-white"}>
      <h1 className={"text-2xl font-bold ff-roundy-rainbows"}>$DROGE</h1>
    </div>
    <div className={"flex items-center"}>
      <a href={"/"} className={"text-bold hover:text-yellow tracking-wider text-white"}>Home</a>
      <a href={"#about"} className={"text-bold hover:text-yellow tracking-wider text-white ml-4"}>About</a>
      <a href={"#footer"} className={"text-bold hover:text-yellow tracking-wider text-white ml-4"}>Contact</a>
    </div>
    {false &&
      <button
        className={"text-white text-3xl"}
        onClick={props.handleHamburger}
      >
        <BiMenuAltRight />
      </button>
    }
    </div>
  </nav>
);

export default Navbar;
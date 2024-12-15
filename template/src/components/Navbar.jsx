import React from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import {data} from "../data";

const Navbar = (props) => (
  <nav className={"border-b-2 border-b-black"} style={{backgroundColor: `${data.theme.primary}`}}>
    <div className={"container mx-auto flex justify-between items-center py-5"}>
    <div style={{color: `${data.theme.light}`}}>
      <h1 className={"text-2xl font-bold ff-roundy-rainbows"}>{data.navbar.title}</h1>
    </div>
    <div className={"flex items-center"}>
      {data.navbar.menus.map((menu, index) => (
        <a
          href={`${menu.link}`}
          key={index}
          className={"text-bold tracking-wider ml-4"}
          style={{
            color: `${data.theme.light}`,
            transition: "color 0.3s",
          }}
            onMouseEnter={(e) => e.target.style.color = `${data.theme.accent}`}
          onMouseLeave={(e) => e.target.style.color = `${data.theme.light}`}
        >
          {menu.text}
        </a>
      ))}
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
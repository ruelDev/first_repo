import React from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import {data} from "../data";

const Navbar = (props) => (
  <nav className={"relative z-10"} style={{
      backgroundColor: `${data.theme.secondary}`,
      borderBottom: `1px solid ${data.theme.primary}`,
    }}
  >
    <div className={"container mx-auto flex justify-between items-center py-5"}>
      <div className={`flex gap-3 items-center justify-center`} style={{color: `${data.theme.primary}`}}>
        <img src={`${data.navbar.image}`} width={50}/>
        <h1 className={"text-2xl font-bold mt-0"}>{data.navbar.title}</h1>
      </div>

      <div className={"items-center hidden md:flex font-extrabold"}>
        {data.navbar.menus.map((menu, index) => (
            <a
                href={`${menu.link}`}
                key={index}
                className={"tracking-wider uppercase ml-4"}
                style={{
                  color: `${data.theme.light}`,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) => e.target.style.color = `${data.theme.primary}`}
                onMouseLeave={(e) => e.target.style.color = `${data.theme.light}`}
            >
              {menu.text}
            </a>
        ))}
      </div>

      <div className="hidden md:flex gap-2">
        {data.navbar.button.map((button, index) => (
            <a href={button.link} key={index}>
              <button
                  className="relative inline-flex h-[40px] overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"/>
                <span
                    className="inline-flex h-full px-5 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 py-1 text-sm font-bold tracking-wide uppercase text-white backdrop-blur-3xl">
                {button.text}
              </span>
              </button>
            </a>
        ))}
      </div>

      {data.navbar.hamburger &&
          <button
              className={"text-white text-3xl block md:hidden"}
              onClick={props.handleHamburger}
          >
            <BiMenuAltRight/>
          </button>
      }
    </div>
  </nav>
);

export default Navbar;
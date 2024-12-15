import React from 'react';
import {data} from "../data";
import mySvg from "../assets/svgs/icons8-telegram.svg";
import {FaRegCopy} from "react-icons/fa6";
import {motion} from "framer-motion";
import Swal from "sweetalert2";

const handleCopy = () => {
  navigator.clipboard.writeText(`${data.contractAddress}`);

  Swal.fire({
    icon: "success",
    text: "Contract address copied to clipboard!",
    showConfirmButton: true,
  })
}

const Footer = () => (
    <setion id='footer'>
      <div className='text-center py-40' style={{backgroundColor: `${data.theme.secondary}`}}>
        <h2 className={`font-bold text-white text-2xl md:text-4xl mb-5 ff-roundy-rainbows`}>
          {data.footer.title}Join Our <span style={{
          color: `${data.theme.primary}`,
        }}>Community</span></h2>

        <div className='flex flex-wrap justify-center gap-3 mb-5'>
          {data.footer.buttons.map((button, index) => (
              <a href={`${button.link}`} key={index}>
                <button
                    className="px-8 py-0.5 border-2 border-black dark:border-white uppercase bg-yellow text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                  <img src={`${button.text}`} alt="Buy now" width={30} className="inline-block"/>
                </button>
              </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center w-full gap-3">
          <div
              className={`px-8 py-2 border-2 max-w-[300px] border-black dark:border-white uppercase bg-yellow text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]`}
          >
            <div
                className="text-center m-0 w-full max-w-[300px] overflow-hidden"
            >
              {data.contractAddress}
            </div>
          </div>
          <button
              className={`px-8 py-2 w-fit border-2 border-black dark:border-white uppercase bg-yellow text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]`}
              title={"Copy Contract Address"}
              onClick={() => handleCopy()}
          >
            Copy
          </button>
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
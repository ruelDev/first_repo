import React from 'react';
import {data} from "../data";
import { FaRegCopy } from "react-icons/fa6";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const Tokenomiks = (props) => {

  const handleCopy = () => {
    navigator.clipboard.writeText(`${data.contractAddress}`);

    Swal.fire({
      icon: "success",
      text: "Contract address copied to clipboard!",
      showConfirmButton: true,
    })
  }

  return (
    <section
      id='how-to-buy'
       style={{
         backgroundImage: `url(${data.tokenomics.backgroundImage})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center',
         backgroundRepeat: 'no-repeat',
       }}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center gap-20 py-20">
        <div className="flex flex-col items-center justify-center gap-5 w-full max-w-[400px]">
          <h1 className="text-4xl font-bold text-center">{data.tokenomics.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {data.tokenomics.details.map((detail, index) => (
                <div
                    className=" w-full flex flex-col items-center justify-center px-5 py-10 bg-light border border-black-100 rounded-lg bg-white">
                  <p className="text-center mb-3">{detail.description}</p>
                  <h3 className="text-1xl font-bold m-0">{detail.title}</h3>
                </div>
            ))}
            <div className="col-span-2 bg-white">
              <div className="gap-5 p-5 bg-light border border-black-100 rounded-lg flex items-center justify-center">
                <div
                    className="text-center m-0 w-full max-w-[300px] overflow-hidden"
                >
                  {data.contractAddress}
                </div>
                <motion.button
                    className={`text-2xl`}
                    title={"Copy Contract Address"}
                    whileHover={{scale: 1.1}}
                    onClick={() => handleCopy()}
                >
                  <FaRegCopy/>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center align-bottom w-[300px] md:w-[400px]">
          <motion.img
              src={`${data.tokenomics.image}`}
              alt='hero'
              className=''
              animate={{
                rotateZ: [0, 20, -20, 0],
              }}
              transition={{repeat: Infinity, duration: 0.5, repeatDelay: 3}}
          />
        </div>
      </div>
    </section>
  );
};

export default Tokenomiks;
import React from 'react';
import {CardDescription, CardTitle} from "../components/ui/CardHoverEffect";
import {motion} from "framer-motion";
import {data} from "../data";
import Swal from "sweetalert2";
import { FaRegCopy } from "react-icons/fa6";

const Drogenomics = () => {

  const handleCopy = () => {
    navigator.clipboard.writeText(`${data.contractAddress}`);

    Swal.fire({
      icon: "success",
      text: "Contract address copied to clipboard!",
      showConfirmButton: true,
    })
  }

  return (
    <section style={{backgroundColor: `${data.theme.secondary}`}}>
      <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{once: true, amount: .4}}
          className='container mx-auto py-40'>
        <h2 className={`uppercase text-black-100 text-4xl md:text-6xl text-center font-bold mb-10 md:mb-20 ff-roundy-rainbows`}>
          {data.tokenomics.title}
        </h2>

        <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"}>
          {data.tokenomics.details.map((item, idx) => (
              <div
                  className={"rounded-2xl h-full w-full p-4 py-20 overflow-hidden border border-transparent group-hover:border-slate-700 relative z-20"}
                  style={{
                    backgroundColor: `${idx % 2 === 0 ? data.theme.light : data.theme.primary}`
                  }}
              >
                <div className="relative z-50">
                  <div className="p-4 text-black-100">
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </div>
                </div>
              </div>
          ))}
        </div>
          <div className="mt-5">
            <div
              className="gap-5 p-5 rounded-lg flex items-center text-white   justify-center"
              style={{
                backgroundColor: `${data.theme.primary}`
              }}
            >

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

      </motion.div>
    </section>
  );
};

export default Drogenomics;
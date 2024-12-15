import React from 'react';
import aboutImg from '../assets/dd1.jpg';
import NextjsBtn from "../components/ui/NextjsBtn";
import {motion} from "framer-motion";
import {data} from "../data";
import LitupbordersBtn from "../components/ui/LitupbordersBtn";
import Swal from "sweetalert2";

const About = (props) => {
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
        id='about'
        style={{backgroundColor: `${data.theme.secondary}`}}
    >
      <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{once: true, amount: .3}}
          className="container mx-auto flex items-center justify-between gap-5 py-10">
        <motion.div
            className='flex flex-col gap-5 text-center lg:text-start w-full max-w-[800px]'
            variants={{
              offscreen: {
                x: -500,
              },
              onscreen: {
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.9
                }
              }
            }}
        >
          <h3 className='md:text-2xl text-black-100 ff-shojumaru mb-0'>{data.about.subtitle}</h3>
          <h2
              className={`uppercase text-4xl lg:text-6xl font-bold ff-roundy-rainbows mt-0`}
              style={{color: `${data.theme.primary}`}}
          >
            &#36;{data.about.title}
          </h2>
          <div className='flex lg:hidden justify-center'>
            <img
                src={`${data.about.image}`}
                alt="Hero Image"
                width={400}
            />
          </div>
          {data.about.description.map((desc, index) => (
              <p
                  className={"tracking-wide"}
                  key={index}
                  style={{color: `${data.theme.dark}`}}
              >
                {desc}
              </p>
          ))}


          <div className='flex flex-wrap justify-center md:justify-start gap-3'>
            {data.about.buttons.map((button, index) => (
                <a href={`${button.link}`}>
                  <NextjsBtn
                      text={`${button.text}`}
                      classname='border-2 border-red me-2'/>
                </a>
            ))}
            <button
                onClick={() => handleCopy()}
                className={`border-2 border-red me-2 shadow-[0_4px_14px_0_rgb(255,69,0,39%)] hover:shadow-[0_6px_20px_rgba(255,69,0,23%)] hover:bg-[rgba(255,69,0,0.8)] px-8 py-2 bg-[#FF4500] rounded-md text-white font-bold transition duration-200 ease-linear`}
            >
              Copy Address
            </button>
          </div>
        </motion.div>
        <motion.div
            variants={{
              offscreen: {
                x: 500,
              },
              onscreen: {
                x: 0,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.9
                }
              }
            }}
            className='hidden lg:flex justify-center w-full max-w-[400px]'>
          <img
              src={`${data.about.image}`}
              className={"w-full"}
              alt="Hero Image"
          />
        </motion.div>
      </motion.div>
    </section>
  )
};

export default About;
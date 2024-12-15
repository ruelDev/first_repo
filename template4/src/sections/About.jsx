import React from 'react';
import aboutImg from '../assets/dd1.jpg';
import NextjsBtn from "../components/ui/NextjsBtn";
import {motion} from "framer-motion";
import {data} from "../data";
import LitupbordersBtn from "../components/ui/LitupbordersBtn";
import Swal from "sweetalert2";

const About = (props) => {

  return (
      <section
        id='about'
        className={"relative overflow-hidden z-10 flex justify-center items-center min-h-[700px] shadow-[0px_0px_10px_0px_#000000]"}
          style={{
            backgroundImage: `url(${data.about.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
      >
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{once: true, amount: .3}}
            className="container mx-auto flex flex-col items-center justify-between pt-10"
        >
          <motion.div
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
              className='hidden lg:flex justify-center w-full max-w-[600px]'>
            <img
                src={`${data.about.image}`}
                className={"w-full"}
                alt="Hero Image"
            />
          </motion.div>

          <motion.div
              className='flex flex-col gap-5 text-center lg:text-center w-full max-w-[600px]'
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
          >
            <div className='flex lg:hidden justify-center'>
              <img
                  src={`${data.about.image}`}
                  alt="Hero Image"
                  width={400}
              />
            </div>
            {data.about.description.map((desc, index) => (
              <p
                className={"tracking-wide bg-white-100 p-3 rounded-lg text-lg"}
                key={index}
                style={{color: `${data.theme.dark}`}}
              >
                {desc}
              </p>
            ))}


            <div className='flex flex-wrap justify-center md:justify-start gap-3'>
              {data.about.buttons && data.about.buttons.map((button, index) => (
                <a href={`${button.link}`}>
                  <NextjsBtn
                      text={`${button.text}`}
                      classname='border-2 border-red me-2'/>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
  )
};

export default About;
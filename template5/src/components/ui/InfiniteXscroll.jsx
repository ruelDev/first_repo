"use client";

import { cn } from "../../utils/cn";
import React, { useEffect, useState } from "react";
import { data } from "../../data";

export const InfiniteMovingSection = ({
                                      items,
                                      direction = "left",
                                      speed = "fast",
                                      pauseOnHover = true,
                                      className
                                    }) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
        style={{ backgroundColor: `${data.theme.primary}` }}
        ref={containerRef}
        className={cn(
            "scroller relative z-20 max-w-10xl overflow-hidden",
            className
        )}>
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-5 w-max flex-nowrap",
          start && "animate-scroll ",
        )}
      >
         {data.infiniteScroll.map((item, idx) => (
           <li
             className="w-[350px] max-w-full relative flex-shrink-0 md:w-[450px]"
             key={idx}>
             <div className="flex items-center justify-center gap-4">
               <img src={`${item.image}`} width={50} alt=""/>
               <p className={`text-3xl uppercase font-bolder tracking-wider text-white`}>{item.text}</p>
             </div>
           </li>
         ))}
      </ul>
    </div>
  );
};

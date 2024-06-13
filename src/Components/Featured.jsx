import { motion } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";
const Featured = () => {
  const [isHovering, setHovering] = useState(false);

  return (
    <div data-scroll data-scroll-speed=".2" className="w-full py-20 text-white bg-zinc-800 ">
      <div className="w-full px-20 border-b-[1px] pb-20 border-zinc-600">
        <h1 className='text-8xl font-["Neue_Montreal"] capitalize font-semibold tracking-tight'>
          Featured approach
        </h1>
      </div>
      <div className="px-20">
        <div className="cards  w-full flex gap-10 mt-10 items-center justify-center">
          <div
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="relative cardcontainer   w-1/2 h-[75vh] "
          >
            <h1 className="absolute text-[#cfff32] flex overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2 left-full  z-[9] text-8xl font-semibold  leading-none tracking-tighter uppercase ">
              {"FYDE".split("").map((item, index) => (
              <motion.span
              key={index}
              initial={{ y: "100%" }}
              animate={isHovering ? { y: "0" } : { y: "100%" }}
              transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
              className="inline-block translate-y-full"
            >
              {item}
            </motion.span>
              ))}
            </h1>
            <div data-scroll data-scroll-speed=".1" className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="h-full w-full bg-center bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </div>
          <div
          
           className="relative cardcontainer   w-1/2 h-[75vh] ">
            <h1 className="absolute flex overflow-hidden text-[#cfff32] translate-x-1/2 -translate-y-1/2 top-1/2 right-full  z-[9] text-8xl font-semibold  leading-none tracking-tighter uppercase ">
              {"VISE".split("").map((item, index) => (
                <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={isHovering ? { y: "0" } : { y: "100%" }}
                transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                className="inline-block translate-y-full"
              >
                {item}
              </motion.span>
              ))}
            </h1>
            <div data-scroll data-scroll-speed="-.1" className="card w-full h-full rounded-xl overflow-hidden ">
              <img
                className="h-full w-full bg-center bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

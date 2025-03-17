import { motion } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

const Featured = () => {
  const [isHoveringFyde, setHoveringFyde] = useState(false);
  const [isHoveringVise, setHoveringVise] = useState(false);

  return (
    <div 
      data-scroll 
      data-scroll-speed=".2" 
      className="w-full py-10 sm:py-14 md:py-20 text-white bg-zinc-800"
    >
      {/* Header Section */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 border-b-[1px] pb-10 sm:pb-14 md:pb-20 border-zinc-600">
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-["Neue_Montreal"] capitalize font-semibold tracking-tight'>
          Featured approach
        </h1>
      </div>

      {/* Cards Section */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="cards w-full flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8 md:mt-10 items-center justify-center">
          
          {/* First Card - FYDE */}
          <div
            onMouseEnter={() => setHoveringFyde(true)}
            onMouseLeave={() => setHoveringFyde(false)}
            className="relative cardcontainer w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh]"
          >
            <h1 className="absolute text-[#cfff32] flex overflow-hidden 
                          -translate-y-1/2 top-1/2
                          left-1/2 md:left-full -translate-x-1/2 md:-translate-x-1/2
                          z-[9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none tracking-tighter uppercase">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringFyde ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                  className="inline-block translate-y-full"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div 
              data-scroll 
              data-scroll-speed=".1" 
              className="card w-full h-full rounded-lg sm:rounded-xl overflow-hidden"
            >
              <img
                className="h-full w-full object-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Fyde Illustration"
              />
            </div>
          </div>
          
          {/* Second Card - VISE */}
          <div
            onMouseEnter={() => setHoveringVise(true)}
            onMouseLeave={() => setHoveringVise(false)}
            className="relative cardcontainer w-full md:w-1/2 h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh]"
          >
            <h1 className="absolute text-[#cfff32] flex overflow-hidden 
                          -translate-y-1/2 top-1/2
                          left-1/2 md:right-full md:left-auto -translate-x-1/2 md:translate-x-1/2
                          z-[9] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-none tracking-tighter uppercase">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%" }}
                  animate={isHoveringVise ? { y: "0" } : { y: "100%" }}
                  transition={{ ease: Power4.easeInOut, delay: index * 0.1 }}
                  className="inline-block translate-y-full"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div 
              data-scroll 
              data-scroll-speed="-.1" 
              className="card w-full h-full rounded-lg sm:rounded-xl overflow-hidden"
            >
              <img
                className="h-full w-full object-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Vise Front"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
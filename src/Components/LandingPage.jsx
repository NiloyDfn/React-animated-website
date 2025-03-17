import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed="-.3" 
      className="w-full h-screen bg-zinc-900 pt-1 overflow-hidden"
    >
      <div className="textstructure mt-20 md:mt-32 lg:mt-52 px-4 sm:px-8 md:px-12 lg:px-20">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => (
          <div key={index} className="masker">
            <div 
              data-scroll 
              data-scroll-speed=".2" 
              className="w-fit flex flex-end overflow-hidden"
            >
              {index === 1 && (
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "20vw", maxWidth: "120px" }} 
                  transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }} 
                  className="h-12 sm:h-16 md:h-20 lg:h-[5.5vw] relative top-1 sm:top-2 md:top-[.7vw] overflow-hidden rounded-md mr-2 sm:mr-3 md:mr-[1vw]"
                >
                  <img
                    className="h-full w-full bg-cover bg-center"
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt=""
                  />
                </motion.div>
              )}
              <h1
                className='leading-tight sm:leading-tight md:leading-[6.5vw] tracking-tighter uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[7.5vw] font-["Founders_Grotesk"] font-semibold'
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      
      <div className="border-t-[1px] border-zinc-700 mt-8 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 sm:py-5 px-4 sm:px-8 md:px-12 lg:px-20 gap-4 sm:gap-0">
        <div className="flex flex-col sm:flex-row sm:gap-8 mb-4 sm:mb-0">
          {["For Public & Private companies", "from the first pitch to IPO"].map(
            (item, i) => (
              <p
                key={i}
                className="text-xs sm:text-sm md:text-md font-light uppercase tracking-tight leading-none mb-2 sm:mb-0"
              >
                {item}
              </p>
            )
          )}
        </div>
        
        <div className="start flex items-center gap-3 sm:gap-5">
          <div className="px-3 sm:px-5 py-2 border-[1px] border-zinc-500 font-light capitalize text-xs sm:text-sm rounded-full whitespace-nowrap">
            Start the project
          </div>

          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-[1px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUp size={12} className="sm:text-base" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
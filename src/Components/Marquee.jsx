import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".1" 
      className="w-full py-5 sm:py-8 md:py-10 lg:py-14 rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl rounded-tr-xl sm:rounded-tr-2xl md:rounded-tr-3xl bg-[#004C42]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden items-start justify-start uppercase tracking-tight leading-none font-semibold whitespace-nowrap">
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", duration: 10, repeat: Infinity }} 
          className='text-[15vw] sm:text-[18vw] md:text-[20vw] leading-none pr-10 sm:pr-16 md:pr-20 font-["Founders_Grotesk_X_Condensed"]'
        >
          we are ochi
        </motion.h1>
        <motion.h1 
          initial={{ x: "0" }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", duration: 10, repeat: Infinity }} 
          className='text-[15vw] sm:text-[18vw] md:text-[20vw] leading-none pr-10 sm:pr-16 md:pr-20 font-["Founders_Grotesk_X_Condensed"]'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
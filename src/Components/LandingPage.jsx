import { motion } from "framer-motion";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20 ">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => (
          <div className="masker">
            <div data-scroll data-scroll-speed=".2" className="w-fit flex flex-end overflow-hidden">
              {index === 1 && (
                <motion.div initial={{width : 0}} animate={{width : "9vw" }} transition={{ease :[0.45, 0, 0.55, 1],duration : 1,}} className="w-[9vw] h-[5.5vw] relative top-[.7vw] overflow-hidden  rounded-md mr-[1vw]">
                  <img
                    className="h-full w-full bg-cover bg-center"
                    src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                    alt=""
                  />
                </motion.div>
              )}
              <h1
                key={index}
                className='leading-[6.5vw] tracking-tighter uppercase text-[7.5vw] font-["Founders_Grotesk"] font-semibold'
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px]  border-zinc-700 mt-20 flex items-center justify-between py-5 px-20">
        {["For Public & Private companies", "from the first pitch to IPO"].map(
          (item, i) => (
            <p
              key={i}
              className="text-md font-light uppercase tracking-tight leading-none"
            >
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-5">
          <div className="px-5  py-2 border-[1px] border-zinc-500 font-light capitalize text-sm  rounded-full">
            Start the project
          </div>

          <div className="w-10 h-10 flex items-center justify-center  border-[1px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

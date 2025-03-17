import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.1"
      className="w-full text-black py-10 sm:py-12 md:py-16 lg:py-20 bg-[#CDEB69] rounded-tl-xl sm:rounded-tl-2xl md:rounded-tl-3xl rounded-tr-xl sm:rounded-tr-2xl md:rounded-tr-3xl"
    >
      {/* Heading Section */}
      <h1 className="font-['Neue_Montreal'] text-3xl sm:text-4xl md:text-5xl lg:text-[4vw] xl:text-[3.5vw] 2xl:text-[2.5vw] px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 leading-tight sm:leading-tight md:leading-snug lg:leading-snug xl:leading-snug tracking-tighter">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>

      {/* Content Section */}
      <div className="w-full flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 mt-8 sm:mt-10 md:mt-12 lg:mt-14 border-t-[1px] pt-6 sm:pt-8 md:pt-10 border-[#528a0ec6] gap-6 md:gap-8 lg:gap-12">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h1 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
            our approach
          </h1>
          <button className="self-start px-6 sm:px-8 md:px-10 flex gap-2 sm:gap-3 md:gap-4 items-center py-2 sm:py-3 md:py-4 border-[2px] mt-6 sm:mt-8 md:mt-10 bg-black border-black text-white rounded-full text-sm sm:text-base md:text-md uppercase transition-transform hover:scale-105">
            read more
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        {/* Right Column - Image */}
        <div
          data-scroll
          data-scroll-speed="-.2"
          className="w-full lg:w-1/2 h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[50vh] xl:h-[60vh] bg-cover bg-center rounded-lg sm:rounded-xl mt-6 sm:mt-8 md:mt-10 lg:mt-0 bg-[url('/images/Homepage-Photo-663x469.jpg')]"
        ></div>
      </div>
    </div>
  );
}

export default About;
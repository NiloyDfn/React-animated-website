import React from "react";



function About() {
  return (
    <div data-scroll data-scroll-speed="-.1"  className="w-full text-black py-20 bg-[#CDEB69] rounded-tl-3xl rounded-tr-3xl">
      <h1  className="font-['Neue_Montreal'] text-[3.5vw] px-8 py-8 leading-[4vw] tracking-tighter"> 
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex rounded-3xl px-8 mt-14 border-t-[1px] pt-10 border-[#528a0ec6]">
        <div className="w-1/2 ">
            <h1 className="uppercase text-7xl">our approach</h1>
            <button className="px-10 flex gap-10 items-center  py-4 border-[2px] mt-10 bg-black border-black text-white rounded-full text-md  uppercase">read more
                <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
        </div>
        <div data-scroll data-scroll-speed="-.2" className="w-1/2 h-[70vh] bg-cover bg-center rounded-xl bg-[url('/images/Homepage-Photo-663x469.jpg')]"></div>
      </div>
    </div>
  );
}

export default About;

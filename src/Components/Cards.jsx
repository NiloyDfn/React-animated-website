import React, { useState, useEffect } from 'react';

const Cards = () => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Determine layout based on screen size
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth >= 768 && windowWidth < 1024;
  
  return (
    <div 
      data-scroll 
      data-scroll-speed="-.3" 
      className={`w-full h-auto min-h-screen flex ${isMobile ? 'flex-col' : 'flex-row'} items-center ${isMobile ? 'px-4 py-10 gap-4' : isTablet ? 'px-8 gap-4' : 'px-20 gap-5'}`}
    >
      {/* First Card */}
      <div className={`cardcontainer ${isMobile ? 'h-[40vh] w-full' : isTablet ? 'h-[40vh] w-1/2' : 'h-[50vh] w-1/2'}`}>
        <div className="card relative rounded-xl w-full h-full flex justify-center items-center bg-[#004C42]">
          <img className={`${isMobile ? 'w-24' : 'w-32'}`} src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="Ochi Design Logo" />
          <button className={`absolute ${isMobile ? 'left-4 bottom-4 px-3 py-1 text-sm' : isTablet ? 'left-6 bottom-6 px-4 py-1' : 'left-10 bottom-10 px-5 py-2'} rounded-full border-2 text-[#CDEA68] border-[#CDEA68]`}>
            ©2023-2024
          </button>
        </div>  
      </div>

      {/* Second Card Container */}
      <div className={`cardcontainer flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4 ${isMobile ? 'h-auto w-full' : isTablet ? 'h-[40vh] w-1/2' : 'h-[50vh] w-1/2'}`}>
        {/* Second Card - Left */}
        <div className={`relative card flex justify-center items-center rounded-xl ${isMobile ? 'w-full h-[40vh]' : 'w-1/2 h-full'} bg-[#212121]`}>
          <img className={`${isMobile ? 'w-24' : 'w-32'}`} src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="Clutch Rating Logo" />
          <button className={`absolute ${isMobile ? 'left-4 bottom-4 px-3 py-1 text-sm' : isTablet ? 'left-4 bottom-4 px-3 py-1 text-xs' : 'left-10 bottom-4 px-5 py-2'} rounded-full border-2 uppercase border-zinc-100 text-zinc-100`}>
            Rating 5.0 on clutch
          </button>
        </div>  
        
        {/* Second Card - Right */}
        <div className={`card relative rounded-xl ${isMobile ? 'w-full h-[40vh]' : 'w-1/2 h-full'} bg-[#212121] flex justify-center items-center`}>
          <img className={`${isMobile ? 'w-24' : 'w-32'}`} src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="Business Bootcamp Logo" />
          <button className={`absolute ${isMobile ? 'left-4 bottom-4 px-3 py-1 text-sm' : isTablet ? 'left-2 bottom-4 px-2 py-1 text-xs' : 'left-5 bottom-4 px-3 py-1'} rounded-full border-2 border-zinc-100 uppercase text-zinc-100 whitespace-nowrap`}>
            {isMobile || isTablet ? 'Business bootcamp' : 'Business bootcamp alumini'}
          </button>
        </div>  
      </div>
    </div>
  );
};

export default Cards;
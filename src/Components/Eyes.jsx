import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsPlaying(prevState => !prevState);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    // Add touch tracking for mobile devices
    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        let touchX = e.touches[0].clientX;
        let touchY = e.touches[0].clientY;

        let deltaX = touchX - window.innerWidth / 2;
        let deltaY = touchY - window.innerHeight / 2;

        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setRotate(angle - 180);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full h-full bg-center bg-cover bg-[url('/images/Top-Viewbbcbv-1-scaled.jpg')]"
      >
        <div className="absolute flex flex-row md:gap-10 gap-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* First eye */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 relative flex items-center justify-center bg-zinc-900 rounded-full">
              <button
                onClick={handleButtonClick}
                className="z-10 text-base sm:text-xl md:text-2xl lg:text-4xl text-white"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6 sm:h-8 md:h-10"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          
          {/* Second eye */}
          <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 relative flex items-center justify-center bg-zinc-900 rounded-full">
              <button
                onClick={handleButtonClick}
                className="z-10 text-base sm:text-xl md:text-2xl lg:text-4xl text-white"
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-6 sm:h-8 md:h-10"
              >
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
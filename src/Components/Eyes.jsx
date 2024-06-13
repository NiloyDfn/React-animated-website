import React, { useEffect, useState } from "react";

function Eyes() {
    const [rotate, setRotate] = useState(0)
    
    const [isPlaying, setIsPlaying] = useState(false);

    const handleButtonClick = () => {
      setIsPlaying(prevState => !prevState);
    };

    
    useEffect(() => {
        window.addEventListener("mousemove",(e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2

            let angle = Math.atan2(deltaY,deltaX) * (180/Math.PI);
            setRotate(angle-180);
        });
    

    })
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className=" relative w-full h-full bg-center bg-cover bg-[url('./public/images/Top-Viewbbcbv-1-scaled.jpg')] ">
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 relative flex items-center justify-center  bg-zinc-900 rounded-full ">
              <button onClick={handleButtonClick} className=" z-[999] text-4xl">
                  {isPlaying ? "Pause" : "Play"}
              </button>
              <div style={{transform :`translate(-50%, -50%) rotate(${rotate}deg)`}} className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  h-10 ">
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 flex items-center justify-center relative h-2/3 bg-zinc-900 rounded-full ">
            <button onClick={handleButtonClick} className=" z-[999] text-4xl">
                  {isPlaying ? "Pause" : "Play"}
              </button>
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className="line  absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 ">
                <div className="w-10 h-10 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;

import React from 'react'

const Cards = () => {
  return (
    <div data-scroll  data-scroll-speed="-.3" className='w-full h-screen  flex items-center px-20 gap-5'>
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className="card relative rounded-xl w-full h-full flex justify-center items-center bg-[#004C42] ">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute left-10 bottom-10 px-5 py-2 rounded-full border-2 text-[#CDEA68] border-[#CDEA68]">©2023-2024</button>
                </div>  
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
            <div className="relative card flex justify-center items-center rounded-xl w-1/2 h-full bg-[#212121] ">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
                <button className="absolute left-10 bottom-4 px-5 py-2 rounded-full border-2 uppercase  border-zinc-100">Rating 5.0 on clutch</button>
                </div>  
            <div className="card relative rounded-xl w-1/2 h-full bg-[#212121]  flex justify-center items-center">
                <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
                <button className="absolute left-5 bottom-4 px-3 py-1 rounded-full border-2  border-zinc-100 uppercase first-letter:">Business bootcamp alumini</button>
                </div>  
        </div>
    </div>
  )
}

export default Cards

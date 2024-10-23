import React from 'react'
import Face from '../assets/Face.jpg'
import { FaArrowDown } from "react-icons/fa6";

const Home = () => {
  return (
    <div className='mx-14 mt-2 h-[85%]'>
        <div className='flex gap-2 h-full'>

            {/* Left Section */}
            <div className='h-[80%] w-full flex flex-col items-center justify-center'>
                <h1 className='text-[10rem] capitalize'>hello</h1>
                <div className='relative'>
                    <h3 className='text-[1.5em] font-semibold whitespace-nowrap flex items-center absolute -top-[20px] -left-[175px] text-[#7B7B7B]'>
                        <span className='font-bold'>~</span>It's Anonymous, a React Developer
                        <h3 className='absolute -bottom-[250px] flex gap-1 items-center'>
                            Scroll Down
                            <FaArrowDown />
                        </h3>
                    </h3>
                </div>
            </div>

            {/* Right Section */}
            <div className='h-[80%] w-full flex flex-col items-center justify-center'>
                <img src={Face} alt="" className='grayscale hover:grayscale-0 transition duration-300 contrast-[0%] h-auto w-auto rounded-full' />
            </div>
        </div>
    </div>
  )
}

export default Home
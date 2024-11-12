import React from 'react';
import Face from '../assets/Face.jpg';
import { FaArrowDown } from "react-icons/fa6";
import Typewriter from 'react-typewriter-effect';

const Home = () => {
  return (
    <div className="mx-14 mt-2 h-[100vh]">
      <div className="flex md:flex-row flex-col gap-2 h-full">

        {/* Left Section */}
        <div className="h-[80%] w-full flex flex-col items-center justify-center">
          <div className="text-[5rem] capitalize text-center">
            <Typewriter
              textStyle={{
                fontSize: '5rem',
                fontWeight: 'bold',
                color: '#000',
              }}
              startDelay={100}
              cursorColor="#222222"
              multiText={[
                "Hello",
                "নমস্কার",
                "नमस्ते",
                "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ",
                "வணக்கம்"
              ]}
              multiTextDelay={800}
              typeSpeed={100}
              eraseSpeed={50}
              multiTextLoop
            />
          </div>
          <div className="relative mt-4">
            <h3 className="text-[1.5em] font-semibold whitespace-nowrap flex items-center text-[#7B7B7B]">
              <span className="font-bold">~</span> It's Arideep, <span className='mx-1 hover:text-blue-800 cursor-pointer duration-300 transition-all ease-in-out'>React</span>Developer
            </h3>
            <h3 className="absolute -bottom-[300px] flex gap-1 items-center cursor-pointer hover:text-black duration-300 ease-in-out transition-all font-semibold text-[1.5rem] text-[#7B7B7B]">
              Scroll Down
              <FaArrowDown />
            </h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-[80%] w-full flex flex-col items-center justify-center md:mt-10 -mt-[200px]">
          <img
            src={Face}
            alt="face"
            className="grayscale hover:grayscale-0 transition duration-300 contrast-[100%] md:h-auto h-[200px] md:w-auto w-[200px] rounded-full z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

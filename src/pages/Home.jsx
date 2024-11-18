import React from 'react';
import Face from '../assets/Face.jpg';
import Typewriter from 'react-typewriter-effect';
import { MdOutlineKeyboardDoubleArrowDown } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-[100vh] relative">
      <div className="flex md:flex-row flex-col gap-2 h-full">

        {/* Left Section */}
        <div className="md:h-[80%] h-[40%] w-full flex flex-col items-center justify-center">
          <div className="text-[5rem] capitalize text-center md:mt-[100px] mt-0">
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
                "नमस्ते"
              ]}
              multiTextDelay={800}
              typeSpeed={100}
              eraseSpeed={50}
              multiTextLoop
            />
          </div>
          <div className="relative mt-0 md:mt-4">
            <h3 className="text-[1.5em] font-semibold whitespace-nowrap flex items-center text-[#7B7B7B]">
              <span className="font-bold">~</span> It's Arideep, <span className='mx-1 hover:text-blue-800 cursor-pointer duration-300 transition-all ease-in-out'>React</span>Developer
            </h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="h-[80%] w-full flex flex-col items-center justify-center md:mt-10 -mt-[200px]">
          <img
            src={Face}
            alt="face"
            className="grayscale hover:grayscale-0 transition duration-300 contrast-[100%] md:h-auto h-[250px] md:w-auto w-[250px] rounded-full z-10"
          />
        </div>
      </div>
      <Link to='/about'>
        <h3 className="md:left-0 left-[32%] absolute md:bottom-[20px] bottom-[100px] flex gap-3 items-center cursor-pointer hover:text-black duration-300 ease-in-out transition-all font-semibold text-[1.5rem] text-[#7B7B7B] ml-14"
        >
          Slide Down
          <MdOutlineKeyboardDoubleArrowDown className='text-[2rem] animate-slide-down' />
        </h3>
      </Link>
    </div>
  );
};

export default Home;

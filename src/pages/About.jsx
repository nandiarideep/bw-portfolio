import React from 'react';
import { FaArrowDown } from 'react-icons/fa6';
import Arrow from '../assets/Arrow.png';
import Eve from '../assets/Eve.webp';
import Navsoft from '../assets/Navsoft.png'
import Imeet from '../assets/Imeet.png'
import Jissp from '../assets/Jissp.png'
import Springdale from '../assets/Springdale.jpg'
import Brainware from '../assets/Brainware.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="mx-14 mt-2 h-[90vh] relative">
      <img src={Arrow} alt="arrow" className='absolute bottom-[100px] opacity-[30%] left-6' />
      <h3 className='absolute bottom-[40px] flex gap-1 items-center cursor-pointer text-[1.5rem] text-[#7B7B7B] font-semibold hover:text-black duration-300 ease-in-out transition-all'>
          Go On 
          <FaArrowDown />
      </h3>
      <div className="grid grid-cols-3 gap-3 h-full">

        {/* Info Section */}
        <div>
          <h2 className="text-3xl font-semibold mt-6">About Me</h2>
          <p className="text-wrap text-[#7B7B7B] text-lg mt-10">
            I specialize in turning complex problems into elegant solutions. My approach blends creativity with strategic thinking to deliver designs that not only look great but work seamlessly.
          </p>
        </div>

        {/* Education Section */}
        <div className='text-3xl font-semibold h-full'>
            <h2 className='m-5'>Education</h2>
            <div className='flex m-5 h-[80%] justify-between relative'>
                <p className='absolute text-[18px] rotate-90 origin-left left-[62px] top-[20px] p-1 bg-[#F8F8F8]'>2022</p>
                <p className='absolute text-[18px] rotate-90 origin-left left-[62px] top-[220px] p-1 bg-[#F8F8F8]'>2019</p>
                <p className='absolute text-[18px] rotate-90 origin-left left-[62px] bottom-[70px] p-1 bg-[#F8F8F8]'>2013</p>

                {/* Vertical Line */}
                <div className='border-2 border-black h-full ml-[60px]'></div>

                <div className='flex flex-col justify-between'>
                  <Link to='https://www.brainwareuniversity.ac.in/' target='_blank'>
                    <img src={Brainware} alt='Brainware_Logo' className='cursor-pointer duration-300 transition-all ease-in-out grayscale hover:grayscale-0 rounded-xl h-[120px] w-[120px]' />
                  </Link>
                  <Link to='https://www.jissp.ac.in/' target='_blank'>
                    <img src={Jissp} alt='Jissp_Logo' className='cursor-pointer duration-300 transition-all ease-in-out grayscale hover:grayscale-0 rounded-xl h-[120px] w-[120px]' />
                  </Link>
                  <Link to='https://www.springdalehighschool.com/' target='_blank'>
                    <img src={Springdale} alt='Springdale_Logo' className='cursor-pointer duration-300 transition-all ease-in-out grayscale hover:grayscale-0 rounded-xl h-[120px] w-[120px]' />
                  </Link>
                </div>
            </div>
        </div>
        
        {/* Experience Section */}
        <div className='text-3xl font-semibold h-full'>
            <h2 className='m-5'>Experience</h2>
            <div className='flex m-5 h-[80%] justify-between relative'>
                <p className='absolute text-[18px] rotate-90 origin-left left-[62px] p-1 bg-[#F8F8F8]'>Present</p>
                <p className='absolute text-[18px] rotate-90 origin-left left-[62px] top-[220px] p-1 bg-[#F8F8F8]'>2024</p>
                <p className='absolute text-[18px] rotate-90 origin-left left-[62px] bottom-[70px] p-1 bg-[#F8F8F8]'>2023</p>

                {/* Vertical Line */}
                <div className='border-2 border-black h-full ml-[60px]'></div>

                <div className='flex flex-col justify-between'>
                  <Link to='https://www.eve24hrs.com/' target='_blank'>
                    <img src={Eve} alt='Eve_Logo' className='cursor-pointer duration-300 transition-all ease-in-out grayscale hover:grayscale-0 rounded-xl h-[120px] w-[120px]' />
                  </Link>
                  <Link to='https://www.thenavsoft.com/' target='_blank'>
                    <img src={Navsoft} alt='Navsoft_Logo' className='cursor-pointer duration-300 transition-all ease-in-out grayscale hover:grayscale-0 h-[120px] w-[120px]' />
                  </Link>
                  <Link to='https://github.com/imeet-technology/' target='_blank'>
                    <img src={Imeet} alt='Imeet_Logo' className='cursor-pointer duration-300 transition-all ease-in-out grayscale hover:grayscale-0 rounded-xl h-[120px] w-[120px]' />
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;

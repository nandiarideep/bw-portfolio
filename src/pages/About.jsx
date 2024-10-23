import React from 'react';
import Arrow from '../assets/Arrow.png';
import Eve from '../assets/Eve.webp';
import Navsoft from '../assets/Navsoft.png'
import Imeet from '../assets/Imeet.png'
import { FaReact, FaHtml5, FaGithub, FaGit } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiTailwindCssFill } from "react-icons/ri";
import {BiLogoNetlify } from "react-icons/bi";
import { FaCss3Alt } from 'react-icons/fa6';


// Sample language data with icons
const languages = [
  { name: 'React', icon: <FaReact />, bg_color: '##1e90ff' },
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
  { name: 'Html', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Git', icon: <FaGit /> },
  { name: 'Netlify', icon: <BiLogoNetlify /> },
];

const About = () => {
  return (
    <div className="mx-14 mt-2 h-[85%] relative">
      <img src={Arrow} alt="arrow" className='absolute bottom-10 opacity-[30%] left-6' />
      <div className="grid grid-cols-3 gap-3 h-full">

        {/* Info Section */}
        <div>
          <h2 className="text-3xl font-semibold mt-6">About Me</h2>
          <p className="text-wrap text-[#7B7B7B] text-lg mt-10">
            I specialize in turning complex problems into elegant solutions. My approach blends creativity with strategic thinking to deliver designs that not only look great but work seamlessly.
          </p>
        </div>

        {/* Tools Section */}
        <div className="text-3xl font-semibold shadow-lg bg-[#ffffff] rounded-lg h-full">
          <h2 className="m-5">Tools</h2>
            <div className="grid grid-cols-2 gap-4 p-4">
              {/* Map over languages and render icons and names */}
              {languages.map((language, index) => (
                <div key={index} className="flex flex-col items-center space-x-2 bg-white p-3 rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                  <div className="text-3xl">{language.icon}</div>
                </div>
              ))}
            </div>
        </div>
        
        {/* Experience Section */}
        <div className='text-3xl font-semibold h-full'>
            <h2 className='m-5'>Experience</h2>
            <div className='flex m-5 h-[80%] justify-between relative'>
                <p className='absolute text-[18px] rotate-90 origin-left left-[62px] p-1 bg-[#F8F8F8]'>Present</p>
                <p className='absolute text-[18px] rotate-90 origin-left left-[62px] top-[200px] p-1 bg-[#F8F8F8]'>2024</p>
                <p className='absolute text-[18px] rotate-90 origin-left left-[62px] bottom-[70px] p-1 bg-[#F8F8F8]'>2023</p>
                <p className='absolute text-[18px] left-[150px] top-[50px]'>Sep</p>
                <p className='absolute text-[18px] left-[150px] top-[240px]'>Jan - Feb</p>
                <p className='absolute text-[18px] left-[150px] bottom-[40px]'>Jun - Sep</p>
                <div className='border-2 border-black h-full ml-[60px]'></div>
                <div className='flex flex-col justify-between'>
                    <img src={Eve} alt='Eve_Logo' className='grayscale h-[120px] w-[120px]' />
                    <img src={Navsoft} alt='Navsoft_Logo' className='grayscale h-[120px] w-[120px]' />
                    <img src={Imeet} alt='Imeet_Logo' className='grayscale h-[120px] w-[120px]' />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { RxArrowTopRight } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className='w-full h-16 flex justify-between'>
      <ul className='flex mx-14 gap-5 items-center'>
        <li>
          <NavLink 
            to='/' 
            className={({ isActive }) => 
              `capitalize text-xl font-semibold cursor-pointer hover:text-[#222222] transition-all duration-300 ${isActive ? 'text-[#222222]' : 'text-[#7B7B7B]'}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/about' 
            className={({ isActive }) => 
              `capitalize text-xl font-semibold cursor-pointer hover:text-[#222222] transition-all duration-300 ${isActive ? 'text-[#222222]' : 'text-[#7B7B7B]'}`
            }
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/technologies' 
            className={({ isActive }) => 
              `capitalize text-xl font-semibold cursor-pointer hover:text-[#222222] transition-all duration-300 ${isActive ? 'text-[#222222]' : 'text-[#7B7B7B]'}`
            }
          >
            Technologies
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/services' 
            className={({ isActive }) => 
              `capitalize text-xl font-semibold cursor-pointer hover:text-[#222222] transition-all duration-300 ${isActive ? 'text-[#222222]' : 'text-[#7B7B7B]'}`
            }
          >
            Projects
          </NavLink>
        </li>
      </ul>
      <ul className='flex mx-14'>
        <li className='flex items-center gap-2 relative'>
            <NavLink
                to='/contact' 
                className={({ isActive }) => 
                `capitalize text-xl font-semibold cursor-pointer hover:text-[#222222] transition-all duration-300 hover:underline flex items-center ${isActive ? 'text-[#222222]' : 'text-[#7B7B7B]'}`
                }            
            >
                Contact <RxArrowTopRight className='text-2xl absolute bottom-4 -right-6' />
            </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

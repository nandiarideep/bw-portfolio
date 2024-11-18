import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Me' },
    { path: '/technologies', label: 'Technologies' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const renderNavLinks = (className, onClick) =>
    navItems.map(({ path, label }) => (
      <li key={label}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            `capitalize text-xl font-semibold cursor-pointer hover:text-white transition-all duration-300 ${
              isActive ? 'text-white' : 'text-[#7B7B7B]'
            } ${className}`
          }
          onClick={onClick}
        >
          {label}
        </NavLink>
      </li>
    ));

  return (
    <div className="relative h-[100px] bg-black flex items-center justify-between">
      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-5 items-center md:py-5 bottom-0 w-full z-40 ml-14">
        {renderNavLinks()}
      </ul>
      <h2 className='text-2xl cursor-pointer font-semibold text-[#7B7B7B] mr-14'>nandiarideep@gmail.com</h2>
    </div>
  );
};

export default Footer;

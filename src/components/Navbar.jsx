import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            `capitalize text-xl font-semibold cursor-pointer hover:text-[#222222] transition-all duration-300 ${
              isActive ? 'text-[#222222]' : 'text-[#7B7B7B]'
            } ${className}`
          }
          onClick={onClick}
        >
          {label}
        </NavLink>
      </li>
    ));

  return (
    <div className="relative mx-14 flex items-center">
      {/* Desktop Nav Links */}
      <ul className="hidden md:flex gap-5 items-center md:py-5 fixed top-0 bg-[#F8F8F8] w-full z-40">
        {renderNavLinks()}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden ml-auto my-5">
        <FaBars
          className={`text-2xl cursor-pointer text-[#7B7B7B] hover:text-black duration-300 transition-all ease-in-out ${
            isMenuOpen ? 'rotate-180' : 'rotate-0'
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <ul className="absolute top-14 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-5 py-8 md:hidden z-40">
          {renderNavLinks('', () => setIsMenuOpen(false))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

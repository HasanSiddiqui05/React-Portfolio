import React, { useState, useContext } from 'react';
import { ThemeContext } from '../App';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full bg-blue-300 flex justify-between items-center md:px-12 lg:px-20 sm:py-7 py-5 sm:px-8 px-4 shadow-lg z-50 ${theme === 'Light' ? 'bg-blue-300': 'bg-green-300'}`}>
      <h1 className="text-xl font-bold">Hasan Shahab Siddiqui</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-bold">
        <NavLink
          to="/"
          className={({ isActive }) =>  
            isActive 
              ? theme === 'Light' 
                  ? 'navlink-active-light' 
                  : 'navlink-active-dark' 
              : theme === 'Light' 
                  ? 'navlink-hover-light' 
                  : 'navlink-hover-dark'
          }          
        >
          <li>Home</li>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>  
            isActive 
              ? theme === 'Light' 
                  ? 'navlink-active-light' 
                  : 'navlink-active-dark' 
              : theme === 'Light' 
                  ? 'navlink-hover-light' 
                  : 'navlink-hover-dark'
          }          
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>  
            isActive 
              ? theme === 'Light' 
                  ? 'navlink-active-light' 
                  : 'navlink-active-dark' 
              : theme === 'Light' 
                  ? 'navlink-hover-light' 
                  : 'navlink-hover-dark'
          }          
        >
          <li>Projects</li>
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>  
            isActive 
              ? theme === 'Light' 
                  ? 'navlink-active-light' 
                  : 'navlink-active-dark' 
              : theme === 'Light' 
                  ? 'navlink-hover-light' 
                  : 'navlink-hover-dark'
          }          
        >
          <li>Contact</li>
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>  
            isActive 
              ? theme === 'Light' 
                  ? 'navlink-active-light' 
                  : 'navlink-active-dark' 
              : theme === 'Light' 
                  ? 'navlink-hover-light' 
                  : 'navlink-hover-dark'
          }          
        >
          <li>Skills</li>
        </NavLink>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-00/70 backdrop-blur-md md:hidden shadow-lg">
            <ul className="flex flex-col gap-4 p-4 items-center">
            <NavLink
                to="/"
                className={({ isActive }) =>  isActive ? theme === 'Light' ? 'navlink-active-light' : 'navlink-active-dark' : ""}
                onClick={toggleMenu}>
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>  isActive ? theme === 'Light' ? 'navlink-active-light' : 'navlink-active-dark' : ""}
                onClick={toggleMenu}>
                About
            </NavLink>
            <NavLink
                to="/projects"
                className={({ isActive }) =>  isActive ? theme === 'Light' ? 'navlink-active-light' : 'navlink-active-dark' : ""}
                onClick={toggleMenu}>
                Projects
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>  isActive ? theme === 'Light' ? 'navlink-active-light' : 'navlink-active-dark' : ""}
                onClick={toggleMenu}>
                Contact
            </NavLink>
            <NavLink
                to="/skills"
                className={({ isActive }) =>  isActive ? theme === 'Light' ? 'navlink-active-light' : 'navlink-active-dark' : ""}
                onClick={toggleMenu}>
                Skills
            </NavLink>
            </ul>
        </div>
        )}

    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events to change the background of the navbar
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white text-gray-800 shadow-md' : 'bg-[#233277] text-white'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wide">
            <Link
              to="/"
              className={`${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-yellow-400 transition duration-300`}
            >
              RO Purifier
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-sm sm:text-base font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-yellow-400 transition duration-300`}
            >
              Home
            </Link>
            <Link
              to="/aboutUs"
              className={`text-sm sm:text-base font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-yellow-400 transition duration-300`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-sm sm:text-base font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-yellow-400 transition duration-300`}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className={`text-sm sm:text-base font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-yellow-400 transition duration-300`}
            >
              Contact
            </Link>
          </nav>

          {/* Phone and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            {/* Phone */}
            <a
              href="tel:+9926980487"
              className={`flex items-center space-x-2 text-sm sm:text-base font-medium ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-yellow-400 transition duration-300`}
            >
              <FaPhoneAlt />
              <span>+91 - 9926980487</span>
            </a>

            {/* Hamburger Menu */}
            <button
              className={`md:hidden text-2xl ${
                isScrolled ? 'text-gray-800' : 'text-white'
              } hover:text-yellow-400 transition duration-300`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-20 left-0 w-full bg-white z-50 text-gray-800 shadow-md transition-all duration-300 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            className="text-base font-medium hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/aboutUs"
            className="text-base font-medium hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-base font-medium hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-base font-medium hover:text-blue-600 transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

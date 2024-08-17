import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Image */}
        <div className="text-2xl font-bold">
          <a href="#">
          <img src="/Pencilo Logo black theme.png" alt="Logo" className="h-11 w-auto" />
          </a>
        </div>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About Us</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Get Started
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 py-4">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">About Us</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Services</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
          <a href="#" className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded mt-2 mx-4">
            Get Started
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;

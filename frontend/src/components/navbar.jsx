import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/RapidMover.png';
import { HiOutlineUser } from 'react-icons/hi';
import { FaBars, FaTimes, FaHome, FaBuilding, FaGlobe, FaTruckMoving } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed w-full z-50">
      {/* Marquee */}
      <div className="bg-black w-full px-4 text-xs md:text-sm text-white py-2 overflow-hidden">
        <div className="marquee">
          <span className="text">Welcome to Rapid Movers</span>
        </div>
      </div>

      {/* Navbar */}
      <header className="bg-white px-5 md:px-10 lg:px-20 shadow-md h-20">
        <nav className="flex justify-between items-center h-full">
          {/* Logo */}
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Rapid Movers"
                className="h-10 w-auto object-cover"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex text-lg items-center space-x-8">
            <li className="hover:text-blue-700">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-700">
              <Link to="/about">About</Link>
            </li>
            <li className="relative group">
              <button
                onClick={toggleDropdown}
                className="hover:text-blue-700 focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 w-screen bg-white shadow-lg mt-4 py-10 z-50">
                  <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-3 gap-8">
                      {/* Core Services */}
                      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-xl mb-4 text-blue-800">Core Services</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-3 hover:bg-blue-50 p-3 rounded-md transition">
                            <FaHome className="text-blue-600 text-xl" />
                            <Link to="/services/residential" className="hover:text-blue-700">Residential Move</Link>
                          </li>
                          <li className="flex items-center space-x-3 hover:bg-blue-50 p-3 rounded-md transition">
                            <FaBuilding className="text-blue-600 text-xl" />
                            <Link to="/services/commercial" className="hover:text-blue-700">Commercial Move</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Corporate Services */}
                      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-xl mb-4 text-blue-800">Corporate Services</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-3 hover:bg-blue-50 p-3 rounded-md transition">
                            <FaGlobe className="text-blue-600 text-xl" />
                            <Link to="/services/inter-state" className="hover:text-blue-700">Inter-State Move</Link>
                          </li>
                          <li className="flex items-center space-x-3 hover:bg-blue-50 p-3 rounded-md transition">
                            <FaTruckMoving className="text-blue-600 text-xl" />
                            <Link to="/services/office" className="hover:text-blue-700">Office Move</Link>
                          </li>
                        </ul>
                      </div>
                      {/* Complementary Services */}
                      <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-xl mb-4 text-blue-800">Complementary Services</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center space-x-3 hover:bg-blue-50 p-3 rounded-md transition">
                            <FaTruckMoving className="text-blue-600 text-xl" />
                            <Link to="/services/storage" className="hover:text-blue-700">Storage Solutions</Link>
                          </li>
                          <li className="flex items-center space-x-3 hover:bg-blue-50 p-3 rounded-md transition">
                            <FaHome className="text-blue-600 text-xl" />
                            <Link to="/services/packing" className="hover:text-blue-700">Packing Services</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li className="hover:text-blue-700">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          {/* User Icon */}
          <Link to="/user">
            <HiOutlineUser className="text-2xl hover:text-blue-700" />
          </Link>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-2xl"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col mt-4 bg-white shadow-md rounded-lg">
            <li className="p-4 hover:bg-gray-100">
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <Link to="/about" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-100">
              <button
                onClick={toggleDropdown}
                className="w-full text-left focus:outline-none"
              >
                Services
              </button>
              {isDropdownOpen && (
                <div className="mt-2 bg-gray-100 p-4 rounded-lg">
                  <ul>
                    <li className="flex items-center p-3 hover:bg-gray-200">
                      <FaHome className="mr-2 text-blue-600" />
                      <Link to="/services/residential" onClick={toggleMobileMenu}>
                        Residential Move
                      </Link>
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200">
                      <FaBuilding className="mr-2 text-blue-600" />
                      <Link to="/services/commercial" onClick={toggleMobileMenu}>
                        Commercial Move
                      </Link>
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200">
                      <FaGlobe className="mr-2 text-blue-600" />
                      <Link to="/services/inter-state" onClick={toggleMobileMenu}>
                        Inter-State Move
                      </Link>
                    </li>
                    <li className="flex items-center p-3 hover:bg-gray-200">
                      <FaTruckMoving className="mr-2 text-blue-600" />
                      <Link to="/services/office" onClick={toggleMobileMenu}>
                        Office Move
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="p-4 hover:bg-gray-100">
              <Link to="/contact" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
};

export default Navbar;
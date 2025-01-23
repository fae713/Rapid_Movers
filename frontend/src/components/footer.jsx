import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/RapidMover.png';
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  // Scroll up functionality
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='bg-gradient-to-b from-gray-800 to-gray-900 text-white'>
      {/* Footer Content */}
      <div className='py-10 px-5 md:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Left Section: Logo and Quick Links */}
          <div>
            <div className='w-full h-16 mb-4'>
              <Link to="/">
                <img className="max-w-full max-h-full object-cover object-center" src={logo} alt="Logo" />
              </Link>
            </div>
            <div>
              <h2 className='font-semibold text-lg mb-2'>Quick Links</h2>
              <ul className='text-base'>
                <li className='py-1 hover:text-blue-600'>
                  <Link to="/">Home</Link>
                </li>
                <li className='py-1 hover:text-blue-600'>
                  <Link to="/about">About Us</Link>
                </li>
                <li className='py-1 hover:text-blue-600'>
                  <Link to="/services">Services</Link>
                </li>
                <li className='py-1 hover:text-blue-600'>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className='py-1 hover:text-blue-600'>
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li className='py-1 hover:text-blue-600'>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
              {/* Get a Quote Button */}
              <button
                className='bg-blue-600 text-white py-2 px-6 rounded-full mt-4 hover:bg-blue-800'
                onClick={() => alert('Quote requested!')}
              >
                Get a Quote
              </button>
            </div>
          </div>

          {/* Center Section: Social Media */}
          <div>
            <h2 className='font-semibold text-lg mb-2'>Follow Us</h2>
            <div className='flex space-x-4'>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <ImFacebook2 className='text-blue-600 text-2xl hover:text-blue-800' />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className='text-blue-600 text-2xl hover:text-blue-800' />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className='text-pink-500 text-2xl hover:text-pink-300' />
              </a>
              <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className='text-green-500 text-2xl hover:text-green-300' />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='text-blue-600 text-2xl hover:text-blue-800' />
              </a>
            </div>
          </div>

          {/* Right Section: Recent Blog */}
          <div>
            <h2 className='font-semibold text-lg mb-2'>Recent Blog</h2>
            <ul className='text-base mb-4'>
              <li className='py-1 hover:text-blue-600'>
                <Link to="/blog">How to Choose the Right Delivery Service</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='py-3 text-center border-t border-gray-700'>
        <p className='text-sm'>
          RapidMovers <sup>TM</sup> - All rights reserved.
        </p>
      </div>

      {/* Scroll Up Button */}
      <div
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full cursor-pointer shadow-lg hover:bg-blue-700"
        onClick={scrollUp}
      >
        ↑
      </div>
    </div>
  );
};

export default Footer;

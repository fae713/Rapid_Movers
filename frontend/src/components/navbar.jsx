import React from 'react'
import logo from '../assets/images/RapidMover.png'
import { Link } from 'react-router-dom';
import { HiOutlineX, HiOutlineMenuAlt3, HiOutlineUser, HiChevronRight } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className='fixed w-full z-50'>
      <div className='bg-black w-full px-20 items-center text-xs md:text-sm text-center text-white font-normal py-2'>phone: 09048990389, email: rapid@gmail.com</div>
      <header className='bg-white px-5 md:px-10 lg:px-20 shadow-md h-20'>
        <nav className='flex justify-between items-center h-full'>
              
            {/* this is the logo */}
            <div>
                <div className='w-[100%] md:w-full h-10'>
                    <Link to="/">
                        <img className="max-w-full max-h-full object-cover object-center" src={logo} alt="Logo" />
                    </Link>
                </div>
            </div>
            {/* ends here */}

            
            <ul className='h-16 hidden md:flex text-lg'>
                <li className='p-5 hover:text-blue-700'>
                  <Link to="/">Home</Link>
                </li>
                <li className='p-5 hover:text-blue-700'>
                  <Link to="/about">About</Link>
                </li>
                <li className='p-5 hover:text-blue-700'>
                  <Link to="/contact">Contact us</Link>
                </li>
            </ul>


            <div className='flex justify-between h-16 items-center px-0'>
                <Link to="/user">
                    <div className='flex items-center mx-0 py-1 px-0'>
                        <div className=' text-2xl md:text-2xl stroke-2 cursor-pointer hover:text-blue-700'>
                            <HiOutlineUser />
                        </div>
                    </div> 
                </Link>
            </div>  
              
        </nav>
      </header>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/RapidMover.png'
import { ImFacebook2 } from "react-icons/im";
import { FaSquareTwitter, FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='bg-white h-auto'>
        
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-16 px-5 md:px-10 h-auto'>

                     
            <div className='col-span-2'>
                <div className='w-[100%] md:w-full h-20'>
                    <Link to="/">
                        <img className="max-w-full max-h-full object-cover object-center" src={logo} alt="Logo" />
                    </Link>
                </div>
            </div>
                    


            <div className='mx-auto items-center w-[100%]'>
                <h2 className='font-semibold text-black text-xl md:text-2xl py-1 text-left px-0'>Links</h2>

                <ul className=' pt-3 md:pt-6 text-lg md:text-xl font-normal md:font-normal text-black text-left'>
                    <li className='px-0 py-3 hover:text-[#1D9BF0]'>Home</li>
                    <li className='px-0 py-3 hover:text-[#1D9BF0]'>About us</li>
                    <li className='px-0 py-3 hover:text-[#1D9BF0]'>Size Guide</li>
                </ul>
            </div>   
               

            <div>
                <p className='font-semibold text-black text-lg md:text-xl py-2'>Social Links</p>
                <div className='flex items-center h-[48px]'>
                    <ImFacebook2 className='text-black text-3xl md:text-4xl pr-2' />
                    <FaSquareTwitter className='text-black text-3xl md:text-4xl pr-2' />
                    <FaSquareInstagram className='text-black text-3xl md:text-4xl pr-2' />
                </div>
            </div>



             

        </div>


            <div className='mt-7 py-2 text-black items-center text-xs md:text-sm text-center border-t-[1px] border-solid'>
                <p>@RapidMovers <sup>TM</sup></p>
            </div>
    </div>
  )
}

export default Footer
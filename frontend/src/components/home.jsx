import React, { useState } from 'react'
import truckImage from '../assets/images/truckImage.jpg'
import truckImage2 from '../assets/images/truckImage2.png'
import bgImage from '../assets/images/heroImageBG.png'
import WeMove from '../assets/images/WeMove.png'
import WeMove2 from '../assets/images/WeMove2.png'
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { LuPackageCheck } from "react-icons/lu";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GrMapLocation } from "react-icons/gr";
import { Link } from 'react-router-dom'

const Testimonials = [
  { name: "David Michael", words: "Great service, highly recommend!" },
  { name: "Sarah Connor", words: "Very reliable and fast movers." },
  { name: "John Doe", words: "Excellent experience, stress-free!" },
  { name: "Jane Smith", words: "Professional and courteous staff." },
  { name: "Alice Brown", words: "Affordable and timely service." },
  { name: "Tom Johnson", words: "They handled everything perfectly!" },
];


const TestCards = ({ test }) => {
 
  return (

    
      <div className='bg-white w-full h-[220px] px-10 py-10 text-center'>
        <p className='text-xl font-semibold'>{test.name}</p>
        <p className='text-sm font-normal mt-3'>{test.words}</p>
      </div>


)};


const Home = () => {

  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(2);

  const shownTestimonials = Testimonials.slice(firstIndex, lastIndex);

  return (
    <div className='pt-14'>
      
      <div className='grid grid-cols-1 md:grid-cols-2  w-full justify-between mt-14'>
        <div className='px-5 md:px-10 lg:px-20 py-24 md:py-24 lg:py-32'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold uppercase'>Fast, Reliable, and Stress-Free Moving Services.<br />
          <span className='text-blue-600'>Rapid Mover</span> is here to assist you.</h1>
          <Link to="/quotes">
            <button className='mt-6 py-3 px-10 bg-blue-700 rounded-sm text-sm font-semibold text-white'>Get Quote</button>
          </Link> 
        </div>

        <div className='col-span-1 md:col-span-1 w-full h-[560px]'>
          <img className='w-full h-full' src={truckImage} alt="truck" />
        </div>
      </div>


      <div className='bg-gray-100 py-16 md:py-20 lg:py-40 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-28 px-5 md:px-10 lg:px-20'>
        <div>
          <h5 className='text-blue-600 font-semibold text-base md:text-lg mb-1 md:mb-5'>WHY RAPID MOVERS</h5>
          <h2 className='text-3xl md:text-3xl lg:text-5xl font-bold my-2 md:my-5 leading-[40px] md:leading-[52px] lg:leading-[64px]'>Here are advantages of working with Rapid Movers</h2>
          <p className='text-base my-5'>We take great pride in offering the best moving services available anywhere in Nigeria. We work with the best driver and movers that assists you to package, load, and move your items to your desired location.</p>
          {/* <button className='mt-6 py-3 px-10 bg-[#1D9BF0] rounded-sm text-sm font-semibold text-white'>Get Quote</button> */}
        </div>

        <div>
          <div className='flex items-start mb-8 md:mb-10 lg:mb-16'>
            <div className='items-center'>
              <div className='text-3xl md:text-4xl text-blue-600 mr-10 md:mr-16'><LuPackageCheck /></div>
              <div className='text-xl md:text-2xl text-blue-600 mr-10 md:mr-16 mt-3 md:mt-5'><LuPackageCheck /></div>
              <div className='text-xl md:text-2xl text-blue-600 mr-10 md:mr-16 mt-3 md:mt-5'><LuPackageCheck /></div>
            </div>
            <div>
              <h5 className='text-2xl md:text-3xl font-medium'>Safe Packing</h5>
              {/* <p className='mt-3 md:mt-5 text-sm md:text-base'>We package your items with a special wrapper that makes it safe for transport</p> */}
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Tracking goods</p>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Tracking goods</p>
            </div>
          </div>
          <div className='flex items-start mb-8 md:mb-10 lg:mb-16'>
            <div className='items-center'>
              <div className='text-3xl md:text-4xl text-blue-600 mr-10 md:mr-16'><LuPackageCheck /></div>
              <div className='text-xl md:text-2xl text-blue-600 mr-10 md:mr-16 mt-3 md:mt-5'><LuPackageCheck /></div>
              <div className='text-xl md:text-2xl text-blue-600 mr-10 md:mr-16 mt-3 md:mt-5'><LuPackageCheck /></div>
            </div>
            <div>
              <h5 className='text-2xl md:text-3xl font-medium'>Safe Packing</h5>
              {/* <p className='mt-3 md:mt-5 text-sm md:text-base'>We package your items with a special wrapper that makes it safe for transport</p> */}
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Tracking goods</p>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Tracking goods</p>
            </div>
          </div>
          <div className='flex items-start mb-8 md:mb-10 lg:mb-16'>
            <div className='items-center'>
              <div className='text-3xl md:text-4xl text-blue-600 mr-10 md:mr-16'><LuPackageCheck /></div>
              <div className='text-xl md:text-2xl text-blue-600 mr-10 md:mr-16 mt-3 md:mt-5'><LuPackageCheck /></div>
              <div className='text-xl md:text-2xl text-blue-600 mr-10 md:mr-16 mt-3 md:mt-5'><LuPackageCheck /></div>
            </div>
            <div>
              <h5 className='text-2xl md:text-3xl font-medium'>Safe Packing</h5>
              {/* <p className='mt-3 md:mt-5 text-sm md:text-base'>We package your items with a special wrapper that makes it safe for transport</p> */}
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Tracking goods</p>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Tracking goods</p>
            </div>
          </div>
          <div className='flex items-start mb-8 md:mb-10 lg:mb-16'>
            <div className='items-center'>
              <div className='text-3xl md:text-4xl text-blue-600 mr-10 md:mr-16'><LuPackageCheck /></div>
              <div className='text-xl md:text-2xl text-blue-600 mr-10 md:mr-16 mt-3 md:mt-5'><LuPackageCheck /></div>
              <div className='text-xl md:text-2xl text-blue-600 mr-10 md:mr-16 mt-3 md:mt-5'><LuPackageCheck /></div>
            </div>
            <div>
              <h5 className='text-2xl md:text-3xl font-medium'>Safe Packing</h5>
              {/* <p className='mt-3 md:mt-5 text-sm md:text-base'>We package your items with a special wrapper that makes it safe for transport</p> */}
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Tracking goods</p>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Tracking goods</p>
            </div>
          </div>

          {/* <div className='flex items-start mb-8 md:mb-10 lg:mb-16'>
            <div className='text-3xl md:text-4xl text-blue-600 mr-10 md:mr-16'><GrMapLocation /></div>
            <div>
              <h5 className='text-2xl md:text-3xl font-medium'>Move Anywhere</h5>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>We package your items with a special wrapper that makes it safe for transport</p>
            </div>
          </div>

          <div className='flex items-start mb-8 md:mb-10 lg:mb-16'>
            <div className='text-3xl md:text-4xl text-blue-600 mr-10 md:mr-16'><MdOutlineLocalShipping /></div>
            <div>
              <h5 className='text-2xl md:text-3xl font-medium'>Fast Drop-off</h5>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>We package your items with a special wrapper that makes it safe for transport</p>
            </div>
          </div> */}

        </div>
      </div>


      <div className='text-white px-5 md:px-10 lg:px-20 py-10 md:py-28 bg-[#394856] grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-40 lg:gap-60 ' >
        <div>
          <img className='w-full h-full object-fill' src={truckImage2} alt="truck" />
        </div>
        <div>
          <h5 className='font-semibold text-base md:text-lg mb-1 md:mb-5 text-blue-600'>HOW IT WORKS</h5>
          <h2 className='text-4xl md:text-4xl lg:text-5xl font-bold leading-[40px] md:leading-[52px] lg:leading-[64px] mb-5 md:mb-8 lg:mb-10'>Simple steps to move</h2>
          
          <div className='flex items-start my-8'>
            <h4 className='text-3xl text-blue-600 font-medium mb-3 mr-5'>01</h4>
            <div>
              <h4 className='text-3xl font-medium mb-3'>Get an estimate to plan</h4>
              <p className='text-base font-normal'>Following the get a quote process will get you started and give you an estimate on details about the move that you can plan with.</p>
            </div>
          </div>

          <div className='flex items-start my-8'>
            <h4 className='text-3xl text-blue-600 font-medium mb-3 mr-5'>02</h4>
            <div>
              <h4 className='text-3xl font-medium mb-3'>Get an estimate to plan</h4>
              <p className='text-base font-normal'>Following the get a quote process will get you started and give you an estimate on details about the move that you can plan with.</p>
            </div>
          </div>

          <div className='flex items-start my-8'>
            <h4 className='text-3xl text-blue-600 font-medium mb-3 mr-5'>03</h4>
            <div>
              <h4 className='text-3xl font-medium mb-3'>Get an estimate to plan</h4>
              <p className='text-base font-normal'>Following the get a quote process will get you started and give you an estimate on details about the move that you can plan with.</p>
            </div>
          </div>

        </div>
      </div>


      
      <div className='px-5 md:px-10 lg:px-20 py-20 bg-gray-100'>
        <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-center'>Our Previous customers</h2>
        <div className='grid grid-cols-6 md:grid-cols-5 items-center mt-8 md:mt-10 lg:mt-14'>
          <div><FaCircleArrowLeft className='mx-auto text-3xl' /></div>
          <div className='col-span-4 md:col-span-3 grid grid-cols-2 gap-3 md:gap-4 lg:gap-6'>
            {shownTestimonials.map((test, index)=> (
              <TestCards key={index} test={test}/>
            ))}
          </div>
          <div><FaCircleArrowRight className='mx-auto text-3xl' /></div>
        </div>
      </div>

      <div className='py-20 px-5 md:px-10 lg:px-32 bg-[#394856] mx-auto text-center'>
        <h5 className='text-6xl font-bold text-white my-10'>Ready to Move Your Items?</h5>
        <div>
          <button className='mt-6 mx-3 py-3 px-10 bg-[#1D9BF0] rounded-sm text-sm font-semibold text-white'>Get Quote</button>
          <button className='mt-6 mx-3 py-3 px-10 rounded-sm text-sm font-semibold text-white underline'>Get Quote</button>
        </div>
      </div>


    </div>
  )
};

export default Home
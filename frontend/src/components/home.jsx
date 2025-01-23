import React, { useState } from 'react';
import truckImage from '../assets/images/truckImage.jpg';
import { FaArrowLeft, FaArrowRight, FaTruck, FaHandshake, FaRegClock, FaMapMarkedAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaSuitcase, FaGlobe } from "react-icons/fa"; // Imported icons for services

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
  );
};

const Home = () => {

  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(2);

  const shownTestimonials = Testimonials.slice(firstIndex, lastIndex);

  return (
    <div className='pt-14'>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full justify-between mt-14'>
        <div className='px-5 md:px-10 lg:px-20 py-24 md:py-24 lg:py-32'>
          <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold uppercase'>
            Fast, Reliable, and Stress-Free Moving Services.<br />
            <span className='text-blue-600'>Rapid Mover</span> is here to assist you.
          </h1>
          <Link to="/quotes">
            <button className='mt-6 py-3 px-10 bg-blue-600 rounded-sm text-sm font-semibold text-white hover:bg-blue-800'>Get Quote</button>
          </Link>
        </div>
        <div className='col-span-1 md:col-span-1 w-full h-[560px]'>
          <img className='w-full h-full' src={truckImage} alt="truck" />
        </div>
      </div>

      <div className='bg-gray-100 py-16 md:py-20 lg:py-40 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-28 px-5 md:px-10 lg:px-20'>
        <div>
          <h5 className='text-blue-600 font-semibold text-base md:text-lg mb-1 md:mb-5'>WHY RAPID MOVERS</h5>
          <h2 className='text-3xl md:text-3xl lg:text-5xl font-bold my-2 md:my-5 leading-[40px] md:leading-[52px] lg:leading-[64px]'>
            Here are advantages of working with Rapid Movers
          </h2>
          <p className='text-base my-5'>
            We take great pride in offering the best moving services available anywhere in Nigeria. We work with the best drivers and movers to assist you in packaging, loading, and moving your items to your desired location.
          </p>
        </div>

        <div>
          <div className='flex items-start mb-8 md:mb-10 lg:mb-16'>
            <div className='text-3xl md:text-4xl text-blue-600 mr-10 md:mr-16'><FaTruck /></div>
            <div>
              <h5 className='text-2xl md:text-3xl font-medium'>Real-Time Tracking & Updates</h5>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>GPS Tracking: Monitor your shipments live on a map</p>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Automated Notifications: Receive updates at key milestones</p>
            </div>
          </div>
          <div className='flex items-start mb-8 md:mb-10 lg:mb-16'>
            <div className='text-3xl md:text-4xl text-blue-600 mr-10 md:mr-16'><FaHandshake /></div>
            <div>
              <h5 className='text-2xl md:text-3xl font-medium'>Customizable Services</h5>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Priority Delivery: Same-day or next-day options available</p>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>White Glove Service: Special handling for high-value goods</p>
            </div>
          </div>
          <div className='flex items-start mb-8 md:mb-10 lg:mb-16'>
            <div className='text-3xl md:text-4xl text-blue-600 mr-10 md:mr-16'><FaRegClock /></div>
            <div>
              <h5 className='text-2xl md:text-3xl font-medium'>Seamless Online Experience</h5>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>24/7 Support: Manage shipments and review invoices anytime</p>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Live Scheduling: Request inspections or schedule video walkthroughs</p>
            </div>
          </div>
          <div className='flex items-start mb-8 md:mb-10 lg:mb-16'>
            <div className='text-3xl md:text-4xl text-blue-600 mr-10 md:mr-16'><FaMapMarkedAlt /></div>
            <div>
              <h5 className='text-2xl md:text-3xl font-medium'>Flexible Options</h5>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Dynamic Pricing: Real-time cost estimates</p>
              <p className='mt-3 md:mt-5 text-sm md:text-base'>Warehousing & Storage: Short-term storage solutions available</p>
            </div>
          </div>
        </div>
      </div>

      <div className='px-5 md:px-10 lg:px-20 py-20 w-auto'>
        <h5 className='text-3xl font-semibold text-center'>Our Services</h5>
        
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12 mt-16'>
  <Link to="/services">
    <div className='text-center'>
      <div className='h-20 md:h-28 lg:h-40 w-20 md:w-28 lg:w-40 mx-auto'>
        <FaHome className="w-full h-full" />
      </div>
      <p className='my-5 text-sm md:text-xl lg:text-2xl text-center font-medium'>Residential Move</p>
    </div>
  </Link>

  <Link to="/services">
    <div className='text-center'>
      <div className='h-20 md:h-28 lg:h-40 w-20 md:w-28 lg:w-40 mx-auto'>
        <FaBuilding className="w-full h-full" />
      </div>
      <p className='my-5 text-sm md:text-xl lg:text-2xl text-center font-medium'>Commercial Move</p>
    </div>
  </Link>

  <Link to="/services">
    <div className='text-center'>
      <div className='h-20 md:h-28 lg:h-40 w-20 md:w-28 lg:w-40 mx-auto'>
        <FaGlobe className="w-full h-full" />
      </div>
      <p className='my-5 text-sm md:text-xl lg:text-2xl text-center font-medium'>Inter-State Move</p>
    </div>
  </Link>

  <Link to="/services">
    <div className='text-center'>
      <div className='h-20 md:h-28 lg:h-40 w-20 md:w-28 lg:w-40 mx-auto'>
        <FaSuitcase className="w-full h-full" />
      </div>
      <p className='my-5 text-sm md:text-xl lg:text-2xl text-center font-medium'>Office Move</p>
    </div>
  </Link>
</div>
      </div>

      <div className='text-white px-5 md:px-10 lg:px-20 py-10 md:py-28 bg-[#394856] grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex justify-center'>
          <button className='py-3 px-8 md:px-12 bg-blue-600 hover:bg-blue-800 text-sm md:text-base text-white font-medium rounded-lg'>
            Get a Quote
          </button>
        </div>

        <div className='text-center md:text-left'>
          <p className='font-semibold text-lg md:text-xl'>
            Trust Rapid Movers to provide top-quality moving services. Whether you're moving locally or interstate, we've got you covered.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mt-14 md:mt-16 px-4 md:px-8">
  {/* Left Button */}
  <button 
    onClick={() => {
      const newIndex = firstIndex === 0 ? Testimonials.length - 2 : firstIndex - 2;
      setFirstIndex(newIndex);
      setLastIndex(newIndex + 2);
    }}
    className="bg-transparent text-blue-600 text-3xl p-2 rounded-full hover:bg-gray-100 transition-all ease-in-out mx-4"
  >
    <FaArrowLeft />
  </button>

  {/* Testimonials Grid */}
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10">
    {shownTestimonials.map((test) => (
      <TestCards key={test.name} test={test} />
    ))}
  </div>

  {/* Right Button */}
  <button 
    onClick={() => {
      const newIndex = firstIndex + 2 >= Testimonials.length ? 0 : firstIndex + 2;
      setFirstIndex(newIndex);
      setLastIndex(newIndex + 2);
    }} 
    className="bg-transparent text-blue-600 text-3xl p-2 rounded-full hover:bg-gray-100 transition-all ease-in-out mx-4"
  >
    <FaArrowRight />
  </button>
</div>
    </div>
  );
};

export default Home;

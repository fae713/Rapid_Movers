import React from 'react';
import AboutIMG from '../assets/images/aboutIMG.jpg';
import TeamMember1 from '../assets/images/aboutIMG.jpg'; // Placeholder images
import TeamMember2 from '../assets/images/aboutIMG.jpg';
import TeamMember3 from '../assets/images/aboutIMG.jpg';

const About = () => {
  return (
    <div className='py-20 px-5 md:px-10 lg:px-20'>
      {/* Intro Section */}
      <div className='mt-32 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 items-end'>
        <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold col-span-2 w-full'>
          We set out to build <br />
          <span className='text-gray-500'>a better way to move.</span>
        </h2>
        <p className='pt-5 md:pt-8'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* About Image Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 h-auto mt-32'>
        <div className='w-full h-[304px] lg:h-[504px] mt-5 col-span-1 md:col-span-2'>
          <img className='w-full h-full object-cover' src={AboutIMG} alt="About Us" />
        </div>
        <div className='w-full h-[304px] lg:h-[504px] mt-5'>
          <img className='w-full h-full object-cover' src={AboutIMG} alt="Our Mission" />
        </div>
      </div>

      {/* Meet the Team Section */}
      <div className='mt-32'>
  <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-center mb-10'>
    Meet the Team
  </h2>
  <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
    {/* Team Member 1 */}
    <div className='text-center'>
      <div className='w-40 h-40 mx-auto rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src={TeamMember1} alt="Favour Michael" />
      </div>
      <h3 className='text-xl font-semibold mt-5'>Favour Michael</h3>
      <p className='text-gray-500 text-sm mt-1'>Co-Founder & CEO</p> {/* Title Added */}
      <p className='text-gray-600 mt-2'>
        Passionate about logistics and creating seamless moving experiences.
      </p>
    </div>

    {/* Team Member 2 */}
    <div className='text-center'>
      <div className='w-40 h-40 mx-auto rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src={TeamMember2} alt="Jane Doe" />
      </div>
      <h3 className='text-xl font-semibold mt-5'>Jane Doe</h3>
      <p className='text-gray-500 text-sm mt-1'>Co-Founder & Chief Operations Officer</p> {/* Title Added */}
      <p className='text-gray-600 mt-2'>
        Ensures every move is efficient and stress-free.
      </p>
    </div>

    {/* Team Member 3 */}
    <div className='text-center'>
      <div className='w-40 h-40 mx-auto rounded-full overflow-hidden'>
        <img className='w-full h-full object-cover' src={TeamMember3} alt="John Smith" />
      </div>
      <h3 className='text-xl font-semibold mt-5'>Blessing Agbali</h3>
      <p className='text-gray-500 text-sm mt-1'>Co-Founder & Head of Customer Relations</p> {/* Title Added */}
      <p className='text-gray-600 mt-2'>
        Dedicated to delivering outstanding customer service.
      </p>
    </div>
  </div>
</div>
    </div>
  );
};

export default About;

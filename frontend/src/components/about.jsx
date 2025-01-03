import React from 'react'
import AboutIMG from '../assets/images/aboutIMG.jpg'

const About = () => {
  return (
    <div className='py-20 px-5 md:px-10 lg:px-20 '>
      <div className='mt-32 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 items-end '>
        <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold col-span-2 w-full'>We set out to build <br/>
        <span className='text-gray-500'>a better way to move.</span></h2>
        <p className='pt-5 md:pt-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 h-auto mt-32'>
        <div className='w-full h-[304px] lg:h-[504px] mt-5 col-span-1 md:col-span-2 '>
          <img className='w-full h-full object-fill' src={AboutIMG} alt="" />
        </div>

        <div className='w-full h-[304px] lg:h-[504px] mt-5 '>
          <img className='w-full h-full object-fill' src={AboutIMG} alt="" />
        </div>
      </div>

      <div>
        <h2 className='text-lg md:text-xl lg:text-2xl font-semibold text-center'>Meet the team</h2>
        <div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <p>Favour Michael</p>
          </div>

          <div>
            <div>
              <img src="" alt="" />
            </div>
            <p>Favour Michael</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'





const Quotes2 = () => {

  const { pathname } = useLocation();
  useEffect(() => {
     window.scrollTo(0,0);
  }, [pathname])
  

    const onSubmit = ( data) => {
        console.log(data);
    }
      
    const schema = yup.object({
        firstname: yup.string().required("Please enter your firstname"),
        lastname: yup.string().required("Please enter your lastname"),
        email: yup.string().email("Kindly enter a valid email").required("Please enter your email"),
        number: yup.string().matches(/^[0-9]+$/, "Please enter a valid number").required("Please enter your number"),
        pickup: yup.string(),
        dropoff: yup.string()
    });
    
    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });
  


  return (
    <div className='pt-20'>

      <div className='my-20'>
        <p className='text-center text-xl md:text-2xl font-semibold text-blue-700'>Get A Quote</p>
      <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)} className='my-10 text-center bg-[#f2f2f2] py-10 px-10 mx-10 md:mx-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  <div className="mb-3 flex flex-col  items-start text-left w-full">
                    <label htmlFor="firstname" className="text-sm font-medium text-gray-700 mb-4 mr-4">First Name</label>
                    <input type="text" id="firstname" name="firstname" placeholder='Enter your first name' className=" w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none" 
                    {...register('firstname')}>
                    </input>
                    <p className='text-red-700 text-sm'>{errors.firstname?.message}</p>
                  </div>

                  <div className="mb-3 flex flex-col  items-start text-left w-full">
                    <label htmlFor="lastname" className="text-sm font-medium text-gray-700 mb-4 mr-4">Last Name</label>
                    <input type="text" id="lastname" name="lastname" placeholder='Enter your last name' className=" w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none" 
                    {...register('lastname')}>
                    </input>
                    <p className='text-red-700 text-sm'>{errors.lastname?.message}</p>
                  </div>

                  <div className="mb-3 flex flex-col  items-start text-left w-full">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-4 mr-4">Email</label>
                    <input type="email" id="email" name="email" placeholder='Enter email' className=" w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none"
                    {...register('email')}>
                    </input>
                    <p className='text-red-700 text-sm'>{errors.email?.message}</p>
                  </div>
                  
                  <div className="mb-3 flex flex-col  items-start text-left w-full">
                    <label htmlFor="number" className="text-sm font-medium text-gray-700 mb-4 mr-4">Phone Number</label>
                    <input type="number" id="number" name="number" placeholder='Enter phone number' className=" w-[100%] p-3 border border-gray-300 rounded-md focus:outline-none"
                    {...register('number')}>
                    </input>
                    <p className='text-red-700 text-sm'>{errors.number?.message}</p>
                  </div>

                  <div className="mb-3 flex flex-col  items-start text-left w-full h-full">
                    <label htmlFor="pickup" className="text-sm font-medium text-gray-700 mb-4 mr-4">Pick-up Address</label>
                    <div className='w-[100%] h-[160px] p-3 border border-gray-300 rounded-md focus:outline-none bg-white'>
                      <textarea type="text" id="pickup" name="pickup" placeholder='Enter your pick-up address' className="w-full h-full resize-none p-3 focus:outline-none" {...register('pickup')}></textarea>
                    </div>
                    <p className='text-red-700 text-sm'>{errors.pickup?.message}</p>
                  </div>

                  <div className="mb-3 flex flex-col  items-start text-left w-full h-full">
                    <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-4 mr-4">Drop-off Address</label>
                    <div className='w-[100%] h-[160px] p-3 border border-gray-300 rounded-md focus:outline-none bg-white'>
                      <textarea type="text" id="dropoff" name="dropoff" placeholder='Enter your drop-off address' className="w-full h-full resize-none p-3 focus:outline-none" {...register('dropoff')}></textarea>
                    </div>
                    <p className='text-red-700 text-sm'>{errors.dropoff?.message}</p>
                  </div>
        </div>


        <button type='submit' className=" mt-5 md:mt-10 py-3 text-sm items-center h-full w-40 place-items-center bg-blue-700 text-white hover:bg-blue-800">
        Submit
        </button>
      </form>
      </div>






    </div>
  )
}

export default Quotes2
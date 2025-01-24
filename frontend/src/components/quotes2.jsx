import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FaWhatsapp, FaUserCheck } from 'react-icons/fa'; // Icons

const GetAQuoteForm = () => {
  const onSubmit = (data) => {
    console.log(data);
  };

  const schema = yup.object({
    preferredMoveDate: yup.string().required('Please enter your preferred move date'),
    preferredInspectionDate: yup.string().required('Please enter your preferred inspection date'),
    additionalInfo: yup.string(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="pt-10 px-4 md:px-20">
      <div className="my-10">
        <p className="text-center text-2xl font-semibold text-blue-700">Get A Quote</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-10 bg-gray-100 py-8 px-6 md:px-16 mx-auto max-w-4xl rounded-md shadow-md"
        >
          {/* Inspection Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <FaWhatsapp className="text-green-500 text-4xl mb-2" />
              <h3 className="text-lg font-medium mb-2">WhatsApp Video Inspection</h3>
              <button
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md w-full sm:w-auto"
              >
                Select WhatsApp Inspection
              </button>
            </div>
            <div className="flex flex-col items-center">
              <FaUserCheck className="text-black text-4xl mb-2" />
              <h3 className="text-lg font-medium mb-2">Physical Inspection</h3>
              <button
                type="button"
                className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-md w-full sm:w-auto"
              >
                Select Physical Inspection
              </button>
            </div>
          </div>

          {/* Schedule Form */}
          <div>
            <h2 className="text-xl font-semibold mb-6">Schedule An Inspection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="preferredMoveDate" className="text-sm font-medium text-gray-700 mb-2">
                  Preferred move date
                </label>
                <input
                  type="text"
                  id="preferredMoveDate"
                  placeholder="dd-mm-yyyy"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('preferredMoveDate')}
                />
                <p className="text-red-600 text-sm mt-1">{errors.preferredMoveDate?.message}</p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="preferredInspectionDate" className="text-sm font-medium text-gray-700 mb-2">
                  Preferred inspection date
                </label>
                <input
                  type="text"
                  id="preferredInspectionDate"
                  placeholder="dd-mm-yyyy"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('preferredInspectionDate')}
                />
                <p className="text-red-600 text-sm mt-1">{errors.preferredInspectionDate?.message}</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="flex flex-col mt-8">
              <label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700 mb-2">
                Additional information / things to consider
              </label>
              <textarea
                id="additionalInfo"
                placeholder="Enter any additional details"
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                {...register('additionalInfo')}
              ></textarea>
              <p className="text-red-600 text-sm mt-1">{errors.additionalInfo?.message}</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-md w-full sm:w-auto"
            >
              Get A Quote
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GetAQuoteForm;

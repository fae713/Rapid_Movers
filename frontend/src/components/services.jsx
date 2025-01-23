import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaMapMarkerAlt, FaSuitcase } from 'react-icons/fa';

const Services = () => {
  const [openService, setOpenService] = useState(null);

  // Mock services data
  const services = [
    {
      id: 1,
      title: 'Residential Move',
      description: 'Effortless moving for your home with care and precision.',
      link: '/services/residential',
      icon: <FaHome className="text-blue-500 w-8 h-8" />, // Residential Move Icon
    },
    {
      id: 2,
      title: 'Commercial Move',
      description: 'Specialized services for offices, retail, and business spaces.',
      link: '/services/commercial',
      icon: <FaBuilding className="text-green-500 w-8 h-8" />, // Commercial Move Icon
    },
    {
      id: 3,
      title: 'Inter-State Move',
      description: 'Reliable long-distance moving solutions across states.',
      link: '/services/inter-state',
      icon: <FaMapMarkerAlt className="text-red-500 w-8 h-8" />, // Inter-State Move Icon
    },
    {
      id: 4,
      title: 'Office Move',
      description: 'Efficient office relocation for seamless business transitions.',
      link: '/services/office',
      icon: <FaSuitcase className="text-yellow-500 w-8 h-8" />, // Office Move Icon
    },
  ];

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <div className="pt-32 px-5 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Our Services
      </h2>

      <div className="space-y-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg shadow-md p-5 cursor-pointer hover:bg-gray-100"
          >
            {/* Service Header */}
            <div
              className="flex justify-between items-center"
              onClick={() => toggleService(service.id)}
            >
              <div className="flex items-center gap-3">
                {/* Icon */}
                {service.icon}
                {/* Title */}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <span className="text-gray-500">
                {openService === service.id ? '-' : '+'}
              </span>
            </div>

            {/* Dropdown Content */}
            {openService === service.id && (
              <div className="mt-3 text-gray-600">
                <p>{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-block mt-2 text-blue-500 underline"
                >
                  Learn More
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

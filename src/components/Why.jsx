import React from 'react'
import water from '../assets/water.webp'

const Why = () => {
  return (
    <div
      className="py-16 flex flex-col justify-center items-center bg-cover bg-center bg-blue-300 relative"
      style={{ backgroundImage: `url(${water})` }}
    >
      {/* Overlay with blur effect */}
      <div className="absolute inset-0 backdrop-blur-lg bg-black/30"></div>

      <div className="container mx-auto px-10 lg:px-20 relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl text-white font-bold text-center my-2">
          Why Choose MME?
        </h2>
        <p className="text-md mb-10 mt-4 text-white">
          We do innovation for better health and secure future. We are the best
          manufacturer and seller of water purifier, air purifier, and
          health-related products.
        </p>

        {/* List of Features */}
        <ul className="text-xl text-left font-medium space-y-4">
          <li className="text-white text-lg font-medium">
            Fixed Rate for Spare Parts
          </li>
          <li className="text-white text-lg font-medium">
            Educated and Expert Technicians
          </li>
          <li className="text-white text-lg font-medium">
            Fast Service within 2 Hours
          </li>
          <li className="text-white text-lg font-medium">
            30-Day Satisfaction Guarantee
          </li>
        </ul>
      </div>
      <button className="mt-2 text-lg font-bold bg-white p-3 px-7 rounded-full border-blue-300 border-4 flex items-center justify-center text-center text-blue-700 relative z-10">
        Read More
      </button>
    </div>
  )
}

export default Why

import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import banner from '../assets/pages-banner.jpg' // Replace with your about banner
import shape from '../assets/shape.png'
import about from '../assets/about.png'
import CustomerReviews from './CustomerReviews'
import Why from './Why'
import WaterSoftening from './WaterSoftening'

const AboutUs = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div
        className="relative w-full h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex flex-col justify-center sm:items-start  items-center h-full w-full">
          <h2 className="text-4xl sm:text-6xl font-bold text-center sm:text-start text-white mb-12 sm:ps-20">
            About Us
          </h2>
        </div>
        {/* Shape Decoration */}
        <img
          src={shape}
          alt="Shape"
          className="absolute bottom-0 left-0 w-full"
        />
      </div>

      {/* About Section */}
      <div className="px-6 py-12 mx-auto mt-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-blue-800">
          About Us
        </h2>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center mt-8">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={about} // Replace with your actual image
              alt="Our Mission"
              className="rounded-lg"
            />
          </div>

          {/* Text */}
          <div className="text-gray-700 text-lg">
            Welcome to Shri Mangal Murti Enterprises, your one-stop destination
            for all types of water purification needs. We specialize in
            providing high-quality RO Water Purifiers, RO Plants, Water Filters,
            and Water Softeners to ensure that every drop of water you drink is
            pure, clean, and safe. We believe that access to clean water is a
            basic human right, and we are committed to offering innovative,
            reliable, and affordable solutions to make sure that you and your
            family are always drinking water that is free from impurities.
          </div>
        </div>
      </div>

      <CustomerReviews />
      <WaterSoftening />
      <Why />

      <Footer />
    </>
  )
}

export default AboutUs

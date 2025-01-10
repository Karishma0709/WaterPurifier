import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import banner from '../assets/pages-banner.jpg'
import shape from '../assets/shape.png'
import { FaTools, FaCogs, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'

const Services = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div
        className="flex sm:justify-start justify-center sm:items-center w-full h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <h2 className="text-6xl flex font-bold text-center sm:text-start items-center text-white mb-12 sm:ps-20">
          Services
        </h2>
      </div>

      {/* Services Section */}
      <div className="container px-6 py-12 mx-auto mt-10">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Our Services
        </h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          We provide top-notch services to ensure your water purifiers are
          running efficiently, providing clean and safe water for your needs.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1: Installation */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaTools className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Installation Services
            </h3>
            <p className="text-gray-600 mb-4">
              We offer professional installation services for all types of water
              purifiers. Our team ensures that your purifier is set up for
              optimal performance and longevity.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Hassle-free installation
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Fast and reliable service
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Expert installation team
              </li>
            </ul>
          </div>

          {/* Service 2: Maintenance */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaCogs className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Maintenance Services
            </h3>
            <p className="text-gray-600 mb-4">
              Regular maintenance ensures your water purifier works efficiently.
              We offer comprehensive maintenance plans to keep your system
              running smoothly.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Regular filter replacement
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Water quality checks
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Comprehensive system inspection
              </li>
            </ul>
          </div>

          {/* Service 3: Repair */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaShieldAlt className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Repair Services
            </h3>
            <p className="text-gray-600 mb-4">
              Our experienced technicians provide fast and reliable repair
              services for all types of water purifiers. We are here to ensure
              that your purifier works like new.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Fast response time
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Experienced repair technicians
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Affordable repair solutions
              </li>
            </ul>
          </div>

          {/* Service 4: Filter Replacement */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaTools className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Filter Replacement
            </h3>
            <p className="text-gray-600 mb-4">
              Regular filter replacement ensures optimal performance. We provide
              high-quality filters to keep your water clean and safe.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Genuine and quality filters
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Timely filter replacement
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Affordable pricing
              </li>
            </ul>
          </div>

          {/* Service 5: Water Quality Testing */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaShieldAlt className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Water Quality Testing
            </h3>
            <p className="text-gray-600 mb-4">
              We offer professional water quality testing services to ensure
              your purifier is delivering safe, clean water.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Comprehensive water tests
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Results in real-time
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Safe water guaranteed
              </li>
            </ul>
          </div>

          {/* Service 6: 24/7 Support */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaTools className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              24/7 Support
            </h3>
            <p className="text-gray-600 mb-4">
              We provide 24/7 customer support for all your water purifier
              needs. Our team is available around the clock to assist you.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Round-the-clock assistance
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Immediate response
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />
                Available through multiple channels
              </li>
            </ul>
          </div>
        </div>
      </div>

      <img
        src={shape}
        alt="Shape"
        className="absolute bottom-[15px] left-0 w-full"
      />
      {/* Footer */}
      <Footer />
    </>
  )
}

export default Services

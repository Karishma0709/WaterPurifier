import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="text-white bg-primary mt-5">
      <div className="container px-6 pt-12 pb-3">
        {/* Footer Top Section */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left gap-8">
          <div className="lg:w-2/3">
            <h3 className="text-2xl md:text-3xl font-bold animate__animated animate__fadeInUp mb-4">
              Experience Pure Water with Excellence and Reliability
            </h3>
            <p className="text-sm opacity-90">
              Discover the world of clean and safe water with RO Purifiers
              designed for your well-being.
            </p>
          </div>
        </div>

        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Contact Us */}
          <div>
            <h4 className="mb-4 text-lg font-semibold border-b-2 pb-2 inline-block">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1" />
                <span className="text-sm">
                  <strong>Our Location:</strong>
                  <br />
                  R/O Purifier HQ, 123 Pure Water Street, Clean City, Bhopal
                  (M.P.)
                </span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1" />
                <span className="text-sm">
                  <strong>Office Address:</strong>
                  <br />
                  C-101, Aqua Building, Safe Water Lane, Bhopal (M.P.)
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-lg font-semibold border-b-2 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm transition">
                  → About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm transition">
                  → Contact Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm transition">
                  → Our Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm transition">
                  → Our Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="mb-4 text-lg font-semibold border-b-2 pb-2 inline-block">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center text-sm">
                <FaEnvelope className="mr-3" />
                info@ropurifier.com
              </li>
              <li className="flex items-center text-sm">
                <FaPhoneAlt className="mr-3" />
                +91 808599475, +91 8602954488
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center border-t border-gray-700 pt-6">
          <p className="text-xs">
            &copy; 2024 R/O Purifier. All Rights Reserved.
          </p>
          <p className="text-xs">
            Powered by:{' '}
            <a
              href="https://ssstechies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              SSS Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import Slider from 'react-slick'
import { FaQuoteLeft } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css' // Slick CSS
import 'slick-carousel/slick/slick-theme.css' // Slick Theme CSS

const CustomerReviews = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  }

  // Sample review data
  const reviews = [
    {
      name: 'John Doe',
      review:
        'PureFlow Water Purifiers have completely transformed the quality of water in our home. Highly recommend their services!',
      location: 'New York, USA',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      review:
        'The installation process was smooth and hassle-free. Their customer service is excellent!',
      location: 'London, UK',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'Rahul Sharma',
      review:
        "I love how clean and safe the water tastes after using PureFlow's purifier. Their team is very professional.",
      location: 'Delhi, India',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
  ]

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex justify-center items-center">
        {' '}
        <FaQuoteLeft className=" flex justify-center items-center text-4xl text-blue-800 mb-4" />
      </div>

      <h2 className="text-4xl font-bold text-center text-blue-800 mb-5">
        Our Exhort Happy Clients say !
      </h2>
      <p className="text-lg w-2/3 ms-48 text-center mb-12">
        We can help you to select the best quality of Aquaguard Ro and help you
        with the installation of a new Aquaguard Ro.
      </p>
      <div className="relative">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center mt-10"
            >
              {/* Review Card */}
              <div className="flex items-center justify-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full border-2 border-blue-500 mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
                <p className="text-lg text-gray-700 italic mb-6">
                  "{review.review}"
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CustomerReviews

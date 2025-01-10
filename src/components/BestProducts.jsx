import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css' // Slick CSS
import 'slick-carousel/slick/slick-theme.css' // Slick Theme CSS
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.png'
import img5 from '../assets/tc-logo.png'

const BestProducts = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 4 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows for a cleaner look
    responsive: [
      {
        breakpoint: 1024, // For tablets and medium screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For smaller devices
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For extra small devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  // Sample product data
  const products = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img5,
    },
  ]

  return (
    <div className="py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Our Best Products
        </h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg w-60 h-80   transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-60 h-80 object-cover rounded-t-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default BestProducts

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

// Import assets
import bg1 from '../assets/banner1.jpg'
import bg2 from '../assets/banner1.jpg'
import bg3 from '../assets/banner1.jpg'

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Swiper Slider */}
      <Swiper
        loop={true} // Infinite loop
        autoplay={{
          delay: 4000, // Longer duration for smooth transition
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        effect="fade" // Smooth fade transition
        fadeEffect={{ crossFade: true }} // Enable crossfade for smoother effect
        pagination={{ clickable: true }} // Pagination dots
        navigation={true} // Navigation arrows
        modules={[Autoplay, Pagination, Navigation, EffectFade]} // Import Swiper modules
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${bg1})` }}
          >
            <div className="relative z-10 flex flex-col sm:items-start justify-center items-center h-full text-center text-white px-16 sm:px-40">
              <div className="sm:w-[70%] w-[100%] flex flex-col justify-center items-center ">
                <h1 className="text-3xl sm:text-5xl font-bold text-center">
                  Get Connect with our RO Experts
                </h1>
                <span className="mt-4 text-sm tracking-wide uppercase sm:text-left text-center">
                  We provide advanced solution with modern technologies
                </span>
                <button className="mt-2 text-lg font-bold bg-blue-800 p-2  px-5 rounded-full border-4 flex items-center justify-center text-center">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${bg2})` }}
          >
            <div className="relative z-10 flex flex-col sm:items-start justify-center items-center h-full text-center text-white px-16 sm:px-24">
              <div className="sm:w-[70%] flex flex-col justify-center items-center ">
                <h1 className="text-3xl sm:text-5xl font-bold text-center">
                  Download TO Template RO - Ro Service in CodingMSTR At Just
                  200rs/-
                </h1>
                <span className="mt-4 text-sm tracking-wide uppercase sm:text-left text-center">
                  Fast and excellent RO service Provider in CodingMSTR
                </span>
                <button className="mt-2 text-lg font-bold bg-blue-800 p-2 px-5 rounded-full border-4 flex items-center justify-center text-center">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Book a Visit Button */}
      <a
        href="#"
        className="absolute right-0 px-6 py-3 tracking-wide text-white uppercase transform -translate-y-1/2 bg-purple-700 top-1/2 rotate-60"
        style={{ writingMode: 'vertical-rl' }}
      >
        Book a Visit
      </a>
    </section>
  )
}

export default Hero

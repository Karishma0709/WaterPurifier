// import React from 'react'
// import bg from '../assets/ClientReview.jpg'
// import tlogo from '../assets/tc-logo.png'

// const Review = () => {
//   return (
//     <div className="w-full h-screen mt-10">
//       {' '}
//       {/* Ensures the container takes full screen height */}
//       <div
//         className="flex justify-center items-center w-full h-full bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${bg})` }}
//       >
//         <div className="flex items-center justify-center">
//           <div>
//             <img src={tlogo} alt="TechCrunch" className="h-20 w-20" />
//           </div>
//           <div>slider</div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Review
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import tlogo from '../assets/tc-logo.png'

import bg from '../assets/ClientReview.jpg'

const Review = () => {
  return (
    <div className="w-full h-screen mt-10">
      {/* Background Image Container */}
      <div
        className="flex  flex-col sm:flex-row sm:justify-start justify-center ps-0 sm:ps-20 sm:items-center w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex justify-center items-center my-3">
          <img src={tlogo} />
        </div>
        {/* Slider Container */}
        <div className="w-full max-w-lg px-4  bg-opacity-90 rounded-lg ">
          <Swiper
            loop={true}
            autoplay={{
              delay: 4000, // Auto-slide every 4 seconds
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }} // Pagination dots
            modules={[Pagination, Autoplay]} // Removed Navigation module
            className="h-64"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="flex flex-col items-start justify-start h-full">
                <h1 className="text-3xl sm:text-5xl font-bold text-start text-blue-700">
                  Trusted From Our Clients
                </h1>
                <p className="text-md  text-gray-700 text-start my-3">
                  "The service provided by this company was exceptional. Highly
                  recommend their expertise and support!"
                </p>
                <button className="text-blue-900 p-2 px-7 border-2 border-blue-900 rounded-full">
                  Know more
                </button>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="flex flex-col items-start justify-start h-full">
                <h1 className="text-3xl sm:text-5xl font-bold text-start text-blue-700">
                  Trusted From Our Clients
                </h1>
                <p className="text-md  text-gray-700 text-start my-3">
                  "Their team is knowledgeable and efficient. I’m very happy
                  with the results!"
                </p>
                <button className=" text-blue-900 p-2 px-7 border-2 border-blue-900 rounded-full">
                  Know more
                </button>{' '}
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="flex flex-col items-start justify-start h-full">
                <h1 className="text-3xl sm:text-5xl font-bold text-start text-blue-700">
                  Trusted From Our Clients
                </h1>
                <p className="text-md  text-gray-700 text-start my-3">
                  "Quick, reliable, and professional service. I will definitely
                  work with them again!"
                </p>
                <button className=" text-blue-900 p-2 px-7 border-2 border-blue-900 rounded-full">
                  Know more
                </button>{' '}
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Review

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const testimonialsData = [
  {
    clientAnswer: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',
    clientName: 'John Doe',
    clientLogo: require('./fa11.jpg'),
    ceoName: 'Jane Smith',
    companyName: 'Example Inc.',
  },
  {
    clientAnswer: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ',

    clientName: 'Alice Johnson',
    clientLogo: require('./fa11.jpg'),
    ceoName: 'Robert Brown',
    companyName: 'Sample Corp.',
  },
  // Add more testimonials data objects as needed
];

function TestimonialsSlider() {
  return (
    <div className="bg-gray-900 px-4 md:px-16 lg:px-32 pb-10 pt-8 ">
      <h2 className="text-2xl  text-white font-bold mb-4 text-center pb-8">Our Client Testimonials</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }} 
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-800 text-white rounded-lg shadow-lg p-6 h-full">
            <p className="text-xl  mb-4 text-center font-serif">
                {testimonial.clientAnswer}
              </p>
              <div className="flex flex-col items-center mb-4">
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={testimonial.clientLogo}
                  alt={testimonial.clientName}
                />
                <h3 className="text-xl font-semibold mt-2">{testimonial.clientName}</h3>
              </div>
              <div className="text-center">
                <p className="font-semibold">{testimonial.ceoName}</p>
                <p>{testimonial.companyName}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TestimonialsSlider;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const testimonialsData = [
  {
    clientAnswer: 'We love their products and excellent customer service!',
    clientName: 'John Doe',
    clientLogo: 'path_to_logo_image_1',
    ceoName: 'Jane Smith',
    companyName: 'Example Inc.',
  },
  {
    clientAnswer: 'Their solutions have significantly improved our business efficiency.',
    clientName: 'Alice Johnson',
    clientLogo: 'path_to_logo_image_2',
    ceoName: 'Robert Brown',
    companyName: 'Sample Corp.',
  },
  // Add more testimonials data objects as needed
];

function TestimonialsSlider() {
  return (
    <div className="px-4 md:px-16 lg:px-32">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Client Testimonials</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg shadow-lg p-6 h-full">
              <p className="text-lg font-semibold mb-4 text-center">{testimonial.clientAnswer}</p>
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

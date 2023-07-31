

import React from 'react'
import '.././App.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const industriesData = [
    {
      title: 'Fuse Hubs1',
      description: 'Leverage the latest technology and AI solutions that suit your business needs.',
    },
    {
      title: 'Fuse Hubs2',
      description: 'Leverage the latest technology and AI solutions that suit your business needs.',
    },
    {
        title: 'Fuse Hubs3',
        description: 'Leverage the latest technology and AI solutions that suit your business needs.',
      },
      {
        title: 'Fuse Hubs4',
        description: 'Leverage the latest technology and AI solutions that suit your business needs.',
      },
      {
        title: 'Fuse Hubs5',
        description: 'Leverage the latest technology and AI solutions that suit your business needs.',
      },
    // Add more industry data objects as needed
  ];


function Slider() {
  return (
    <div className=" bg-gray-300 px-4 md:px-16 lg:px-32 pt-12 pb-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Industries We Serve</h2>
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >

{industriesData.map((industry, index) => (
          <SwiperSlide key={index}>
            <div className="card-container bg-slate-700  text-white  rounded-lg shadow-lg p-4 ">
              <div className="flex flex-col items-center h-full py-2">
                <h3 className="text-xl font-semibold text-center">{industry.title}</h3>
              </div>
              <p className="">{industry.description}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
                Explore
              </button>
            </div>
          </SwiperSlide>
        ))}
    ...
  </Swiper>
  </div>
  )
}

export default Slider
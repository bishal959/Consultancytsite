import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react';

import ServicesSection from './Service';
import Cards from './Cards';
import Serve from './Serve';


const Main = () => {

  return (
    <>
    <section className="rounded-lg bg-blue-100   py-7 px-44 ">
      <div className="container mx-auto">
        <ServicesSection />

        <Cards />



      </div>
     

    </section>
 
     

     </>
  );
};

export default Main;
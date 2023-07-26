import React from 'react';
import ServicesSection from './Service';
import Cards from './Cards';

const Main = () => {
  return (
    <section className="bg-gray-100 py-12 px-12 mx-4">
      <div className="container mx-auto">
        <ServicesSection />
        <Cards />
      </div>
    </section>
  );
};

export default Main;
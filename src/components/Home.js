import React from 'react';

const   Home = () => {
  return (
    <section className="bg-slate-700  min-h-screen text- flex justify-center items-center ">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className=" text-6xl font-semibold text-white mb-4">Democratize AI</h2>
          <p className= "font-semibold text-white mb-8">
            AI Strategy & Solutions | AI Engines | AI Education & Talent
          </p>
          <button className="bg-teal-600  hover:bg-blue-600 transition-transform transform hover:translate-y-1 focus:outline-none py-3 px-6 rounded-full ">
            START YOUR AI JOURNEY HERE
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;


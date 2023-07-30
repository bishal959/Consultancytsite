const Cards= () => {
  return (
    <section className=" py-12  ">
       <h2 className="text-4xl font-semibold text-gray-800 pb-10 ">Our Approach</h2>
      <div className="container mx-auto flex justify-center">
        
        <div className="flex space-x-4"> 
        
          {/* First Card */}
          <div className="bg-white hover:bg-gray-200 rounded-lg shadow-lg p-4 ">
            <div className="flex items-center mb-4">
             
              <h3 className="text-xl font-semibold text-center">Fuse Hubs</h3>
            </div>
            <p className="text-gray-600">
              Leverage the latest technology and AI solutions that suit your business needs.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
              Explore
            </button>
          </div>

          {/* Second Card */}
          <div className="bg-white hover:bg-gray-200  rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4">
              
              <h3 className="text-xl font-semibold">Leverage Technology</h3>
            </div>
            <p className="text-gray-600">
              Leverage the latest technology and AI solutions that suit your business needs.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
              Explore
            </button>
          </div>

          {/* Third Card */}
          <div className="bg-white hover:bg-gray-200  rounded-lg shadow-lg p-4">
            <div className="flex items-center mb-4">
            
              <h3 className="text-xl font-semibold">AI Solutions</h3>
            </div>
            <p className="text-gray-600">
              Leverage the latest technology and AI solutions that suit your business needs.
            </p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full focus:outline-none">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards
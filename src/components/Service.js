const ServicesSection = () => {
  return (
    <section className="bg-gray-300 py-12 px-44">
        <h2 className="text-4xl font-semibold text-gray-800 pb-10 ">Our Services</h2>
      <div className="container  flex flex-wrap i mx-auto ">
        <div className="lg:w-1/2 px-4 py-4 lg:pr-16 mb-4 lg:mb-0">
          <img
             src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260 " // Replace with the new Pexels image link/ Replace with the actual path to your image
            alt="Company Image"
            className="rounded-lg shadow-lg shadow-black object-cover "
          />
        </div>
        <div className="lg:w-1/2 px-4 py-10  ">
         
          <h2 className="text-gray-600 font-semibold my-2"> </h2>
            AI Strategy & Solutions
            <p className="text-black">
            We provide AI Strategy and Solutions with our unique approach of industry and tech hubs; our IP on AI
            engines along with talent developed from our AI education program.
          </p>
        </div>
      </div>
    </section>
    
  );
};

export default ServicesSection;
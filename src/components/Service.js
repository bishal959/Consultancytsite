const ServicesSection = () => {
  return (
    <section className="bg-gray-300 py-12 px-4 md:px-24 lg:px-24">
      <h2 className="text-4xl text-center font-semibold text-gray-900 pb-10">Our Services</h2>
      <div className="container flex flex-wrap mx-auto items-center">
        <div className="lg:w-1/2 mb-4 lg:mb-0 pr-4"> {/* Add 'pr-8' for right padding */}
          <div
            className="w-96 h-60 md:h-72  bg-center bg-no-repeat bg-cover rounded-lg shadow-lg"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)' }}
          ></div>
        </div>
        <div className="lg:w-1/2  pl-24 ">
          <h2 className="text-gray-600 font-semibold my-2 text-xl pl-10">AI Strategy & Solutions</h2>
          <p className="text-black">
            We provide AI Strategy and Solutions with our unique approach of industry and tech hubs;
            our IP on AI engines along with talent developed from our AI education program.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

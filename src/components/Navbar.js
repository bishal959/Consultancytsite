import React, { useEffect, useRef } from 'react';

 const Navbar= () => {
  const buttonRef = useRef(null);
   
  useEffect(() => {
    const buttonElement = buttonRef.current;

    const hoverAfterDelay = () => {
      setTimeout(() => {
        buttonElement.classList.add('hover:bg-blue-600');
      }, 1000); // Change the delay time (in milliseconds) as desired
    };

    hoverAfterDelay();
  }, []);
    let Links =[
        {name:"Home",link:"/"},
        {name:"Service",link:"/"},
        {name:"About",link:"/"},
        {name:"Blog's",link:"/"},
        {name:"Solutions",link:"/"},
        {name:"Insight",link:"/"},
        {name:"Success",link:"/"},
        {name:"Company",link:"/"},
        
      ];

  return (
    <div className ='shadow-md w-full fixed top-0 left-0'>
        <div className ='md:flex items-center justify-between text-black bg-green-100  py-2 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
         text-gray-800'>
            Company Logo
            </div>

            <ul className='md:flex md:items-center   space-x-4 mr-20' >
                {
                    Links.map(link =>(
                       <li key={link.name} classname = 'md:ml-8 space-x-2 text-xl'>
                        <a href={link.link}  classname ="text=gray-800 hover:text-grey-400 duration-200">{link.name}</a>
                       </li>
                    ))
                }
                  <button
                  ref={buttonRef}
                  className="rounded-full bg-green-300 hover:bg-blue-600 transition-transform transform hover:translate-y-1 focus:outline-none px-6 py-2 rounded-full focus:outline-none transition-all"  >
                        Contact Us
                   </button>
            </ul>
        </div>
    </div>


  )
}

export default Navbar
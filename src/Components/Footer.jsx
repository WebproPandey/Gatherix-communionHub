import React, { useEffect, useState } from 'react';
import logo from '../assets/Frame.png';
import { Link } from 'react-router';
import PhoneFooter from './PhoneFooter';

const Footer = () => {

const [isPhone, setIsPhone] = useState(false);

useEffect(()=>{
  const handleResize = () =>{
    setIsPhone(window.innerWidth <= 768)
  };
  handleResize();

  return () => window.removeEventListener('resize', handleResize);
}, []);

  return (
   <>
    {!isPhone && (
      <footer className=" w-full">
      <div className="container w-full">
        <div className="grid grid-cols-3  w-full ">
        <div className='logo flex flex-col justify-start items-start gap-2'>
            <div className='flex  justify-center items-center'>
            <img src={logo} className='h-[5vh]' alt="" />
            <h1 className='poppins-bold text-[2vw] text-[#A98AD3]'>Gatherix</h1>
            </div>
            <div>
            <p className="text-[1.2vw] text-black">
               Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.
            </p>
            </div>
        </div>


          <div className='flex flex-col   items-center'>
            <h3 className="font-bold text-lg mb-4 text-black">Company</h3>
            <ul className="space-y-2 text-[#000] pl-4">
              <li className='Navbar w-fit after:bg-[#000]  '>Home</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Communities</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Event</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Leader</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Support</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Profile</li>
            </ul>
          </div>

          <div className="bg-gray-200/30 text-white p-6 rounded-lg  after:bg-white" >
            <h3 className="font-bold text-lg mb-4 text-black">Subscribe</h3>
            <form className="flex items-center  mb-4 gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-2 rounded-md text-black bg-black/20"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md"
              >
                &rarr;
              </button>
            </form>
          
          </div>
        </div>

        <div className="mt-5 flex justify-between items-center border-t-[1px] border-[#C9C9C9] pt-2 ">
     

          <div className="space-x-4 ">
            <Link className='Navbar w-fit text-[1.5vw] after:bg-[#000]  text-[#000] ' path="" >Terms</Link>
            <Link className='Navbar w-fit text-[1.5vw] after:bg-[#000]  text-[#000] ' path="" >Privacy</Link>
            <Link className='Navbar w-fit text-[1.5vw] after:bg-[#000]  text-[#000] ' path="" >Cookies</Link>
          </div>

          <div className="flex gap-[2vw] ">
          <div className="text-[#000] px-1 hover:text-white hover:bg-[#000] duration-300 ease-linear transition-all delay-75 border border-[#000] rounded-full">
          <i className="ri-facebook-fill text-[1.5vw]"></i>
            </div>
            <div className="text-[#000] px-1 hover:text-white hover:bg-[#000] duration-300 ease-linear transition-all delay-75 border border-[#000] rounded-full">
            <i className="ri-instagram-fill text-[1.5vw]"></i>   
            </div>
            <div className="text-[#000] px-1 hover:text-white hover:bg-[#000] duration-300 ease-linear transition-all delay-75 border border-[#000] rounded-full">
            <i className="ri-twitter-x-line text-[1.5vw]"></i>
            </div>
            <div className="text-[#000] px-1 hover:text-white hover:bg-[#000] duration-300 ease-linear transition-all delay-75 border border-[#000] rounded-full">
            <i className="ri-youtube-line text-[1.5vw]"></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )}
    {isPhone && (
      <PhoneFooter />
    )}
   </>
   
  );
};

export default Footer;

import React from 'react'
import HomeLogo from '../assets/Frame.png';
import { Link } from 'react-router';


const PhoneFooter = () => {
  return (
    <div>
           <div className='w-full  min-h-screen   py-4 flex flex-col items-center '>
         <div className='flex flex-col w-full items-center justify-center gap-[30px] '>
          <div className='logo flex justify-center items-center gap-2'>
                  <img src={logo} className='h-[5vh]' alt="" />
                  <h1 className='poppins-bold text-[2vw] text-[#A98AD3]'>Gatherix</h1>
                </div>

         <div className="w-full h-1/2 flex items-center justify-center gap-[15px]">
            <div className="text-[#000] px-1 hover:text-white e hover:bg-black h-[35px] w-[35px] border border-[#000] rounded-full">
              <i className="ri-facebook-fill text-[25px]"></i>
            </div>
            <div className="text-[#000] px-1 hover:text-white  hover:bg-black h-[35px] w-[35px] border  border-[#000] rounded-full">
               <i className="ri-linkedin-fill text-[25px]"></i>   
            </div>
            <div className="text-[#000] px-1 hover:text-white  hover:bg-black h-[35px] w-[35px] border  border-[#000] rounded-full">
               <i className="ri-twitter-x-line text-[25px]"></i>
            </div>
          </div>
          
         </div>

         <div className=" mt-[28px] text-white p-2  w-full bg-[#414141] rounded-lg  h-[256px] after:bg-black" >
            <h3 className="font-bold text-lg mb-4 text-orange-500">Subscribe</h3>
            <form className="flex items-center gap-2 mb-4">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-2 rounded-md text-gray-700"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-md"
              >
                &rarr;
              </button>
            </form>
            <p className="text-sm text-[#000]">
              Overide cool texts. Justo. Velit sit amet. Vivamus euismod semper
              porttitor. Overide cool texts & any design variations.
            </p>
          </div>


          <div className='flex flex-col w-full  h-full mt-2  border-b-2 border-[#414141]'>
    <div>
       <h3 className="font-bold text-orange-500 text-lg mb-2">Product</h3>
       <ul className=" text-[#000] leading-5  ">
       <li className='Navbar w-fit after:bg-[#000]'>Interior Designi</li>
              <li className='Navbar w-fit  after:bg-[#000] '>Exterior Designs</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Landscape-design</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Floorplan</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Engineering Drawings</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Architectual Drawing</li>
            </ul>
     </div>
     <div>
       <h3 className="font-bold text-orange-500 text-lg mb-2">Information</h3>
       <ul className=" text-[#000] leading-5 ">
       <li className='Navbar w-fit after:bg-[#000]  '>About us</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Contact us</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Terms and condition</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Intellectual property</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Complaint & suggestions</li>
              <li className='Navbar w-fit after:bg-[#000]  '>FAQ</li>
            </ul>
     </div>
     
     <div>
       <h3 className="font-bold text-orange-500 text-lg mb-2">Company</h3>
       <ul className=" text-[#000] leading-5  ">
       <li className='Navbar w-fit after:bg-[#000]  '>Tata Housing</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Mahindra Lifespaces</li>
              <li className='Navbar w-fit after:bg-[#000]  '>L&T Construction</li>
              <li className='Navbar w-fit after:bg-[#000]  '>DLF Limited</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Prestige Group</li>
              <li className='Navbar w-fit after:bg-[#000]  '>Oberoi Realty</li>
            </ul>
     </div>
    </div>

    <div className="space-x-6   text-[#000]  ">
            <Link className='Navbar w-fit   ' path="" >Terms</Link>
            <Link className='Navbar w-fit   ' path="" >Privacy</Link>
            <Link className='Navbar w-fit   ' path="" >Cookies</Link>
    </div>
         
         
    </div>
    
    </div>
  
  )
}

export default PhoneFooter
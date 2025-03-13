import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/Frame.png'
import { Link } from 'react-router'

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className='h-[10vh] w-full fixed flex items-center justify-between px-[4vw]  py-[3vw] z-[999] bg-white top-0 left-0' ref={dropdownRef}>
      <div className='logo flex justify-center items-center gap-2'>
        <img src={logo} className='h-[5vh]' alt="" />
        <h1 className='poppins-bold text-[2vw] text-[#A98AD3]'>Gatherix</h1>
      </div>
      <div className='mid flex items-center justify-center w-full'>
        <div className='w-[70%] flex items-center justify-evenly'>
          <Link to="/" className='text-[1.2vw] poppins-medium'>Home</Link>
          <div className='text-[1.2vw] poppins-medium cursor-pointer flex items-center relative' onClick={() => toggleDropdown('communities')}>
            Communities
            <i className="ri-arrow-drop-right-line text-[1.5vw]"></i>
            {activeDropdown === 'communities' && (
              <div className='absolute top-10 left-1/2 -translate-x-1/2 w-[15vw] mt-2 bg-white shadow-lg rounded-md'>
                <Link to="/create-communities" className='block px-4 py-2 text-[1.2vw] poppins-medium border-b'>Create Communities</Link>
                <Link to="/discover-communities" className='block px-4 py-2 text-[1.2vw] poppins-medium'>Discover Communities</Link>
              </div>
            )}
          </div>
          <div className='text-[1.2vw] poppins-medium cursor-pointer flex items-center relative' onClick={() => toggleDropdown('events')}>Events
            <i className="ri-arrow-drop-right-line text-[1.5vw]"></i>
            {activeDropdown === 'events' && (
              <div className='absolute top-10 left-1/2 -translate-x-1/2 w-[15vw] mt-2 bg-white shadow-lg rounded-md'>
                <Link to="/create-communities" className='block px-4 py-2 text-[1.2vw] poppins-medium border-b'>Create Event</Link>
                <Link to="/discover-communities" className='block px-4 py-2 text-[1.2vw] poppins-medium'>Discover Events</Link>
              </div>
            )}
          </div>
          <div className='text-[1.2vw] poppins-medium cursor-pointer flex items-center relative' onClick={() => toggleDropdown('leaders')}>Leaders
            <i className="ri-arrow-drop-right-line text-[1.5vw]"></i>
            {activeDropdown === 'leaders' && (
              <div className='absolute top-10 left-1/2 -translate-x-1/2 w-[15vw] mt-2 bg-white shadow-lg rounded-md'>
                <Link to="/create-communities" className='block px-4 py-2 text-[1.2vw] poppins-medium'>View Leaders</Link>
              </div>
            )}
          </div>
          <div className='text-[1.2vw] poppins-medium cursor-pointer flex items-center relative' onClick={() => toggleDropdown('support')}>Support
            <i className="ri-arrow-drop-right-line text-[1.5vw]"></i>
            {activeDropdown === 'support' && (
              <div className='absolute top-10 left-1/2 -translate-x-1/2 w-[15vw] mt-2 bg-white shadow-lg rounded-md'>
                <Link to="/create-communities" className='block px-4 py-2 text-[1.2vw] poppins-medium border-b'>Help Request</Link>
                <Link to="/discover-communities" className='block px-4 py-2 text-[1.2vw] poppins-medium'>Help request form</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="right">
        <button className='px-4 py-2 bg-cyan-500 text-black rounded-md'>
          SignUp
        </button>
      </div>
    </div>
  )
}

export default Navbar
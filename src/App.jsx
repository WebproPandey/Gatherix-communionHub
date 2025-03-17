import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import EventsPage from './Pages/CreateEventsPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import DiscoverEvent from './Pages/DescoverEvent'
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const App = () => {
  return (
    <div className='w-full  relative '>
      <Navbar/>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create-communities' element={<EventsPage/>} />
        <Route path='/discover-communities' element={<DiscoverEvent/>} />
      </Routes>
      <div className=' FooterSection w-full  md:px-[5vw] md:py-[3vw] relative  px-3   ' >
        <Footer/>
      </div>

    </div>
  )
}

export default App
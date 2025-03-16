import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import EventsPage from './Pages/EventsPage'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Extraspace from './Components/Extraspace'

const App = () => {
  return (
    <div className='w-full  relative  '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/upcoming-event' element={<EventsPage/>} />
      </Routes>
      <div className=' FooterSection w-full  md:px-[5vw] md:py-[3vw] relative  px-3   ' >
        <Footer/>
        <Extraspace/>
      </div>

    </div>
  )
}

export default App
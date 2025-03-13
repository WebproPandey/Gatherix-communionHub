import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import EventsPage from './Pages/EventsPage'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='w-full  relative  '>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/upcoming-event' element={<EventsPage/>} />
      </Routes>
    </div>
  )
}

export default App
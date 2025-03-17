import React from 'react'
import EventForm from '../Components/EventFrom'

const EventsPage = () => {
  return (
    <div className='  w-full pt-[15vw] md:pt-[8vw] px-[4vw]'>
       <h1 className=" text-[5vw] md:text-[3.2vw] poppins-bold text-black " >Plan & Create Your Event</h1>
        <div className="flex  w-full  gap-4 justify-between">
          <div className="w-full md:w-[60%] ">
            <p className="text-[3vw] md:text-[1.5vw] text-black poppins-medium  ">Fill out the form below with the key details about your event, including date, location, and highlights. Make it engaging to attract your audience and ensure everything is set for a successful launch.</p>
          </div>
         </div>
        <div>
          <EventForm/>
        </div> 
      
    </div>
  )
}

export default EventsPage
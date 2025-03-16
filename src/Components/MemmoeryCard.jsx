import React from 'react'

const MemmoeryCard = ({height,width  , image}) => {
  return (
    <div
    className={`border-[1px] rounded-2xl transition-all duration-500  overflow-hidden relative transform group hover:scale-95`} 
    style={{ height, width }}
    >
      <img src={image} className='h-full  w-full object-cover' alt="" />
    </div>
  )
}

export default MemmoeryCard
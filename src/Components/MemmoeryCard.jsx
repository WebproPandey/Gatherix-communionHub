import React from 'react'

const MemmoeryCard = ({image , className}) => {
  return (
    <div
    className={`border-[1px] rounded-2xl transition-all duration-500  overflow-hidden relative transform group hover:scale-95 ${className}`} 
    >
      <img src={image} className='h-full  w-full object-cover' alt="" />
    </div>
  )
}

export default MemmoeryCard
import React from 'react'

const Card = ({height , width ,background , title , disc}) => {
  return (
    <div
    className={`border-[1px] rounded-2xl transition-all duration-500 p-[1vw] overflow-hidden relative transform group hover:scale-95`} 
    style={{ height, width, background }}
  >
    {/* Shining Effect */}
    <div className="absolute w-[3%] h-full rotate-45  group-hover:top-[100%] group-hover:left-[100%] top-[-50%]  translate-x-1/2 left-[0%] inset-0 bg-white opacity-10 transition-all duration-500 hover:opacity-20 hover:scale-110 pointer-events-none"></div>
  
    {/* Card Content */}
    <div className="w-full h-[10vh]">
      <h1 className="text-white text-[2vw] font-semibold tracking-tighter leading-7">{title}</h1>
    </div>
    <div>
      <p className="text-white text-[1.2vw] font-medium">{disc}</p>
    </div>
  </div>
  
  )
}

export default Card
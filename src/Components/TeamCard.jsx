import React from 'react'

const TeamCard = ({image, name , communities}) => {
  return (
    <div className="element h-[70vh] w-[20vw] flex flex-col items-center relative group">
    <div className="image h-[60%] w-full flex items-center justify-center">
      <img 
        src={image} 
        className="h-[80%] w-[15vw] object-contain rounded-2xl absolute bottom-0 transition-all duration-500 
        group-hover:h-full group-hover:w-full group-hover:rounded-none group-hover:drop-shadow-[5px_5px_10px_#555]"  
        alt="" 
      />
    </div>
  
    {/* Name Section with Hover Reveal */}
    <div className="name w-full h-[40%] bg-white/10 backdrop-blur-lg shadow-lg shadow-black/50 rounded-b-full flex flex-col justify-center items-center relative overflow-hidden">
      <h1 className="text-[1.3vw] text-white poppins-semibold uppercase transition-opacity duration-500 group-hover:opacity-0">{name}</h1>
      <h1 className="text-[1.3vw] text-white poppins-semibold capitalize transition-opacity duration-500 group-hover:opacity-0">{communities}</h1>
      
      {/* Hover Effect: Full Details */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/60 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <p className="text-[1vw] text-center">More details about {name} in {communities} community.</p>
      </div>
    </div>
  </div>
  
  
)
}

export default TeamCard
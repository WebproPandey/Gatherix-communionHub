import React from 'react';

const MommentCard = ({ className, title, description, image }) => {
  return (
    <div 
      className={`border-[1px] perspective-1000 p-4 bg-white shadow-md rounded-2xl ${className}`} >
      <div 
        className="image w-full h-[60%] transition-all duration-500 transform rounded-2xl 
           hover:shadow-2xl hover:shadow-black/70 hover:rotate-y-10 hover:scale-105 overflow-hidden"
      >
        <img src={image} alt={title} className="w-full h-full object-cover rounded-2xl" />
      </div>

      {/* Content Section */}
      <div className="content h-[40%] w-full flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-[3vw] md:text-xl font-bold text-gray-800">{title}</h1>
        <p className="text-[2.7vw] md:text-[1.2vw] text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default MommentCard;

import React from "react";

const VideoCard = ({ borderRadius, data, className }) => {
  return (
    <div
      className={`transition-all duration-500 overflow-hidden ${className}`}
      style={{ borderRadius }} 
    >
      <img src={data} className="w-full h-full object-cover" alt="" />
    </div>
  );
};

export default VideoCard;

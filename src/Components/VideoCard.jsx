import React from "react";

const VideoCard = ({ height, width, borderRadius , data }) => {
  return (
    <div
      className="transition-all duration-500 overflow-hidden"
      style={{ height, width, borderRadius }}
    >
     <img src={data} className=" w-full h-full" alt=""/>
    </div>
  );
};

export default VideoCard;

import React from "react";

const VideoCard = ({ height, width, borderRadius }) => {
  return (
    <div
      className="bg-red-300 transition-all duration-500"
      style={{ height, width, borderRadius }}
    ></div>
  );
};

export default VideoCard;

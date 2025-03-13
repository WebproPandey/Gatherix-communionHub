import React from 'react'

const VideoCard = ({ height , width }) => {
    return (
      <div
        className={` bg-red-300 rounded-2xl transition-all duration-500`}
        style={{ height , width}}
      ></div>
    );
  };

export default VideoCard
import React from "react";
import VideoCard from "../Components/VideoCard";
import Card from "../Components/Card";

const Home = () => {
  return (
    <div className="  w-full flex flex-col justify-center pt-[8vw]">
      <div className="px-[4vw] w-full">

      <div className="heading flex flex-col  items-center ">
        <h1 className="text-[4.5vw] poppins-semibold  text-[#000]">
          Connect Communities
        </h1>
        <p className="text-[1.6vw] text-[#313131]  tracking-tighter poppins-medium]">
          Bridging gaps between faiths with tech and a dash of fun!
        </p>
      </div>
      <div className="bottom  w-full flex justify-center  items-center h-[80vh]     ">
        <div className="leftheading  h-full w-1/2 flex flex-col  justify-center">
          <div className="text-[3.4vw] poppins-semibold tracking-tighter flex items-center  gap-2 ">
            Together We Build{" "}
            <span className="h-[10vh] w-[12vw] rounded-3xl bg-red-200 inline-block"></span>
          </div>

          <div className="text-[3.4vw] poppins-semibold tracking-tighter flex items-center  gap-2 ">
            <span className="h-[10vh] w-[12vw] rounded-3xl bg-red-200 inline-block"></span>{" "}
            Together We Thrive
          </div>

          <div className="text-[3.4vw] poppins-semibold tracking-tighter flex items-center  gap-2 ">
            One Platform{" "}
            <span className="h-[10vh] w-[12vw] rounded-3xl bg-red-200 inline-block"></span>{" "}
          </div>

          <div className="text-[3.4vw] poppins-semibold tracking-tighter flex items-center  gap-2 ">
            Endless Connections.
          </div>
          <div className="pr-[10vw]">
            <p className="text-[1.3vw] text-[#000]/60 leading-5">
              "Be a part of a community where faith and innovation come
              together. Together, we create a world that is more inclusive,
              inspiring, and connected than ever before!"
            </p>
          </div>
          <div className="py-5">
            <button className="bg-gray-400 px-6 py-1 rounded-full poppins-medium group flex items-center gap-2 transition-all duration-300 hover:bg-gray-500">
              View Our Services
              <i className="ri-arrow-drop-right-line text-[1.5vw] transform transition-transform duration-300 group-hover:rotate-90"></i>
            </button>
          </div>
        </div>
        <div className="rightvideo h-full flex flex-col  items-center justify-between w-1/2 relative py-10">
          <div className="w-full h-full flex items-center justify-center ">
            <VideoCard height="100%" width="90%" />
          </div>
          <div className="w-full h-full flex items-center gap-2 justify-center ">
            <VideoCard height="90%" width="45%" />
            <VideoCard height="90%" width="45%" />
          </div>
        </div>
      </div>
      </div>

      <div className="h-screen bg-[#0000]/80 flex flex-col  justify-center items-center pt-[6vw] px-[4vw]">
        <h1 className="text-[3vw] poppins-semibold text-white ">Why Communion Rocks!</h1>
        <div className="bottomcontent w-full flex h-full ">
          <div className="left w-[30%] h-full   flex items-center ">
            <p className="text-[1.3vw] text-white poppins-medium  ">CommunionHub is more than just an event platform—it's a movement that brings people together through faith, purpose, and connection. Whether you're looking to join a spiritual gathering, volunteer for a cause, or simply meet like-minded individuals, CommunionHub makes it easy, engaging, and meaningful.</p>
          </div>
          <div className="right w-[70%] flex  justify-between  items-center gap-4 pl-[4vw] ">
             <Card />
             <Card />
             <Card />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;

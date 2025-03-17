import React from "react";
import VideoCard from "../Components/VideoCard";
import Card from "../Components/Card";
import MommentCard from "../Components/MommentCard";
import  SwiperSectione  from "../Components/SwiperSection"
import Faq from "../Components/Faq";


import  Gatherings from "../assets/community-gathering.webp"
import  Cultural from "../assets/holi.avif"
import  Faith from "../assets/faith-event.jpg"
import  Charity from "../assets/Charity.avif"
import  Networking from "../assets/Networking.jpg"
import  Workshops from "../assets/WorkshopsSharing.avif"
import  Virtual from "../assets/VirtualCelebrations.jpg"
import  Projects from "../assets/project.jpeg"
import TeamCard from "../Components/TeamCard";

import experts1 from "../assets/experct1.png";
import experts2 from "../assets/experct2.png";
import experts3 from "../assets/experct3.png";
import experts4 from "../assets/experct4.png";
import experts5 from "../assets/experct5.png";
import experts6 from "../assets/experct6.png";
import experts7 from "../assets/experct7.png";
import experts8 from "../assets/experct8.png";


import  spanimg1  from "../assets/spanimg1.jpg"
import  spanimg2  from "../assets/spanimg2.jpg"
import  video2  from "../assets/video2.png"
import  video1  from "../assets/video1.png"
import  video3  from "../assets/video3.png"
import  callender  from "../assets/callender.webp"
import  togther1 from "../assets/togther.jpg"
import  togther2 from "../assets/togther2.jpg"
import  togther3 from "../assets/togther3.jpg"
import  togther4 from "../assets/togther4.jpg"
import  togther5 from "../assets/togther5.jpg"
import  togther6 from "../assets/togther6.jpg"
import MemmoeryCard from "../Components/MemmoeryCard";





const Home = () => {

  const momentsData = [
    { image: Gatherings, title: "Community Gatherings", description: "Bringing people together to share, learn, and grow as a united community." },
    { image: Cultural, title: "Cultural Festivals", description: "Showcasing diverse traditions, music, and art to promote inclusivity." },
    { image: Faith, title: "Faith-Based Events", description: "Spiritual meetups, prayers, and discussions that strengthen belief and unity." },
    { image: Charity, title: "Charity & Volunteer Drives", description: "Giving back to society by supporting causes that matter." },
    { image: Networking, title: "Networking Meetups", description: "Creating opportunities for individuals to connect and collaborate." },
    { image: Workshops, title: "Workshops & Knowledge Sharing", description: "Learning and inspiring each other through skill-based sessions." },
    { image: Virtual, title: "Virtual Celebrations", description: "Engaging global audiences through live-streamed events and online interactions." },
    { image: Projects, title: "Social Impact Projects", description: "Working together to create meaningful change in communities." }
  ];

  const communitiesData = [
    { 
      image: experts1, 
      name: "Mahant Shivgiri Das", 
      communities: "Hindu Event Organizer", 
      disc: "Jyoti organizes cultural and religious events to bring the Hindu community together and celebrate traditions."
    },
    { 
      image: experts7, 
      name: "Ayaan Khan", 
      communities: "Muslim Community Leader", 
      disc: "Ayaan works on social welfare projects and religious awareness programs for the Muslim community."
    },
    { 
      image: experts3, 
      name: "Sophia D'Souza", 
      communities: "Christian Youth Mentor", 
      disc: "Sophia mentors young individuals, guiding them in faith-based activities and community service."
    },
    { 
      image: experts4, 
      name: "Amarjit Singh", 
      communities: "Sikh Community Speaker", 
      disc: "Amarjit educates people about Sikh values and works to promote unity and charity among different groups."
    },
    { 
      image: experts5, 
      name: "Tenzing Lama", 
      communities: "Buddhist Meditation Coach", 
      disc: "Tenzing teaches meditation and mindfulness techniques to promote inner peace and well-being."
    },
    { 
      image: experts6, 
      name: "Rebecca Cohen", 
      communities: "Jewish Cultural Guide", 
      disc: "Rebecca organizes Jewish cultural events and helps people understand traditions through storytelling."
    },
    { 
      image: experts8, 
      name: "Meera Patel", 
      communities: "Jain Spiritual Counselor", 
      disc: "Meera guides people in Jain spiritual teachings, focusing on non-violence and self-discipline."
    },
    { 
      image: experts2, 
      name: "Rohan Verma", 
      communities: "Interfaith Dialogue Expert", 
      disc: "Rohan promotes harmony by engaging different religious groups in open discussions and peace-building activities."
    },
  ];
  
  const CardData = [
    {title:"Meet People Who Inspire You" ,   disc:"From volunteering opportunities to mission-driven events, CommunionHub helps you build meaningful relationships with those who share your values and goals."},
    {title:" Serve, Support, and Grow" ,   disc:"Find volunteer opportunities, charity events, and outreach programs that allow you to give back and make a real difference in your community."},
    {title:"Join a Community of Believers" ,   disc:"Connect with like-minded individuals through spiritual events, prayer circles, and worship gatherings. Whether online or in-person, deepen your faith with a supportive community."},
  ]

  const  imageData = [
    {image:togther1},
    {image:togther2},
    {image:togther3},
    {image:togther4},
    {image:togther5},
    {image:togther6},
  ]






  return (
    <div className="  w-full flex flex-col justify-center pt-[15vw] md:pt-[8vw]">

      <div className="px-[4vw] w-full ">

      <div className="heading flex flex-col  items-center  py-[3vw]">
        <h1 className="text-[6vw] md:text-[4.5vw] poppins-semibold  text-[#000]">
          Connect Communities
        </h1>
        <p className=" text-[3vw] md:text-[1.6vw] text-[#313131]  tracking-tighter poppins-medium]">
          Bridging gaps between faiths with tech and a dash of fun!
        </p>
      </div>
      <div className="bottom  w-full flex justify-center flex-col md:flex-row  items-center  md:h-[80vh]     ">
        <div className="leftheading  h-full w-full md:w-1/2 flex flex-col  gap-3 justify-center">
          <div className="text-[5vw] md:text-[3.4vw] poppins-semibold tracking-tighter flex items-center  gap-2 ">
            Together We Build{" "}
            <span className=" h-[8vw] md:h-[10vh] w-[20vw] md:w-[12vw] rounded-3xl bg-red-200 inline-block overflow-hidden">
              <img src={spanimg1} className="w-full  h-full  object-cover" alt="" />
            </span>
          </div>

          <div className="text-[5vw] md:text-[3.4vw] poppins-semibold tracking-tighter flex items-center  gap-2 ">
            <span className=" h-[8vw] md:h-[10vh] w-[20vw] md:w-[12vw]  rounded-3xl bg-red-200 inline-block overflow-hidden">
            <img src={spanimg2} className="w-full h-full  object-cover" alt="" />
            </span>
            Together We Thrive
          </div>

          <div className="text-[5vw] md:text-[3.4vw] poppins-semibold tracking-tighter flex items-center  gap-2 ">
            One Platform{" "}
            <span className=" h-[8vw] md:h-[10vh] w-[20vw] md:w-[12vw]  rounded-3xl bg-red-200 inline-block overflow-hidden">
            <img src={video2} className="w-full h-full   object-cover" alt="" />
            </span>
          </div>

          <div className="text-[5vw] md:text-[3.4vw] poppins-semibold tracking-tighter flex items-center  gap-2 ">
            Endless Connections.
          </div>
          <div className="pr-[10vw]">
            <p className="  text-[3vw] md:text-[1.3vw] text-[#000]/60 leading-5">
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
        <div className="rightvideo min-h-full flex flex-col gap-2  items-center justify-between w-full md:w-1/2 relative py-10">
        <div className="w-full  h-[35vh]  flex justify-center  items-center ">
            <VideoCard  className="h-[100%] w-[90%] " borderRadius="20px"  data={callender} />
          </div>
        <div className="w-full h-[35vh] flex items-center gap-4  justify-center   ">
            <VideoCard className="h-[100%] w-[45%] " borderRadius="20px"  data={video1} />
            <VideoCard className="h-[100%] w-[45%] " borderRadius="20px"   data={video3} />
        </div>
       
         
        </div>
      </div>
      </div>

      <div className="h-screen bg-gradient-to-b to-gray-500 from-black flex flex-col  justify-center items-center pt-[5vw] px-[4vw]">
        <h1 className=" text-[6vw] md:text-[3vw] poppins-semibold text-white ">Why Communion Rocks!</h1>
        <div className="bottomcontent w-full flex md:flex-row flex-col h-full  ">
          <div className="left w-full md:w-[30%] h-[40%] md:h-full   flex items-center ">
            <p className="text-[3vw] md:text-[1.3vw] text-white poppins-medium  ">CommunionHub is more than just an event platform—it's a movement that brings people together through faith, purpose, and connection. Whether you're looking to join a spiritual gathering, volunteer for a cause, or simply meet like-minded individuals, CommunionHub makes it easy, engaging, and meaningful.</p>
          </div>
          <div className="right w-full md:w-[70%] grid grid-cols-3  h-full justify-between  items-center gap-4 pl-0 md:pl-[4vw] ">
             <Card className="h-[60%]" {...CardData[0]}   />
             <Card className="h-[60%]" {...CardData[1]}  />
             <Card className="h-[60%]" {...CardData[2]} />
          </div>
        </div>

      </div>

      <div className=" w-full  px-[4vw] py-10">
        <h1 className=" text-[5vw] md:text-[3vw] poppins-semibold text-black " >Bringing People Together <br /> Through Meaningful Experiences</h1>
        <div className="flex  w-full py-[5vw] flex-col md:flex-row  gap-4 justify-between">
          <div className="w-full md:w-[60%] ">
          <p className="text-[3vw] md:text-[1.5vw] text-black poppins-medium  ">Uniting Communities Through Inspiring Events isn’t just a phrase—it’s a mission. Events have the power to connect hearts, spark new ideas, and create lasting bonds. Whether it’s a spiritual gathering, a social initiative, or a charity drive, every event brings people closer, making the world a more inclusive and connected place.</p>
          </div>
          <div className="w-[50%] md:w-[30%] flex flex-col items-start  gap-5">
            <p  className="text-[3vw] md:text-[1.4vw] text-black poppins-medium  ">Bringing people from diverse backgrounds together to celebrate, learn, and grow as a community.</p>
            <button className="bg-gray-400 text-[2vw] md:text-[1.2vw] px-6 py-1 rounded-full poppins-medium group flex items-center gap-2 transition-all duration-300 hover:bg-gray-500">
              Shared Experiences
              <i className="ri-arrow-drop-right-line text-[3vw] md:text-[1.5vw] transform transition-transform duration-300 group-hover:rotate-90"></i>
            </button>
          </div>
        </div>

        <div className="ExperiencesWraper flex items-center gap-3 w-full flex-col md:flex-row min-h-screen px-4 md:px-0">
         <MemmoeryCard  className="w-full md:w-[25%] h-[60vh] md:h-[80%]"   {...imageData[0]} />

         <div className="w-full md:w-[25%] flex flex-col gap-3">
           <MemmoeryCard className="w-full h-[30vh] md:h-[40%]"  {...imageData[1]} />
           <MemmoeryCard className="w-full h-[40vh] md:h-[60%]"  {...imageData[2]} />
         </div>

         <div className="w-full md:w-[25%] flex flex-col gap-3">
          <MemmoeryCard  className="w-full h-[40vh] md:h-[60%]"   {...imageData[3]} />
          <MemmoeryCard className="w-full h-[30vh] md:h-[40%]"  {...imageData[4]} />
         </div>

        <MemmoeryCard className="w-full md:w-[25%] h-[60vh] md:h-[80%]"   {...imageData[5]} />
      </div>

      </div>


      <div className="w-full px-[4vw] py-10 flex flex-col items-center justify-start bg-gradient-to-b to-gray-500 from-black">
      <h1 className="text-[5vw] md:text-[3vw] poppins-semibold text-white " >Global Impact, Endless Connections</h1>
      <div className="w-full md:w-[70%] mt-4">
       <p className="text-[3vw] md:text-[1.5vw] text-white poppins-medium  text-center ">Every day, thousands of people come together to connect, share, and grow through inspiring events. Whether it’s a spiritual gathering, a community meetup, or a social cause, our platform bridges the gap between people and purpose—making every interaction meaningful.</p>
      </div>
      <div className="h-screen w-full flex flex-col md:flex-row  items-center justify-center  mt-[5vw]">
        <div className="w-full md:w-[60%] h-full  flex gap-3 justify-center items-center  ">
        <VideoCard className="h-[80%] w-[40%] md:rounded-[150px] rounded-2xl "    data={video1}  /> 
        <VideoCard className="h-[80%] w-[40%] md:rounded-[150px] rounded-2xl "    data={video3} /> 
        </div>
        <div className="w-full md:w-[40%] h-full text-white flex flex-col items-center justify-start  md:justify-center  gap-4 py-[3vw] ">
          <div className="w-full h-[30%] ">
          <h1 className="text-[3vw] md:text-[1.5vw] poppins-bold   ">A Thriving Global Community</h1>
          <p className="text-[2.4vw] md:text-[1.3vw] poppins-medium ">Bringing people together from different cultures, backgrounds, and beliefs to foster unity and understanding.
          Our platform serves as a bridge, connecting individuals through meaningful interactions and shared experiences.</p>
          </div>
          <div className="w-full h-[30%] ">
          <h1 className="text-[3vw] md:text-[1.5vw] poppins-bold   ">Seamless Event Discovery</h1>
          <p className="text-[2.4vw] md:text-[1.3vw] poppins-medium ">Easily explore a wide range of events tailored to your interests, from faith-based gatherings to community meetups.
          With just a few clicks, you can find, join, and participate in events that matter to you, anytime and anywhere.</p>
          </div>

          <div className="w-full h-[30%] ">
          <h1 className="text-[3vw] md:text-[1.5vw] poppins-bold   "> Interactive & Engaging Experiences</h1>
          <p className="text-[2.4vw] md:text-[1.3vw]  poppins-medium ">Stay connected with live discussions, networking opportunities, and real-time updates on the latest events.
          Our interactive features ensure that every participant feels engaged, valued, and part of something bigger.</p>
          </div>
          <div className="w-full h-[30%] ">
          <h1 className="text-[3vw] md:text-[1.5vw] poppins-bold   "> Purpose-Driven Connections</h1>
          <p className="text-[2.4vw] md:text-[1.3vw]  poppins-medium ">More than just events, we create opportunities that bring positive change to individuals and communities.
          Every gathering is designed to inspire, uplift, and make a lasting impact on those who participate.
          Let me know if you need any further refinements.</p>
          </div>



        </div>
        
      </div>

      </div>

      <div className=" w-full px-[4vw] py-12 flex flex-col items-center justify-start  ">
      <h1 className="text-[5vw] md:text-[3vw] poppins-semibold text-center text-black " >Celebrating the Connections We’ve Built</h1>
      <div className="w-full md:w-[70%] my-4">
       <p className="text-[3vw] md:text-[1.5vw] text-black poppins-medium  text-center ">Discover the meaningful relationships and collaborations we’ve nurtured, uniting people from all walks of life through shared experiences.</p>
      </div>
      <button className="bg-gray-400 text-[3vw] md:text-[1.2vw] px-6 py-1 rounded-full poppins-medium group flex items-center gap-2 transition-all duration-300 hover:bg-gray-500">
              View All Momment
              <i className="ri-arrow-drop-right-line text-[3vw] md:text-[1.5vw] transform transition-transform duration-300 group-hover:rotate-90"></i>
      </button>
       <div className="min-h-screen flex flex-col gap-4 md:flex-row justify-between  mt-[4vw]  ">
        <div className="min-h-screen  w-full md:w-[30%] flex  flex-col  gap-12 ">
        <MommentCard className="h-[50vh]  md:h-[60vh] w-full"  {...momentsData[0]} />
        <MommentCard className="h-[50vh] md:h-[80vh] w-full" {...momentsData[1]}/>
        </div>
        <div className="min-h-screen w-full md:w-[30%] flex  flex-col  gap-12 ">
        <MommentCard className="md:h-[80vh] h-[50vh] w-full" {...momentsData[2]}/>
        <MommentCard className="md:h-[60vh] h-[50vh] w-full" {...momentsData[3]}/>
        </div>
        <div className="min-h-screen w-full md:w-[30%] flex  flex-col  gap-12 ">
        <MommentCard className="md:h-[60vh]  h-[50vh] w-full" {...momentsData[4]}/>
        <MommentCard className="md:h-[80vh] h-[50vh] w-full" {...momentsData[5]}/>
        </div>

        </div>   

      </div>

      <div className="w-full px-[4vw] py-12 flex flex-col items-center justify-start bg-gradient-to-b to-gray-500 from-black">
      <h1 className="text-[5vw] md:text-[3vw] poppins-semibold text-white " >Meet Our Dedicated Team</h1>
      <div className="w-full md:w-[70%] my-4">
       <p className="text-[3vw] md:text-[1.5vw] text-white poppins-medium  text-center ">Bringing together innovation, faith, and community, our expert  team is committed to building a platform where connections thrive. With a shared passion for technology and inclusivity, we work to create meaningful experiences that inspire and unite people from all walks of life.</p>
      </div>
       <div className="min-h-screen  w-full mt-[4vw] grid  grid-cols-2 md:grid-cols-4 gap-3  ">
        <TeamCard  {...communitiesData[0]}  />
        <TeamCard  {...communitiesData[1]}  />
        <TeamCard  {...communitiesData[2]}  />
        <TeamCard  {...communitiesData[3]}  />
        <TeamCard  {...communitiesData[4]}  />
        <TeamCard  {...communitiesData[5]}  />
        <TeamCard  {...communitiesData[6]}  />
        <TeamCard  {...communitiesData[7]}  />
       </div>
      </div>
     
      <div className=" w-full  px-[4vw] py-[4vw] flex flex-col items-center justify-start ">
        <h1 className="text-[5vw] md:text-[3vw] poppins-semibold text-black " >Growing Strong with 1500+ Users</h1>
        <div className="w-full md:w-[70%] my-4">
          <p className="etxt-[3vw] md:text-[1.5vw] text-black te poppins-medium  text-center ">Be part of a trusted platform where thousands of users come together to inspire, innovate, and connect.</p>
        </div>   
        <div className=" w-full mt-[5vw]">
          <SwiperSectione/>
        </div>     

      </div>

      <div className=" w-full px-[4vw] py-[4vw] flex  flex-col  items-center  justify-start  bg-gradient-to-b to-gray-500 from-black ">
      <h1 className="text-[5vw] md:text-[3vw] poppins-semibold text-white " > Need Help? We've Got You Covered</h1>
      <div className="w-full md:w-[70%] my-4">
          <p className="text-[3vw] md:text-[1.5vw] text-white te poppins-medium  text-center ">Explore answers to frequently asked questions.</p>
      </div>

      <div className="w-full">
       <Faq/>
      </div>  

      </div>

      



    </div>
  );
};

export default Home;

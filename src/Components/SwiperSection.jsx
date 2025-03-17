import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Keyboard, Navigation ,  Pagination } from 'swiper/modules';
import experts2 from "../assets/experct2.png";
import experts5 from "../assets/experct5.png";
import experts7 from "../assets/experct7.png";
import experts3 from "../assets/experct3.png";


export default function App() {
    const ClientFeedBackData = [
        {
          id: 1,
          stars: 5,
          feedback:
            "Communion has truly transformed how I engage with my community. It fosters unity, inclusivity, and meaningful interactions, bringing people from diverse backgrounds together.",
          userName: "enzing Lama",
          userImage: experts5,
        },
        {
          id: 2,
          stars: 5,
          feedback:
            "Being part of Communion has been a life-changing experience. The platform seamlessly blends innovation and spirituality, creating a welcoming space where deep discussions and shared experiences thrive.",
          userName: "Ayaan Khan",
          userImage: experts7,
        },
        {
          id: 3,
          stars: 5,
          feedback:
            "Through Communion, I’ve had the opportunity to participate in enriching events and discussions that broaden my perspective. It has connected me with a global network of like-minded individuals.",
          userName: "Rohan Verma",
          userImage:experts2,
        },
        {
          id: 4,
          stars: 5,
          feedback:
            "Communion has made it easier to find meaningful connections and opportunities within my community. Whether through discussions, collaborations, or support networks, it truly brings people together.",
          userName: "Sophia D'Souza",
          userImage:experts3 ,
        },
      ];
      
      

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Autoplay , Navigation, Pagination]}
        className="mySwiper"
      >
        {ClientFeedBackData.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="ClientsFeed flex flex-col justify-center items-center gap-6 flex-shrink-0  bg-gray-200 px-[2vw] py-[3vw] rounded-2xl">
             
              <div className="description">
                <p className="text-[3vw] md:text-[1.2vw] font-medium text-center text-[#000]">
                  {client.feedback}
                </p>
              </div>
              <div className="user flex flex-col justify-center items-center gap-2">
                <div className="userimg h-[10vh] w-[5vh] ">
                  <img src={client.userImage } alt={client.userName}  className='h-full  w-full  object-cover' />
                </div>
                <div className="Username">
                  <h4 className="text-[2.5vw] md:text-[0.7vw] text-[#000] capitalize">
                    {client.userName}
                  </h4>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

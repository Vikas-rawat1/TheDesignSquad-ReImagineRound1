import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import ReactPlayer from "react-player";

function Coverslider() {
  const videoData = [
    { video: "videos/feature1.mp4" },
    { video: "videos/feature2.mp4" },
    { video: "videos/feature3.mp4" },
    { video: "videos/feature4.mp4" },
    { video: "videos/feature5.mp4" },
    { video: "videos/feature6.mp4" },
  ];
  return (
    <>
      <div className="ml-0 sm:ml-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          loop={true}
          // centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            //When window width is >=320px
            320: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {videoData.map((data,index) => (
            <SwiperSlide key={index}>
              <ReactPlayer
                url={data.video}
                loop
                muted
                playing
                width="30vw"
                height="100%"
                className="hidden md:flex absolute inset-0 w-full h-full object-cover"
              />
              <div className="md:hidden ">
                <video
                  src={data.video}
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover"
                ></video>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Coverslider;

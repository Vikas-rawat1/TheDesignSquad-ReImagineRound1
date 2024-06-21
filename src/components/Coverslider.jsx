import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles.css"; 
import { EffectCoverflow, Pagination } from "swiper/modules";
function Coverslider() {
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
            slideShadows: true,
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
              spaceBetween: 20,
            },
            768:{
              slidesPerView:2,
            },
            1024:{
              slidesPerView:4,
            }
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
            <video
              src="videos/feature1.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
            <video
              src="videos/video.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
            <video
              src="videos/hero.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
            <video
              src="videos/video.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
            <video
              src="videos/hero.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          </SwiperSlide>
          <SwiperSlide>
            {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
            <video
              src="videos/video.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            ></video>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Coverslider;

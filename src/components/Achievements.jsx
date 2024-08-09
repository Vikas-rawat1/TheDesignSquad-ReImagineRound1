import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles.css"; 
import { EffectCoverflow, Pagination } from "swiper/modules";
import Marquee from "react-fast-marquee";
import { RiArrowRightLine } from "react-icons/ri";

import Footer from "./Footer";

function Achievements() {
  const data = [
    {
      image: "images/KaraSwisher.webp",
      title: "Lifetime Achievement Celebration",
      content: "Texh & Media Giants Celebrate Kara Swisher",
    },
    {
      image: "images/Amber.webp",
      title: "28th Annual Webby Awards",
      content: "Amber Ruffin Returned to Host The Webby Awards",
    },
    {
      image: "images/Webbys.webp",
      content: "Meet the 2024 Special Achievement Winners",
    },
    {
      image: "images/Webbys-PV.webp",
      title: "Year in Review",
      content: "A Look into the Most Brilliant Work of 2024",
    },
    {
      image: "images/Webby28-Nick.webp",
      title: "Year in Review",
      content: "Nick Borenstein Named General Manager, Webby Awards",
    },
  ];

  return (
    <>
      <div className="text-white md:mt-20  lg:mt-10 text-4xl flex items-center ">
        <Marquee
          behavior="scroll"
          direction="left"
          pauseOnHover
          className="text-4xl overflow-hidden mt-10 md:mt-0 md:mb-10 lg:mb-0 lg:mt-10 "
        >
          <h1 className="flex gap-1">
            INNNOVATION REWARDED HERE
            <RiArrowRightLine fill="white" size={36} />
            INNNOVATION REWARDED HERE
            <RiArrowRightLine fill="white" size={36} />
          </h1>
          <h1 className="flex gap-1">
            INNNOVATION REWARDED HERE
            <RiArrowRightLine fill="white" size={36} />
            INNNOVATION REWARDED HERE
            <RiArrowRightLine fill="white" size={36} />
          </h1>
        </Marquee>
      </div>

      <div className="flex justify-center items-center mt-20 mb-10 text-white">
        <h1 className="text-center w-3/5 text-5xl lg:text-8xl">CAPTURING THE MOMENTS</h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={false}
        breakpoints={{
          //When window width is >=320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPsfsdfsdfserView: 4,
          },
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
      >
        {data.map((item,index) => (
          <SwiperSlide key={index}>
            <img
              src={item.image}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="text-white absolute bottom-2">
              <h3 className="text-center font-bold md:text-sm uppercase">
                <span>{item.title}</span>
              </h3>
              <h1 className=" text-sm md:text-4xl md:w-5/5 lg:text-2xl">
                {item.content}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Footer />
    </>
  );
}

export default Achievements;

import React from "react";
// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../styles.css"; // Ensure styles.css is created and linked
import { EffectCoverflow, Pagination } from "swiper/modules";
import Marquee from "react-fast-marquee";
import { RiArrowRightLine } from "react-icons/ri";

import Footer from "./Footer";

function Achievements() {
  return (
    <>
      {/* <div className="text-white"> */}
      <div className="text-white mt-20 text-4xl flex items-center ">
        <Marquee className="overflow-hidden">
          <h1>INNNOVATION REWARDED HERE </h1>
          <RiArrowRightLine className="text-white" size={36} />
        </Marquee>
        <Marquee className="overflow-hidden">
          <h1>INNNOVATION REWARDED HERE </h1>
          <RiArrowRightLine className="text-white" size={36} />
        </Marquee>

        {/* Add new section for innovation or crativity */}
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        // loop={true}
        // centeredSlides={true}
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
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper "
      >
        <SwiperSlide>
          <img
            src="https://spaincollection.com/wp-content/uploads/2020/10/01-466.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://spaincollection.com/wp-content/uploads/2020/10/01-466.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://spaincollection.com/wp-content/uploads/2020/10/01-182.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://spaincollection.com/wp-content/uploads/2020/10/01-91.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="text-white absolute bottom-2 upp">
            <h3 className="text-sm uppercase">
              <span>Food & wine</span> in barcelona
            </h3>
            <h1 className=" text-3xl w-3/5">Michelin Stars Galore</h1>
            <h3 className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius hic
              dolor, eveniet exercitationem impedit sequi voluptatibus
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://spaincollection.com/wp-content/uploads/2020/10/01-96.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default Achievements;

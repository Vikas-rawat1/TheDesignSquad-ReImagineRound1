import React, { useEffect, useRef } from "react";
import Marquee from "react-fast-marquee";
import {
  RiArrowRightLine,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "react-icons/ri";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "../styles.css";

// import required modules
import { EffectCards } from "swiper/modules";

function Footer() {
  return (
    <>
      {/* <div className="flex justify-center items-center h-screen text-white">
  <h1 className="text-center w-3/5 text-8xl">
    CAPTURING THE MOMENTS
  </h1>
</div> */}

      <div className="text-white">
        <Marquee
          behavior="scroll"
          direction="right"
          pauseOnHover
          className="text-4xl overflow-hidden mt-20"
        >
          <h1>
            CULTURE - FOOD&WINE - SHOPPING - FASHION - SPORTS - TRADITIONS -
          </h1>
        </Marquee>
        <Marquee
          behavior="scroll"
          direction="left"
          pauseOnHover
          className="text-4xl overflow-hidden mt-10"
        >
          <h1>
            CULTURE - FOOD&WINE - SHOPPING - FASHION - SPORTS - TRADITIONS -
          </h1>
        </Marquee>
      </div>
      <div className="text-white mt-20 ml-10">
        <h1 className="text-5xl md:text-9xl relative">
          The Stories Behind the Site
        </h1>
        <h2 className="text-2xl mt-5 ml-4">2024 Featuring Moments...</h2>
        <div className="grid md:grid-cols-2">
          <div>
            <h1 className="ml-10 md:mt-20 text-7xl">01</h1>
            <h3 className="md:mt-10 ml-10 w-3/5">
              Presented by The Webby Awards and WP Engine since 2019, Crafted
              with Code shares the stories behind the best of the Web through
              interviews with developers, designers, and creators around the
              world on the creativity, mastery and technical innovation it takes
              to make great work.
            </h3>
          </div>
          <div>
            <h1 className="ml-10 text-7xl md:mt-60">02</h1>
            <h3 className="md:mt-10 ml-10 w-3/5">
              The Webby Awards celebrate innovation, creativity, and the
              transformative power of digital content. With categories spanning
              from Websites and Mobile Sites to Video and Social, we spotlight
              the individuals and teams who are shaping the digital landscape.
              Join us in honoring those who dare to challenge and innovate.
            </h3>
          </div>
          <div>
            <h1 className="ml-10 text-7xl">03</h1>
            <h3 className="ml-10 md:mt-10 w-3/5">
              Recognized globally as a symbol of digital achievement, we honor
              excellence across diverse digital categories. Our awards celebrate
              the transformative power of digital media and inspire future
              generations of creators to innovate and push the limits of what's
              possible online.
            </h3>
          </div>
          <div>
            <h1 className="ml-10 text-7xl md:mt-40">04</h1>
            <h3 className="md:mt-10 ml-10 w-3/5">
              As we continue to evolve, our mission remains steadfastly focused
              on inspiring and celebrating creativity in digital storytelling.
              Join us in exploring the compelling stories behind the sites that
              define the ever-changing digital landscape and inspire the next
              wave of groundbreaking digital innovation.
            </h3>
          </div>
        </div>
      </div>
      <div className="w-fulll h-px mt-20 bg-white"></div>
      <div className="text-white ml-10 mt-20 md:mt-40 w-3/5  ">
        <h1 className="md:text-9xl">Have a project in mind?</h1>
        <h1 className="text-sm md:text-xl">Reach out via e-mail </h1>
        <div className="flex items-center gap-4 ml-10 m-auto mt-6">
          <RiMailLine fill="white" size={30} />
          <h1 className="text-xl ">webbyawards@gmail.com </h1>
        </div>
      </div>

      <div className="text-white  mt-2 mr-10 md:mr-20 flex justify-end">
        <div className="3/5 ml-20 mb-20">
          <h1 className="w-4/5 mt-20 md:mt-0">
            CONTACT WITH WEBBY AWARDS COLLECTION
          </h1>
          <div className="mt-10 flex">
            <input
              type="text"
              placeholder="Email Address"
              className="bg-transparent border-b-2 outline-none"
            />
            <RiArrowRightLine size={42} />
          </div>
        </div>
      </div>

      <div className="text-white flex m-auto justify-center">
        <div>
          <ul className="grid grid-cols-2 md:flex md:justify-center m-auto md:flex-row gap-10 ">
            <li>FAQ</li>
            <li>BRAND STUDIO</li>
            <li>CONTACT US</li>
            <li>PRIVACY</li>
            <li>JOIN THE TEAM</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 ml-14 md:flex flex-wrap md:justify-center gap-10 mt-20  md:mt-10">
        <RiInstagramLine fill="white" size={42} />
        <RiFacebookFill fill="white" size={42} />
        <RiTwitterLine fill="white" size={42} />
        <RiYoutubeLine fill="white" size={42} />
        <RiLinkedinLine fill="white" size={42} />
      </div>

      <div className="text-white  text-center mt-20 pb-1">
        <h1 className="md:text-9xl">WEBBY AWARDS</h1>
        <h1 className="mb-6 mt-1 m-auto text-sm ">
          Honoring The Best Of The Internet Since ©1997
        </h1>
      </div>

      {/* <div className="text-white">
        <Marquee
          behavior="scroll"
          direction="right"
          pauseOnHover
          className="text-4xl overflow-hidden mt-20"
        >
          <h1>
            CULTURE - FOOD&WINE - SHOPPING - FASHION - SPORTS - TRADITIONS -
          </h1>
        </Marquee>
        <Marquee
          behavior="scroll"
          direction="left"
          pauseOnHover
          className="text-4xl overflow-hidden mt-10"
        >
          <h1>
            CULTURE - FOOD&WINE - SHOPPING - FASHION - SPORTS - TRADITIONS -
          </h1>
        </Marquee>
      </div> */}
      {/* <Achievements/> */}
      {/* <div className="mt-10">df</div> */}
    </>
  );
}

export default Footer;

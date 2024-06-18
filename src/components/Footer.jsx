import React from "react";
import Marquee from "react-fast-marquee";
import { RiArrowDownCircleFill, RiArrowRightLine } from "react-icons/ri";
function Footer() {
  return (
    <>
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

      <div className="text-white mt-40 mr-20 flex justify-between">
        <div className="3/5 ml-20 mb-20">
          <h1 className="w-4/5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            rem, tenetur nisi nesciunt quaerat quae quam doloremque ipsam
            expedita ipsa. Architecto nobis aliquid tempora nostrum illum rem,
            error sunt sint optio mollitia molestias explicabo laboriosam
            aliquam voluptates amet repudiandae. Dolore odit animi vitae iusto
            a.
          </h1>
          <div className="mt-10">
            <input
              type="text"
              className="bg-transparent border-b-2 outline-none"
            />
          </div>
        </div>
        <div className="w-full flex gap-10 right-0 justify-end">
          <div>
            <ul>
              <li>ABOUT US</li>
              <li>ABOUT US</li>
              <li>ABOUT US</li>
              <li>ABOUT US</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>ABOUT US</li>
              <li>ABOUT US</li>
              <li>ABOUT US</li>
              <li>ABOUT US</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

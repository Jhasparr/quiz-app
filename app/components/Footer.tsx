import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0F0F11] md:py-20 py-8 px-2 w-full relative  ">
      <div className="flex flex-col md:flex-row md:justify-between xl:px-35 px-4 md:px-8 gap-12  text-white md:mb-20 mb-10">
        <div className="flex flex-col gap-2 ">
          <h1 className="md:text-3xl text-2xl font-bold mt-2 text-gradient ">
            SabiBook
          </h1>
          <p className="md:w-70 w-full md:text-base text-[#CCCCCC]  ">
            The ultimate quiz platform for students and teachers. Learn,
            compete, and earn rewards
          </p>
          <div className="flex flex-row md:gap-10 gap-7 items-center mt-2 md:w-70 w-full">
            <img src="/Twitter.svg" alt="" />
            <img src="/Instagram.svg" alt="" />
            <img src="/LinkedIn.svg" alt="" className="mb-1" />
            <img src="/Youtube.svg" alt="" />
          </div>
        </div>
        <div className="flex flex-col  gap-2 text-[#CCCCCC]">
          <h1 className="font-bold text-xl">Quick Links</h1>
          <div className="xl:mt-6 mt-3 ">
            <ul className="md:space-y-6 space-y-3 md:text-base text-sm">
              <li>Home</li>
              <li>About Us</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col  gap-2 text-[#CCCCCC]">
          <h1 className="font-bold text-xl">For Teachers</h1>
          <div className="xl:mt-6 mt-3">
            <ul className="md:space-y-6 space-y-3 md:text-base text-sm">
              <li>About</li>
              <li>Contact Us</li>
              <li>Careers</li>
              <li>Culture</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 xl:gap-6">
          <h1 className="font-bold text-xl text-[#CCCCCC]">For Teachers</h1>

          <div className="flex flex-row gap-2 md:text-base text-sm">
            <img src="/Email.svg" alt="" />
            <p>jasperezepue@gmail.com</p>
          </div>
          <div className="flex flex-row gap-2 md:text-base text-sm">
            <img src="/Phone.svg" alt="" />
            <p>(+234) 810-947-003</p>
          </div>
        </div>
      </div>

      <div>
        <hr className="w-full h-0.5 bg-gray-800 px-4 mt-4" />

        <div className="flex md:flex-row flex-col md:justify-between text-[#CCCCCC] xl:px-35 px-2 md:px-8 md:mt-10 mt-5 text-sm md:text-base">
          <h3 className="mb-1.5">Copyright © 2025 SabiBook</h3>
          <h3 className="text-xs md:text-base">
            All Rights Reserved |{" "}
            <span className="text-[#7C3AED]">Terms and Conditions</span> |{" "}
            <span className="text-[#7C3AED]">Privacy Policy</span>
          </h3>
        </div>
      </div>
    </footer>
  );
}

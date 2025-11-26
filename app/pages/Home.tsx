import React from "react";
import HeroImages from "../components/HeroImages";

import InfoTab from "../components/InfoTab";

export default function Home() {
  return (
    <section className="bg-black w-full px-4 relative overflow-hidden">
      <div className="glow-left" />
      <div className="glow-right" />

      <img
        src="/bg-lines.svg"
        alt=""
        className="absolute z-0 transform scale-300 md:scale-100 w-full"
      />
      <div className="text-white z-10 md:mt-30 mt-10 relative flex flex-col items-start md:items-center justify-center  ">
        <InfoTab src="/stars.svg" text="The Ultimate Quiz Experience"/>
        <div className="relative flex flex-col items-center justify-center mt-5">
          <h1 className="text-5xl font-bold">
            Learn, Quiz,<span className="text-gradient"> Compete </span>{" "}
          </h1>
          <p className="mt-5 max-w-md md:font-medium mx-auto md:text-center text-[#CCCCCC]">
            Join thousands of students and teachers on the ultimate quiz
            platform. Test your knowledge, compete with peers, and win exciting
            rewards
          </p>
        </div>
        <div className="relative gap-4 flex flex-col  md:w-auto w-full md:flex-row md:mt-5 mt-4 items-center justify-center">
          <button className="bg-gradient font-semibold text-white  md:w-auto w-full py-2 px-5 rounded-lg">
            Get Started
          </button>
          <button className="bg-white font-semibold text-black  md:w-auto w-full  py-2 px-5 rounded-lg">
            Explore Quizzes
          </button>
        </div>
      </div>
      <div className="relative gap-2 flex flex-row mt-6  items-center justify-start md:justify-center text-white md:mb-30 xl:mb-50 mb-15 text-sm md:text-base font-medium ">
        <HeroImages />

        <h3>
          <span className="text-[#7C3AED]">5000+</span> students joined this
          week
        </h3>
      </div>
      <img
        src="/bg-lines-down.svg"
        alt=""
        className="w-full absolute bottom-0 left-0 z-0 pointer-events-none"
      />

     
    </section>
  );
}

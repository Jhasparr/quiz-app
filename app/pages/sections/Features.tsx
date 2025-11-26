import FeaturesRender from "@/app/components/FeaturesRender";
import InfoTab from "@/app/components/InfoTab";
import React from "react";

export default function Features() {
  return (
    <section className="bg-[#000000] w-full px-4 relative overflow-hidden ">
      <div className="text-[#CCCCCC] z-10 md:mt-17 mt-12 relative flex flex-col items-start md:items-center justify-center md:mb-15 mb-10  ">
        <InfoTab src={"star.svg"} text="Features" />
          <div className="relative flex flex-col items-center justify-center mt-5">
          <h1 className="text-5xl font-bold">
           Why <span className="text-gradient"> SabiBook </span>{" "}
          </h1>
          <p className="mt-3 max-w-md md:font-medium mx-auto text-center">
            Discover quizzes across various subjects to test and expand your
            knowledge
          </p>
        </div>{" "}
        <FeaturesRender />
      </div>
    </section>
  );
}

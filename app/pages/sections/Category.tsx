import InfoTab from "@/app/components/InfoTab";
import QuizRender from "@/app/components/QuizRender";
import React from "react";

export default function Category() {
  return (
    <section className="bg-[#0F0F11] w-full px-4 relative overflow-hidden ">
      <div className="text-[#CCCCCC] z-10 md:mt-15 mt-10 relative flex flex-col items-start md:items-center justify-center md:mb-15 mb-10 ">
        <InfoTab src="book-open.svg" text="Categories" />
        <div className="relative flex flex-col items-center justify-center mt-5">
          <h1 className="text-5xl font-bold">
            Explore Quiz <span className="text-gradient"> Categories </span>{" "}
          </h1>
          <p className="mt-3 max-w-md md:font-medium mx-auto text-center">
            Discover quizzes across various subjects to test and expand your
            knowledge
          </p>
        </div>{" "}
        <QuizRender />
      </div>
    </section>
  );
}

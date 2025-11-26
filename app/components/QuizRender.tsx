import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
const quizItems = [
  {
    header: "Science & Tech",
    subtext: "science & tech",
    link: "/",
    image: "/science.svg",
    color: "#3B82F6",
  },
  {
    header: "Mathematics",
    subtext: "mathematics",
    link: "/",
    image: "/math.svg",
    color: "#22C55E",
  },
  {
    header: "Chemistry",
    subtext: "chemistry",
    link: "/",
    image: "/chemistry.svg",
    color: "#A855F7",
  },
  {
    header: "Biology",
    subtext: "biology",
    link: "/",
    image: "/biology.svg",
    color: "#EC4899",
  },
  {
    header: "General Knowledge",
    subtext: "general knowledge",
    link: "/",
    image: "/general.svg",
    color: "#F59E0B",
  },
  {
    header: "Current Affairs",
    subtext: "current affairs",
    link: "/",
    image: "/current.svg",
    color: "#EF4444",
  },
];
export default function QuizRender() {
  return (
    <div className="  lg:w-auto w-full overflow-x-auto no-scrollbar  mt-7 ">
      <div className="inline-flex gap-4  md:flex md:flex-wrap items-center justify-center lg:gap-6 ">
      {quizItems.map((items, index) => (
        <div
          className="xl:w-100 md:w-85 w-75   h-40 hrink-0 flex flex-col gap-2 bg-[#241F20] rounded-md"
          key={index}
        >
          <div className="w-full h-1  rounded-t-md" style={{backgroundColor: items.color}} />
          <div className="flex flex-row lg:px-6 px-2 mt-2 lg:mt-4 gap-4">
            <div>
              <div className="rounded-full mt-2 w-12 h-12 justify-center flex items-center" style={{backgroundColor: items.color}}>
                <img src={items.image} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-xl font-bold">{items.header}</h3>
              <p className="text-[#CCCCCC] text-sm">{`Test your knowledge in ${items.subtext} with our challenging quizzes`}</p>

              <Link href={items.link}>
                <div className="flex flex-row gap-2 items-center ">
                  {" "}
                  <h3 className="text-sm font-medium mt-2" style={{color: items.color}}>
                    Explore Quizzes{" "}
                  </h3>{" "}
                  <BsArrowRight className="mt-1.5 md:mt-2" style={{color: items.color}}/>
                  
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

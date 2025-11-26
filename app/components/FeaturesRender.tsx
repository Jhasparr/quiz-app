
import Link from "next/link";

import { BsArrowRight } from "react-icons/bs";
const quizItems = [
  {
    header: "Personalized Learning",
    subtext: "Adaptive quizzes that adjust to your knowledge level and learning pace",
   
    image: "/brain.svg",
    color: "#261544",
  },
  {
    header: "Reward System",
    subtext: "Earn points, badges, and real rewards for your achievements",
   
    image: "/reward.svg",
    color: "#432521",
  },
  {
    header: "Student Dashboard",
    subtext: "Comprehensive tools for educators to create and manage quizzes",
  
    image: "/teacher.svg",
    color: "#1D2B44",
  },
  {
    header: "Progress Tracking",
    subtext: "Adaptive quizzes that adjust to your knowledge level and learning pace",
   
    image: "/bar.svg",
    color: "#183826",
  },
  {
    header: "Competitve Leaderboards",
    subtext: "Compete with peers and climb the ranks in various categories",
   
    image: "/reward.svg",
    color: "#45321A",
  },
  {
    header: "Mobile Friendly",
    subtext: "Access quizzes anytime, anywhere on any device",
  
    image: "/mobile.svg",
    color: "#332244",
  },
];
export default function FeaturesRender() {
  return (
    <div className="  md:w-auto w-full  mt-7 ">
      <div className="flex flex-row gap-2 items-center justify-center flex-wrap md:gap-6 ">
      {quizItems.map((items, index) => (
        <div
          className="lg:w-100 md:w-80 w-40 md:h-45 h-38 border border-gray-800 gap-2 bg-[#151518] rounded-lg"
          key={index}
        >
         
          <div className="flex flex-col md:px-6 px-4 mt-2 md:mt-4 gap-4">
            <div>
              <div className="rounded-full mt-2 w-12 h-12 justify-center flex items-center" style={{backgroundColor: items.color}}>
                <img src={items.image} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-md font-bold">{items.header}</h3>
                <p className="text-[#CCCCCC] text-sm hidden sm:block">{items.subtext}</p>
          

             
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

import React from "react";

export default function Navbar() {
  return (
    <div className="text-white relative z-20  mx-auto py-2.5 w-full md:px-4  px-2 bg-[#000000]">
      <div className="flex justify-between items-center md:px-8 px-2">
        <div className="">
          <h3 className="text-gradient font-bold text-xl">SabiBook</h3>
        </div>

        <div className="lg:flex space-x-8 hidden">
          <h3>Quiz</h3>
          <h3>Flashcards</h3>
          <h3>Leaderboard</h3>
          <h3>Subjects</h3>
          <h3>About</h3>
        </div>

        <div className="lg:flex hidden space-x-4">
          <button className="bg-white text-xs text-black py-1.5 px-3.5 rounded-lg">
            Sign In
          </button>
          <button className="bg-gradient text-xs text-white py-1.5 px-3.5 rounded-lg">
            Register
          </button>
        </div>

        <div className="lg:hidden ">
          <img src="/menu-hamburger.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

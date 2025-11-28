"use client"
import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ScrollToTop () {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
       
        onClick={scrollToTop}
        className={`bg-purple-600 hover:bg-purple-700 text-white p-2.5 rounded-full transition-all duration-300 focus:outline shadow-lg focus:outline-none ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <FaChevronUp  className="w-5 h-5 "/>
       
      </button>
    </div>
  );
}
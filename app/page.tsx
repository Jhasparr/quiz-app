import React from "react";
import Home from "./pages/Home";
import Category from "./pages/sections/Category";
import Features from "./pages/sections/Features";
import RegisterHero from "./pages/sections/RegisterHero";

export default function page() {
  return (
    <div>
      <Home />
      <Category />
      <Features />
      <RegisterHero />
    </div>
  );
}

import React from "react";
import Home from "./pages/Home";
import Category from "./pages/sections/Category";
import Features from "./pages/sections/Features";
import RegisterHero from "./pages/sections/RegisterHero";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function page() {
  return (
    <div>
      <Home />
      <Category />
      <Features />
      <RegisterHero />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

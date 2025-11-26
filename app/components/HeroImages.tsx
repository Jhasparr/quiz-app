import React from "react";
import Image from "next/image";

export default function HeroImages() {
  const images = ["/hero-4.png", "/hero-3.png", "/hero-2.png", "/hero-1.png"];
  return (
    <div className="flex flex-row">
      {images.map((image, index) => (
        <div className="w-6 h-6 " key={index}>
          <Image src={image} alt="images" width={10} height={10} className="w-full h-full object-contain"></Image>
        </div>
      ))}
    </div>
  );
}

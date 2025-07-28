"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
const HeroBanner = () => {
  const backgroundImages = [
    "/assets/herobanner/cars.png",
    "/assets/herobanner/cars.png", // boat image placeholder
    "/assets/herobanner/bus.png",
    "/assets/herobanner/motercycle.jpg",
    "/assets/herobanner/plain.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Slides */}
      {backgroundImages.map((url, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${url})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-20" />

      <div className="relative z-30 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
        <div className="px-4 text-white max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold">
            We are{" "}
            <span className="text-lime-400">Alphabit Tech Solutions</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-200">
            EMBRACE YOURSELF WITH OUR{" "}
            <span className="text-lime-400">AWESOME</span> SERVICES
          </p>
          <Link href="#services" scroll={false}>
            <button className="mt-6 px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black transition duration-300">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

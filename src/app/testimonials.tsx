"use client";

import React, { useEffect, useState } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avtar";

// Background images
import car from "../../public/assets/herobanner/cars.png";
import boat from "../../public/assets/herobanner/cars.png";
import bus from "../../public/assets/herobanner/bus.png";
import motercycle from "../../public/assets/herobanner/motercycle.jpg";
import plain from "../../public/assets/herobanner/plain.jpg";

const backgroundImages = [car, boat, bus, motercycle, plain];

const AutoplaySlider: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout>;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 3000);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};

const testimonials = [
  {
    name: "John Doe",
    role: "Product Manager",
    image: "/avatars/01.png",
    text: "Working with Alphabit Tech Solutions was a game-changer. Their attention to detail and delivery speed was outstanding!",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    image: "/avatars/02.png",
    text: "Amazing team! Highly responsive and technically strong. They understood our vision and made it real.",
  },
  {
    name: "Michael Lee",
    role: "Startup Founder",
    image: "/avatars/03.png",
    text: "Their UI/UX and frontend implementation exceeded our expectations. Highly recommended.",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head",
    image: "/avatars/04.png",
    text: "A very professional and experienced team that knows how to get things done efficiently.",
  },
];

export default function HeroBannerWithTestimonials() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: "snap",
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        "(min-width: 640px)": { slides: { perView: 2, spacing: 20 } },
        "(min-width: 1024px)": { slides: { perView: 3, spacing: 24 } },
      },
    },
    [AutoplaySlider]
  );

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background slideshow */}
      {backgroundImages.map((url, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            i === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          style={{ backgroundImage: `url(${url.src})` }}
        />
      ))}

      {/* Testimonials Slider */}
      <section className="relative py-20 bg-black bg-opacity-90 text-white z-30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Testimonials
          </h2>
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="keen-slider__slide">
                <Card className="bg-gray-800/50 backdrop-blur rounded-2xl shadow-xl p-6 h-full">
                  <CardContent>
                    <p className="text-lg leading-relaxed mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <Avatar>
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

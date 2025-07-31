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
    projectName: "WordPress Website Setup Needed",
    name: "Gurtej S.",
    loaction: "India",
    image: "/avatars/01.png",
    remarks:
      "Amrik was extremely professional, had immense knowledge and experience with Wordpress and was able to complete the task very quickly.",
  },
  {
    projectName: "Apply Figma design to Tailwind/NextJS/React",
    name: "Muly",
    location: "Iserile",
    image: "/avatars/01.png",
    remarks: "Good freelancer, hard-working and responsive.",
  },
  {
    projectName: "Urgent Help Transposing HTML Table via Salesforce",
    name: "Olu Adeosun",
    location: "USA",
    image: "/avatars/01.png",
    remarks:
      "Amrik was great. Couldn’t have asked for someone more knowledgeable about HTML, he was proficient and went the extra yard to meet requirements or understand what I needed.",
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
                {/* <Card className="bg-gray-800/50 backdrop-blur rounded-2xl shadow-xl p-6 h-full">
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
                </Card> */}
                <Card className="bg-white text-white-900 rounded-2xl p-6 shadow-md max-w-md mx-auto">
                  <CardContent>
                    <p className="text-xl leading-relaxed mb-6 font-bold">
                      “{testimonial.projectName}”
                    </p>
                    <p className="text-xl leading-relaxed mb-6 italic font-medium">
                      “{testimonial.remarks}”
                    </p>
                    <div className="flex items-center gap-4 mt-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-base">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.location}
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

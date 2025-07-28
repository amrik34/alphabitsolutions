"use client";

import { useState } from "react";
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "PHP",
    image: "/placeholder.png",
  },
  {
    id: 2,
    title: "iOS Fitness App",
    category: "iOS",
    image: "/placeholder.png",
  },
  { id: 3, title: "Job Board", category: "PHP", image: "/placeholder.png" },
  {
    id: 4,
    title: "iOS Finance Tracker",
    category: "iOS",
    image: "/placeholder.png",
  },
  {
    id: 5,
    title: "Android Chat App",
    category: "Android",
    image: "/placeholder.png",
  },
  {
    id: 6,
    title: "Real Estate App",
    category: "Android",
    image: "/placeholder.png",
  },
  {
    id: 7,
    title: "Learning Portal",
    category: "PHP",
    image: "/placeholder.png",
  },
  {
    id: 8,
    title: "Health Monitor",
    category: "Android",
    image: "/placeholder.png",
  },
];

const categories = ["All", "PHP", "iOS", "Android"];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 bg-black/90 text-white" id="portfolio">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>

        <div className="flex justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-200 text-sm sm:text-base ${
                activeCategory === cat
                  ? "bg-lime-400 text-black border-lime-400"
                  : "bg-transparent border-gray-400 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white/5 p-4 rounded-xl backdrop-blur-md hover:shadow-lg hover:scale-[1.02] transition"
            >
              <div className="w-full h-48 relative rounded-md overflow-hidden mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

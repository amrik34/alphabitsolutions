"use client";

import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Build modern and responsive websites using React, Next.js, and more.",
    icon: "ri-code-line",
  },
  {
    title: "Mobile Apps",
    description: "Custom mobile applications for iOS and Android platforms.",
    icon: "ri-smartphone-line",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting beautiful user interfaces and seamless user experiences.",
    icon: "ri-pantone-line",
  },
  {
    title: "Backend/API",
    description:
      "Robust backend development using Node.js, Express, and MongoDB.",
    icon: "ri-server-line",
  },
];

const Services: FC = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-lime-500">
          Our Services
        </h2>
        <p className="text-gray-500 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          We offer a wide range of development services to help you build and
          grow your digital presence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="transition-all"
            >
              <Card className="bg-white dark:bg-neutral-800 shadow hover:shadow-lg transition duration-300 rounded-2xl p-6 h-full flex flex-col items-center text-center">
                <i className={`${service.icon} text-4xl text-lime-500 mb-4`} />
                <h3 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-white">
                  {service.title}
                </h3>
                <CardContent className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

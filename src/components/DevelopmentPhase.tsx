import React from "react";

const phases = [
  {
    title: "Planning",
    description: "Understanding client requirements and defining the roadmap.",
  },
  {
    title: "Design",
    description: "Crafting modern, intuitive UI/UX aligned with the vision.",
  },
  {
    title: "Development",
    description: "Implementing the features using modern web technologies.",
  },
  {
    title: "Testing",
    description: "Ensuring bug-free, secure and optimized performance.",
  },
  {
    title: "Deployment",
    description: "Launching the product and monitoring in production.",
  },
];

export default function DevelopmentPhase() {
  return (
    <section
      id="development"
      className="relative z-10 px-4 py-20 bg-black/70 backdrop-blur-sm text-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
          Development <span className="text-lime-400">Phases</span>
        </h2>
        <div className="relative border-l border-lime-400 ml-4">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="mb-10 ml-6 relative before:absolute before:left-[-1.1rem] before:top-1 before:w-4 before:h-4 before:bg-lime-400 before:rounded-full"
            >
              <h3 className="text-xl font-semibold text-white">
                {phase.title}
              </h3>
              <p className="text-gray-300 mt-2">{phase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

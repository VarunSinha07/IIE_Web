"use client";
import { motion } from "framer-motion";

export default function Programs() {
  const programs = [
    {
      title: "Udayam",
      tag: "(Pre-Incubation)",
      description:
        "Udayam serves as a foundational platform for nurturing early-stage concepts, delivering targeted support to refine and validate ideas. Participants engage in a structured environment where seasoned mentors provide actionable feedback, supported by essential tools like collaboration platforms and market analysis resources.",
      image: "/placeholder.svg",
    },
    {
      title: "Prathisthanam",
      tag: "(Prototype and MVP)",
      description:
        "Prathisthanam provides critical support for startups transitioning from concept to tangible product. Access to advanced facilities and technical expertise enables rapid prototyping and validation. Workshops focus on user testing and refinement to create functional MVPs that meet market standards.",
      image: "/placeholder.svg",
    },
    {
      title: "Digvijyam",
      tag: "(Incubation)",
      description:
        "Digvijyam offers comprehensive incubation for growth-ready startups. Participants receive tailored mentorship, investor connections through pitch sessions, and exclusive industry partnerships. The program ensures sustainable scale and long-term business resilience.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <div className="bg-lightblue py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-4xl font-extrabold text-center text-black mb-4">
        Our Programs
      </h1>
      <p className="text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
        The IIE Centre’s programs are designed to support innovators at every
        stage, offering mentorship, resources, and guidance to transform ideas
        into impactful ventures.
      </p>

      <div className="mt-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`
              group transition-all duration-200 ease-in-out
              bg-white shadow-md hover:shadow-xl
              rounded-2xl p-6 flex flex-col justify-between
              hover:bg-[#FFA700]
            `}
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-44 object-contain p-4 transition-all duration-200 ease-in-out group-hover:brightness-0 group-hover:invert"
              loading="lazy"
            />
            <div className="pt-4 transition-all duration-200 ease-in-out">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-white">
                {program.title}
              </h2>
              <p className="text-sm text-indigo-600 font-medium mb-2 group-hover:text-white">
                {program.tag}
              </p>
              <p className="text-gray-800 group-hover:text-white leading-relaxed">
                {program.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

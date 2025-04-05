"use client";
import { motion } from "framer-motion";

export default function Facilities() {
  const facilities = [
    {
      title: "FAB LAB",
      description:
        "Enter a dynamic, high-tech workshop where advanced manufacturing redefines possibility. This expansive facility hums with the latest 3D printers, rapidly layering materials to produce detailed prototypes with pinpoint accuracy. Laser cutters operate with seamless precision, effortlessly shaping metal, wood, or acrylic into components that match your exact specifications.",
      image: "/images/coworking.png",
    },
    {
      title: "Mobility Centre",
      description:
        "Step into a cutting-edge testing hub dedicated to the future of transportation and mobility solutions. Here, autonomous drones glide through controlled airspace, their sensors and algorithms fine-tuned in real time. Smart transit pods move silently, showcasing the next wave of urban mobility.",
      image: "/images/lab.png",
    },
    {
      title: "Design Thinking Lab",
      description:
        "Discover a modern, light-filled workspace crafted to spark creativity. Expansive whiteboards serve as canvases for bold ideas. Teams collaborate around ergonomic tables with sticky notes, coffee, and endless curiosity.",
      image: "/images/mentorship.png",
    },
  ];

  return (
    <div className="bg-lightblue py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-extrabold text-indigo-800 mb-10"
      >
        Our Facilities
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-12"
      >
        Discover the state-of-the-art facilities designed to support startups and entrepreneurs.
      </motion.p>

      <div className="max-w-6xl mx-auto space-y-16">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`group flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center bg-white rounded-3xl shadow-2xl overflow-hidden transition duration-300 hover:bg-[#4add45]`}
          >
            <img
              src={facility.image}
              alt={facility.title}
              className="w-full md:w-1/2 h-72 object-cover"
            />
            <div className="p-8 md:w-1/2 text-center md:text-left transition duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 group-hover:text-white transition duration-300">
                {facility.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed group-hover:text-white transition duration-300">
                {facility.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

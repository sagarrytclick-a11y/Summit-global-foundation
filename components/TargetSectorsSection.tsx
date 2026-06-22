"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaGlobeAsia,
  FaUserGraduate,
  FaStethoscope,
  FaArrowRight,
} from "react-icons/fa";

interface SectorItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const TargetSectorsSection: React.FC = () => {
  const sectors: SectorItem[] = [
    {
      title: "MBBS Abroad",
      description:
        "Get admission guidance for globally recognized medical universities in Russia, Georgia, Kazakhstan, Uzbekistan, and more.",
      icon: <FaGlobeAsia />,
    },
    {
      title: "MBBS India",
      description:
        "Complete support for NEET counseling, private colleges, government seats, and admission procedures across India.",
      icon: <FaUserGraduate />,
    },
    {
      title: "MD / MS",
      description:
        "Expert assistance for postgraduate medical admissions and specialization opportunities in top institutions.",
      icon: <FaStethoscope />,
    },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#ffffff,#f8fafc)]" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-blue-100 blur-3xl opacity-40 rounded-lg pointer-events-none" />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-blue-700 text-xs font-bold tracking-[2px] uppercase">
              Career Opportunities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Our Target
            <span className="text-blue-600"> Sectors</span>
          </h2>

          <p className="mt-5 text-gray-500 text-base lg:text-lg leading-relaxed">
            We provide expert medical admission guidance across multiple
            educational pathways helping students build successful careers in
            medicine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-200 rounded-[30px] p-8 overflow-hidden hover:border-amber-200 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />

              <div className="w-20 h-20 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-7 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-blue-200/30">
                {sector.icon}
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-4">
                {sector.title}
              </h3>

              <p className="text-gray-500 leading-8 text-sm font-medium">
                {sector.description}
              </p>

              <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm font-black text-gray-900">
                  Learn More
                </span>
                <div className="w-11 h-11 rounded-2xl bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-500 flex items-center justify-center transition-all duration-300">
                  <FaArrowRight className="text-gray-500 group-hover:text-white transition-colors duration-300 text-sm" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto">
          <p className="text-gray-500 leading-8 font-medium">
            With years of experience and expert counselors, we have successfully
            guided thousands of students toward their dream medical careers in
            India and abroad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetSectorsSection;

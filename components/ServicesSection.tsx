"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaComments,
  FaPlaneDeparture,
  FaUserGraduate,
  FaGlobeAsia,
  FaShieldAlt,
} from "react-icons/fa";
import { SITE_IDENTITY } from "@/app/config/site_identity";

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  position: "left" | "right";
}

const ServicesSection: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "100% Admission Assistance",
      description:
        "Complete support from university selection to documentation and admission process for a smooth journey.",
      icon: <FaUniversity />,
      position: "left",
    },
    {
      title: "Free Career Counseling",
      description:
        "Expert guidance for students and parents to choose the best MBBS destination and career path.",
      icon: <FaComments />,
      position: "left",
    },
    {
      title: "95% Visa Success Rate",
      description:
        "Professional visa assistance with proper documentation and travel support for students.",
      icon: <FaPlaneDeparture />,
      position: "left",
    },
    {
      title: "University & Course Selection",
      description:
        "We help students choose the best medical universities according to their goals and budget.",
      icon: <FaUserGraduate />,
      position: "right",
    },
    {
      title: "Personalized Guidance",
      description:
        "Customized counseling and one-to-one mentorship for every student throughout the process.",
      icon: <FaShieldAlt />,
      position: "right",
    },
    {
      title: "Pre-Departure Support",
      description:
        "Complete assistance before departure including accommodation, travel, and student orientation.",
      icon: <FaGlobeAsia />,
      position: "right",
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-sky-100 blur-3xl opacity-40 rounded-full pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-blue-100 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200 bg-amber-50 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-amber-600">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Services At{' '}
            <span className="text-amber-500">{SITE_IDENTITY.name}</span>
          </h2>

          <p className="mt-5 text-gray-500 text-base lg:text-lg leading-relaxed">
            We provide complete MBBS admission guidance for students planning to
            study in India or abroad with trusted support at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-5">
            {services
              .filter((s) => s.position === "left")
              .map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-amber-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center text-lg shrink-0 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-1.5">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="relative bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-2xl">
              <img
                src="/docter.png"
                alt="Doctor"
                className="w-full max-w-[380px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e24]/20 to-transparent" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-xl rounded-2xl px-6 py-4 border border-white/20 w-[85%]">
                <h3 className="text-base font-bold text-gray-900 text-center">
                  Trusted MBBS Guidance
                </h3>
                <p className="text-xs text-gray-500 text-center mt-1">
                  Expert counseling & admission support for medical aspirants.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            {services
              .filter((s) => s.position === "right")
              .map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-amber-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center text-lg shrink-0 group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-1.5">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

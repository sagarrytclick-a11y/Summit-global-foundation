"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaAward,
  FaUsers,
  FaUniversity,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";

interface StatItem {
  number: string;
  label: string;
  icon: React.ReactNode;
  suffix?: string;
}

const ProgressInNumbers: React.FC = () => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({});

  const stats: StatItem[] = [
    { number: "5000", suffix: "+", label: "Students Guided", icon: <FaUserGraduate /> },
    { number: "15", suffix: "+", label: "Years Experience", icon: <FaAward /> },
    { number: "100", suffix: "+", label: "Partner Colleges", icon: <FaUniversity /> },
    { number: "98", suffix: "%", label: "Success Rate", icon: <FaChartLine /> },
    { number: "50", suffix: "+", label: "Expert Counselors", icon: <FaUsers /> },
    { number: "15", suffix: "+", label: "Countries Covered", icon: <FaHandshake /> },
  ];

  useEffect(() => {
    const targetValues: { [key: string]: number } = {
      "5000": 5000,
      "15": 15,
      "100": 100,
      "98": 98,
      "50": 50,
    };

    Object.entries(targetValues).forEach(([key, target]) => {
      let start = 0;
      const duration = 2000;
      const increment = target / 60;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          start = target;
          clearInterval(timer);
        }
        setCounters((prev) => ({ ...prev, [key]: Math.floor(start) }));
      }, duration / 60);
    });
  }, []);

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-sky-100 blur-3xl opacity-30 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-200 bg-amber-50 mb-6">
            <div className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-amber-600">
              Our Achievements
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            <span className="text-amber-500">21+ Years</span> of Trust & Success
          </h2>

          <p className="mt-5 text-gray-500 text-base lg:text-lg leading-relaxed">
            Helping aspiring doctors secure admissions, visa, and successful MBBS
            journeys across India and abroad since 2008.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-5 text-center hover:border-amber-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-t-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center text-lg mb-3 mx-auto group-hover:bg-gradient-to-br group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-amber-200/30">
                {stat.icon}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-blue-600 tracking-tight">
                {stat.number.includes("5000")
                  ? `${counters[stat.number] || 0}`
                  : counters[stat.number] || 0}
                {stat.suffix}
              </h3>

              <p className="mt-1 text-gray-500 text-xs sm:text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
          {[
            {
              icon: <FaUsers />,
              title: 'Expert Team',
              desc: '15+ years guiding students with dedicated MBBS admission counselors across India and abroad.',
            },
            {
              icon: <FaUniversity />,
              title: 'Top Universities',
              desc: 'Partnerships with 100+ accredited medical colleges, vetted for NMC and WHO alignment.',
            },
            {
              icon: <FaHandshake />,
              title: 'Complete Support',
              desc: 'From NEET counseling and documentation to visa filing and pre-departure briefings.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b0e24] to-[#141838] text-white flex items-center justify-center text-lg mb-4 shadow-lg">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressInNumbers;

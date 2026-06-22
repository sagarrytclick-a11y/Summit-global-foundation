"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaArrowRight } from "react-icons/fa";
import { usePopup } from "../contexts/PopupContext";
import { SITE_IDENTITY } from "@/app/config/site_identity";

const AwardsAchievementsSection: React.FC = () => {
  const { openPopup } = usePopup();

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259]">
      <div className="absolute top-10 left-20 w-[300px] h-[300px] bg-sky-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative flex items-center">

              <motion.div
                whileHover={{ rotate: 3, y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative z-20 rounded-[28px] overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm"
              >
                <img
                  src="/paper/image-1.png"
                  alt="Award Certificate"
                  className="w-[230px] md:w-[260px] object-cover"
                />
              </motion.div>

              <motion.div
                whileHover={{ rotate: -3, y: -8 }}
                transition={{ duration: 0.3 }}
                className="relative -ml-12 mt-14 rounded-[28px] overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm"
              >
                <img
                  src="/paper/image-2.png"
                  alt="Achievement Certificate"
                  className="w-[230px] md:w-[260px] object-cover"
                />
              </motion.div>

              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md rounded-2xl px-6 py-4 shadow-2xl border border-white/20 flex items-center gap-4 z-30">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center text-lg">
                  <FaAward />
                </div>
                <div>
                  <h4 className="text-gray-900 font-black text-lg leading-none">
                    19+ Years
                  </h4>
                  <p className="text-gray-500 text-sm font-medium mt-1">
                    Trusted Excellence
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <FaAward className="text-amber-400 text-sm" />
              <span className="text-amber-300 text-xs font-bold tracking-[2px] uppercase">
                Awards & Recognition
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Our
              <span className="text-amber-500"> Achievements</span>
            </h2>

            <p className="mt-6 text-gray-300 text-base md:text-lg leading-8 font-medium max-w-xl">
              With over 19 years of experience, {SITE_IDENTITY.name} has helped
              thousands of aspiring medical students secure admissions in top
              medical universities across India and abroad.
            </p>

            <p className="mt-5 text-gray-400 leading-8 text-sm md:text-base">
              Our dedication, transparency, and student-first approach have made
              us one of the most trusted education consultancies for MBBS
              admissions.
            </p>

            <button
              onClick={openPopup}
              className="group mt-10 inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white h-14 px-8 rounded-xl font-bold text-sm shadow-[0_15px_40px_rgba(245,158,11,0.35)] transition-all duration-300 hover:scale-[1.03]"
            >
              Get Free Consultation
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 text-xs" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AwardsAchievementsSection;

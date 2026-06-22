'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaGlobeAsia,
  FaMedal,
  FaUsers,
  FaCalendarAlt,
} from 'react-icons/fa';
import { usePopup } from '@/contexts/PopupContext';
import Link from 'next/link';
import { SITE_IDENTITY } from '@/app/config/site_identity';

const WhoWeAre: React.FC = () => {
  const { openPopup } = usePopup();

  const features = [
    {
      icon: <FaShieldAlt />,
      title: 'Expert guidance',
      desc: 'Personalized support from start to finish.',
    },
    {
      icon: <FaGlobeAsia />,
      title: 'Trusted by students',
      desc: 'Proven track record of successful admissions.',
    },
    {
      icon: <FaMedal />,
      title: 'Best college fit',
      desc: 'Matching your profile to the right medical college.',
    },
  ];

  const benefits = [
    'Personalized college shortlisting',
    'NEET & eligibility counselling',
    'Documentation & visa end-to-end',
    'Pre-departure & parent updates',
    'English-medium university options',
    'Alumni & student support network',
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#f59e0b]/5 blur-3xl opacity-60 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
              <img
                src="/medical.png"
                alt={`${SITE_IDENTITY.name} Team`}
                className="w-full h-[280px] sm:h-[450px] lg:h-[500px] object-cover"
              />

              <div className="absolute top-3 left-3 sm:top-6 sm:left-6 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2 sm:px-5 sm:py-3 shadow-xl border border-white/20">
                <p className="text-[8px] sm:text-[10px] font-bold tracking-[2px] uppercase text-gray-400">Since</p>
                <p className="text-xl sm:text-3xl font-black text-gray-900">2005</p>
                <p className="text-[10px] sm:text-xs text-gray-500 font-medium">20+ years of trust</p>
              </div>

              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl px-3 py-2 sm:px-5 sm:py-3 shadow-xl border border-white/20 flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#f59e0b] flex items-center justify-center">
                  <FaUsers className="text-white text-[10px] sm:text-sm" />
                </div>
                <div>
                  <p className="text-base sm:text-xl font-black text-gray-900">4000+</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">Students counselled</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f59e0b]/20 bg-[#f59e0b]/5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              <span className="text-xs font-bold tracking-[2px] uppercase text-[#f59e0b]">
                ABOUT US
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-5">
              Guiding{' '}
              <span className="text-[#f59e0b]">future doctors </span>
              since 2005: {SITE_IDENTITY.name}
            </h2>

            <p className="text-gray-500 text-base lg:text-lg leading-relaxed mb-8">
              The MBBS admission journey can be confusing, but with the right mentor,
              everything becomes easier. With over 20 years of experience,{' '}
              {SITE_IDENTITY.name} has helped thousands of aspiring doctors access top
              medical colleges in India and abroad. Our priority is honest guidance,
              a transparent process, and personalized support for every student.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:border-[#f59e0b]/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#f59e0b]/10 text-[#f59e0b] flex items-center justify-center text-lg mb-3">
                    {f.icon}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{f.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-8">
              <h4 className="text-xs font-bold tracking-[2px] uppercase text-gray-900 mb-4">
                WHAT YOU GET WITH US
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <FaCheckCircle className="text-[#f59e0b] text-sm flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM DARK BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 bg-gradient-to-r from-[#0b0e24] via-[#141838] to-[#1e2259] rounded-2xl p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6"
        >
          <div className="flex items-center gap-6">
            <div>
              <p className="text-[10px] font-bold tracking-[2px] uppercase text-white/50 mb-1">FOUNDED 2005</p>
              <p className="text-sm text-white/70 max-w-md">
                We&apos;ve been guiding students towards successful MBBS admissions for over two decades, building trust through transparency and results.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <div className="bg-[#f59e0b] text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2">
              <FaCalendarAlt className="text-xs" />
              21+ YEARS
            </div>
            <Link href="/about" className="w-full sm:w-auto">
              <button className="group w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 rounded-xl bg-white text-[#0b0e24] font-bold text-xs sm:text-sm flex items-center justify-center gap-3 hover:shadow-xl transition-all duration-300">
                Schedule Expert Counselling
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
            <button
              onClick={openPopup}
              className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 rounded-xl border-2 border-white/20 text-white font-bold text-xs sm:text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Chat on WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;

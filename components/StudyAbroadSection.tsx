'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGlobeAmericas } from 'react-icons/fa';
import Link from 'next/link';
import { SITE_IDENTITY } from '@/app/config/site_identity';

interface CountrySlide {
  name: string;
  slug: string;
  image: string;
  tagline: string;
  description: string;
  features: string;
}

const countries: CountrySlide[] = [
  {
    name: 'Russia',
    slug: 'russia',
    image: 'https://i.pinimg.com/1200x/29/2d/e2/292de231f2d4bb8572813423294bae60.jpg',
    tagline: 'WHO-listed universities · English & bilingual programs',
    description: 'Russia is one of the most popular destinations for Indian students pursuing MBBS. With world-class medical universities, affordable tuition fees, and a rich cultural experience, Russia offers an excellent pathway for aspiring doctors.',
    features: 'WHO & NMC listed · English-medium · Affordable fees',
  },
  {
    name: 'Kyrgyzstan',
    slug: 'kyrgyzstan',
    image: 'https://i.pinimg.com/1200x/16/01/a1/1601a122fa2792080fd1e57c50abc8ab.jpg',
    tagline: 'Budget-friendly MBBS · Indian hostel & food available',
    description: 'Kyrgyzstan offers affordable MBBS programs with low tuition fees and living costs. Many universities are WHO-listed and offer English-medium instruction with Indian food and hostel facilities.',
    features: 'WHO-listed · Low cost · Indian community',
  },
  {
    name: 'Uzbekistan',
    slug: 'uzbekistan',
    image: 'https://i.pinimg.com/736x/b4/5d/c9/b45dc94da00ddd4883ae6e3c789227ca.jpg',
    tagline: 'Modern campuses · High FMGE pass rate',
    description: 'Uzbekistan is emerging as a top MBBS destination with modern medical universities, high-quality education, and excellent FMGE pass rates among Indian graduates.',
    features: 'Modern infrastructure · High pass rate · English-medium',
  },
  {
    name: 'Philippines',
    slug: 'philippines',
    image: 'https://i.pinimg.com/1200x/16/01/a1/1601a122fa2792080fd1e57c50abc8ab.jpg',
    tagline: 'US-based curriculum · Clinical exposure from year 3',
    description: 'The Philippines follows a US-based medical curriculum with early clinical exposure. The English-speaking environment and affordable fees make it a preferred choice for Indian students.',
    features: 'US curriculum · English-speaking · Clinical focus',
  },
  {
    name: 'Georgia',
    slug: 'georgia',
    image: 'https://i.pinimg.com/1200x/db/8a/4a/db8a4aa1c8deabf44d9c894cdd6e29f9.jpg',
    tagline: 'European education · Safe & welcoming environment',
    description: 'Georgia offers European-standard medical education with safe campuses, English-medium programs, and a welcoming environment for international students.',
    features: 'European standard · Safe campus · WHO-listed',
  },
];

const StudyAbroadSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % countries.length);
  const prev = () => setCurrent((prev) => (prev - 1 + countries.length) % countries.length);

  const country = countries[current];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f59e0b]/5 blur-3xl opacity-40 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <FaGlobeAmericas className="text-[#f59e0b] text-sm" />
            <span className="text-white/70 text-xs font-bold tracking-[2px] uppercase">
              MBBS ABROAD · {SITE_IDENTITY.name}
            </span>
          </div>

          <p className="text-white/50 text-base lg:text-lg leading-relaxed">
            We help Indian students secure admissions in top medical universities across the globe — with transparent processes, no hidden fees, and complete support from application to arrival.
          </p>
        </div>

        {/* SLIDE CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 mb-6">
                <FaGlobeAmericas className="text-[#f59e0b] text-xs" />
                <span className="text-[#f59e0b] text-xs font-bold tracking-[2px] uppercase">
                  STEP {current + 1} · {country.name.toUpperCase()}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
                Study MBBS in{' '}
                <span className="text-[#f59e0b]">{country.name}</span>
              </h2>

              <p className="text-[#f59e0b] text-sm font-semibold mb-4">
                {country.features}
              </p>

              <p className="text-white/50 text-base lg:text-lg leading-relaxed mb-8">
                {country.description}
              </p>

              <Link href={`/country/${country.slug}`}>
                <button className="group h-12 px-6 rounded-xl bg-[#f59e0b] text-white font-bold text-sm flex items-center gap-3 hover:bg-[#d97706] hover:shadow-xl hover:shadow-[#f59e0b]/20 transition-all duration-300">
                  Explore {country.name}
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT IMAGE */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-[24px] overflow-hidden shadow-2xl">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-[350px] sm:h-[400px] lg:h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e24]/60 to-transparent" />

                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl w-14 h-14 flex items-center justify-center shadow-xl border border-white/20">
                  <span className="text-2xl font-black text-[#0b0e24]">
                    {String(current + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM CONTROLS */}
        <div className="flex items-center justify-between mt-12">
          <div className="flex items-center gap-2">
            {countries.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-[#f59e0b]' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/40 text-sm font-medium">
              {String(current + 1).padStart(2, '0')} / {String(countries.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-2">
              <button onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-200">
                <FaArrowRight className="text-white/60 rotate-180 text-sm" />
              </button>
              <button onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all duration-200">
                <FaArrowRight className="text-white/60 text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadSection;

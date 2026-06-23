"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePopup } from "../contexts/PopupContext";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPlaneDeparture,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SITE_IDENTITY } from "@/app/config/site_identity";
import Link from "next/link";

interface DiaryItem {
  id: number;
  image: string;
  caption: string;
  location: string;
  gate: string;
}

const diaries: DiaryItem[] = [
  {
    id: 1,
    image: "https://www.theeducationabroad.com/uploads/gallery/departure1.webp",
    caption: "Students Ready to Fly to Georgia",
    location: "Indira Gandhi International Airport, Delhi",
    gate: "GATE 01",
  },
  {
    id: 2,
    image: "https://www.ruseducation.in/wp-content/uploads/2023/09/Departure-of-Indian-Students-for-Russia-to-study-MBBS-at-OrSMU-4.webp",
    caption: "MBBS Aspirants Heading to Philippines",
    location: "Chhatrapati Shivaji Maharaj International Airport, Mumbai",
    gate: "GATE 02",
  },
  {
    id: 3,
    image: "https://www.ruseducation.in/wp-content/uploads/2022/09/batch-3-departs-to-join-mbbs-in-russia-2.webp",
    caption: "Future Doctors Departing for Kazakhstan",
    location: "Kempegowda International Airport, Bengaluru",
    gate: "GATE 03",
  },
  {
    id: 4,
    image: "https://www.ruseducation.in/wp-content/uploads/2022/01/2-78.webp",
    caption: "Medical Students Bound for Russia",
    location: "Netaji Subhash Chandra Bose International Airport, Kolkata",
    gate: "GATE 04",
  },
  {
    id: 5,
    image: "https://www.theeducationabroad.com/uploads/gallery/departure1.webp",
    caption: "New Batch Departing for Kyrgyzstan",
    location: "Rajiv Gandhi International Airport, Hyderabad",
    gate: "GATE 05",
  },
  {
    id: 6,
    image: "https://www.ruseducation.in/wp-content/uploads/2023/09/Departure-of-Indian-Students-for-Russia-to-study-MBBS-at-OrSMU-4.webp",
    caption: "Students Flying to Uzbekistan",
    location: "Sardar Vallabhbhai Patel International Airport, Ahmedabad",
    gate: "GATE 06",
  },
  {
    id: 7,
    image: "https://www.ruseducation.in/wp-content/uploads/2022/09/batch-3-departs-to-join-mbbs-in-russia-2.webp",
    caption: "Medical Aspirants Heading to Georgia",
    location: "Chennai International Airport, Chennai",
    gate: "GATE 07",
  },
  {
    id: 8,
    image: "https://www.ruseducation.in/wp-content/uploads/2022/01/2-78.webp",
    caption: "Future Doctors Departing for Russia",
    location: "Pune International Airport, Pune",
    gate: "GATE 01",
  },
  {
    id: 9,
    image: "https://www.theeducationabroad.com/uploads/gallery/departure1.webp",
    caption: "Students Ready to Fly to Philippines",
    location: "Lal Bahadur Shastri International Airport, Varanasi",
    gate: "GATE 02",
  },
  {
    id: 10,
    image: "https://www.ruseducation.in/wp-content/uploads/2023/09/Departure-of-Indian-Students-for-Russia-to-study-MBBS-at-OrSMU-4.webp",
    caption: "MBBS Batch Departing for Kazakhstan",
    location: "Jaipur International Airport, Jaipur",
    gate: "GATE 03",
  },
];

const tickerItems = [
  "DEL → BISH · BOARDING",
  "DEL → MOW · BOARDING",
  "DEL → TAS · BOARDING",
  "DEL → KTM · BOARDING",
  "DEL → DAC · BOARDING",
  "DEL → FRU · BOARDING",
  "BOM → SVO · BOARDING",
  "CCU → FRU · BOARDING",
];

const CampusDiarySection: React.FC = () => {
  const { openPopup, updateFormData } = usePopup();
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const totalDiaries = diaries.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalDiaries - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === totalDiaries - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === totalDiaries - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalDiaries]);



  const handleShareJourney = () => {
    updateFormData({
      courseInterest: "Share My Journey - Campus Diary",
    });
    openPopup();
  };

  return (
    <section className="py-16 sm:py-20 overflow-hidden bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259]">
      {/* TICKER MARQUEE */}
      <div className="overflow-hidden border-b border-white/10 pb-6 mb-12">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 mx-6 text-sm font-semibold tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
              <span className="text-white/70">{item.split("·")[0]}</span>
              <span className="text-[#108b4b] font-bold">· {item.split("·")[1]}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg mb-5">
              <FaPlaneDeparture className="text-[#f59e0b] text-sm" />
              <span className="text-xs font-bold tracking-[0.2em] text-white/80 uppercase">
                Campus Diary · Live Moments
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Campus
              <span className="text-[#f59e0b]"> Diaries</span>
            </h2>

            <p className="text-blue-100/60 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              Real moments when our students begin their global medical journey — from campus
              orientation to departure day.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                { value: "13+", label: "Departures captured" },
                { value: "24/7", label: "Airport support" },
                { value: "4000+", label: "Students placed" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 min-w-[140px]"
                >
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-blue-100/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/colleges/mbbs-abroad"
              className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all"
            >
              Explore MBBS Abroad
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          {/* RIGHT — FEATURED IMAGE CARD */}
          <div className="relative flex justify-center">
            {/* Stacked background cards */}
            <div className="absolute top-4 left-[calc(50%-150px)] w-[280px] sm:w-[300px] h-[380px] bg-white/5 border border-white/10 rounded-2xl rotate-[-4deg] opacity-40" />
            <div className="absolute top-2 left-[calc(50%-130px)] w-[280px] sm:w-[300px] h-[380px] bg-white/5 border border-white/10 rounded-2xl rotate-[-2deg] opacity-60" />

            {/* Main card */}
            <div className="relative w-[300px] sm:w-[340px] bg-[#1a2a4a] border border-white/15 rounded-2xl overflow-hidden shadow-2xl z-10">
              <div className="relative h-[320px] sm:h-[380px] overflow-hidden">
                <img
                  src={diaries[activeIndex].image}
                  alt={diaries[activeIndex].caption}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Card metadata */}
              <div className="px-5 py-4 flex items-center justify-between border-t border-white/10">
                <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">
                  Summit foundation 
                </span>
                <span className="text-sm font-bold text-white">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(totalDiaries).padStart(2, "0")}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest text-[#108b4b] uppercase">
                  DEPARTED
                  <FaArrowRight className="text-[8px]" />
                </span>
              </div>
            </div>

            {/* Nav arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-20"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all z-20"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* THUMBNAIL GALLERY */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto custom-scrollbar mt-12 pb-4 snap-x snap-mandatory"
        >
          {diaries.map((diary, i) => (
            <button
              key={diary.id}
              onClick={() => setActiveIndex(i)}
              className={`shrink-0 snap-center transition-all duration-300 ${
                i === activeIndex
                  ? "ring-2 ring-[#f59e0b] ring-offset-2 ring-offset-[#0b0e24] scale-105"
                  : "opacity-50 hover:opacity-80"
              }`}
            >
              <div className="w-[100px] sm:w-[120px] h-[80px] sm:h-[90px] rounded-xl overflow-hidden border border-white/15">
                <img
                  src={diary.image}
                  alt={diary.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[10px] font-bold text-white/50 mt-2 tracking-wider text-center uppercase">
                {diary.gate}
              </p>
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
      `}</style>
    </section>
  );
};

export default CampusDiarySection;

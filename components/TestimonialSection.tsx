"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface ReviewItem {
  name: string;
  university: string;
  country: string;
  countryColor: string;
  quote: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Priya Sharma",
    university: "Kazan Federal University",
    country: "Russia",
    countryColor: "bg-blue-100 text-blue-700",
    quote:
      "\"AR Group guided me through NEET counselling and university selection in Russia. Visa and hostel paperwork were handled smoothly, and I started MBBS on time.\"",
  },
  {
    name: "Rahul Patel",
    university: "Tbilisi State Medical University",
    country: "Georgia",
    countryColor: "bg-green-100 text-green-700",
    quote:
      "\"Transparent fee structure and honest comparisons helped me choose Georgia. The team stayed available on WhatsApp even after I landed in Tbilisi.\"",
  },
  {
    name: "Ananya Gupta",
    university: "Al-Farabi Kazakh National University",
    country: "Kazakhstan",
    countryColor: "bg-amber-100 text-amber-700",
    quote:
      "\"From document verification to airport pickup coordination, AR Group made my first year abroad stress-free. Highly recommend for Kazakhstan MBBS.\"",
  },
  {
    name: "Sneha Reddy",
    university: "Grant Medical College (via NEET)",
    country: "India",
    countryColor: "bg-rose-100 text-rose-700",
    quote:
      "\"AR Group's India MBBS counselling helped me secure a government seat in Maharashtra. Their state-wise cut-off analysis was spot on.\"",
  },
  {
    name: "Imran Hossain",
    university: "Dhaka National Medical College",
    country: "Bangladesh",
    countryColor: "bg-emerald-100 text-emerald-700",
    quote:
      "\"As an Indian student, I needed clarity on SAARC quotas and NMC compliance. AR Group handled every form and embassy appointment.\"",
  },
  {
    name: "Kavya Nair",
    university: "Bashkir State Medical University",
    country: "Russia",
    countryColor: "bg-blue-100 text-blue-700",
    quote:
      "\"The entire admission process was transparent. I received my visa on time and the university campus was exactly as shown during counselling.\"",
  },
  {
    name: "Arjun Singh",
    university: "Batumi Shota Rustaveli State University",
    country: "Georgia",
    countryColor: "bg-green-100 text-green-700",
    quote:
      "\"Best decision I made was choosing AR Group. They helped me compare universities and choose the one within my budget. Forever grateful.\"",
  },
  {
    name: "Fatima Khan",
    university: "South Kazakhstan Medical Academy",
    country: "Kazakhstan",
    countryColor: "bg-amber-100 text-amber-700",
    quote:
      "\"From NEET score to flight tickets, AR Group handled everything. My parents were at ease knowing I was in safe hands throughout the journey.\"",
  },
];

const TestimonialSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 340;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (direction === "right" && scrollLeft + clientWidth + cardWidth >= scrollWidth - 20) {
      scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
    } else if (direction === "left" && scrollLeft - cardWidth <= 0) {
      scrollRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (!scrollRef.current || !isAutoPlaying) return;
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const cardWidth = 340;
      if (scrollLeft + clientWidth + cardWidth >= scrollWidth - 20) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 3000);
  };

  useEffect(() => {
    startAutoPlay();
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [isAutoPlaying]);

  return (
    <section className="py-16 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-[#f59e0b] uppercase tracking-[0.25em] text-xs font-bold">
            Google Reviews
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            Success{" "}
            <span className="text-[#f59e0b]">Stories</span>{" "}
            from Our Students
          </h2>

          <p className="mt-4 text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Real reviews from families who trusted Summit Global for MBBS in India
            and abroad
          </p>

          {/* Rating Bar */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-full px-5 py-2.5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <FaStar key={i} className="text-[#f59e0b] text-sm" />
                ))}
                <FaStar className="text-[#f59e0b] text-sm opacity-40" />
              </div>
              <span className="text-sm font-bold text-gray-900">4.2</span>
              <span className="text-sm text-gray-400">·</span>
              <span className="text-sm text-gray-500">115 Google reviews</span>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all"
            >
              View on Google
              <FaExternalLinkAlt className="text-xs" />
            </a>
          </div>
        </div>

        {/* REVIEWS CAROUSEL */}
        <div className="relative" onMouseEnter={() => setIsAutoPlaying(false)} onMouseLeave={() => setIsAutoPlaying(true)}>
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto custom-scrollbar pb-4 snap-x snap-mandatory"
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="shrink-0 w-[300px] sm:w-[320px] bg-white border border-gray-200 rounded-2xl p-6 snap-start hover:shadow-lg transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <FaStar key={s} className="text-[#f59e0b] text-sm" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed italic mb-6 min-h-[100px]">
                  {review.quote}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="text-sm font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{review.university}</p>
                  <span
                    className={`inline-block mt-3 text-[10px] font-bold px-3 py-1 rounded-full ${review.countryColor}`}
                  >
                    {review.country}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* NAV ARROWS */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => { setIsAutoPlaying(false); scroll("left"); setTimeout(() => setIsAutoPlaying(true), 4000); }}
              className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-all"
            >
              <FaChevronLeft className="text-xs" />
            </button>
            <button
              onClick={() => { setIsAutoPlaying(false); scroll("right"); setTimeout(() => setIsAutoPlaying(true), 4000); }}
              className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-all"
            >
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

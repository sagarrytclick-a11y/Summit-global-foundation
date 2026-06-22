"use client";

import React from "react";
import { FaPaperPlane, FaArrowRight } from "react-icons/fa";

const FixedBottomCarousel: React.FC = () => {
  const countries = [
    "Russia",
    "Georgia",
    "Kazakhstan",
    "Philippines",
    "China",
    "Nepal",
    "Bangladesh",
    "Armenia",
    "Kyrgyzstan",
    "Belarus",
    "Egypt",
    "Uzbekistan",
  ];

  const duplicatedCountries = [
    ...countries,
    ...countries,
    ...countries,
  ];

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50">
        <div className="relative overflow-hidden border-t border-white/10 bg-[#0b0e24]/95 backdrop-blur-xl shadow-2xl">
          
          {/* Glow */}
          <div className="absolute -left-10 top-0 h-16 w-16 sm:h-20 sm:w-20 rounded-lg bg-[#f59e0b]/20 blur-2xl sm:blur-3xl"></div>
          <div className="absolute right-0 top-0 h-16 w-16 sm:h-20 sm:w-20 rounded-lg bg-[#f59e0b]/10 blur-2xl sm:blur-3xl"></div>

          <div className="relative py-1.5 sm:py-2">
            <div className="overflow-hidden">
              <div className="flex animate-marquee gap-2 sm:gap-3 w-max px-2 sm:px-3">
                {duplicatedCountries.map((country, index) => (
                  <button
                    key={index}
                    className="group flex items-center gap-1.5 sm:gap-2 rounded-lg border border-white/10 bg-white/5 px-2 sm:px-3 py-1 sm:py-1.5 text-white transition-all duration-300 hover:border-[#f59e0b]/40 hover:bg-[#f59e0b]/10 hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"
                  >
                    {/* Icon */}
                    <div className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-lg bg-white/10 group-hover:bg-[#f59e0b]/20 transition-all duration-300">
                      <FaPaperPlane className="text-[8px] sm:text-[10px] text-[#f59e0b]" />
                    </div>

                    {/* Text */}
                    <div className="flex items-center gap-0.5 sm:gap-1">
                      <span className="text-[10px] sm:text-xs text-gray-300">
                        MBBS in
                      </span>

                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {country}
                      </span>
                    </div>

                    <FaArrowRight className="text-[8px] sm:text-[10px] text-[#f59e0b] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 15s linear infinite;
          }
        }
      `}</style>
    </>
  );
};

export default FixedBottomCarousel;
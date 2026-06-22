"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { usePopup } from "@/contexts/PopupContext";

interface UniversityItem {
  name: string;
  description: string;
  image: string;
  city?: string;
  fees?: string;
  ranking?: string;
  type?: string;
  slug?: string;
  id?: number;
}

interface CollegeData {
  id: number;
  name: string;
  city: string;
  fees: string;
  seats: number;
  recognition: string;
  ranking: string;
  type: string;
  image: string;
}

interface StateData {
  id: number;
  name: string;
  image: string;
  description: string;
  colleges: CollegeData[];
}

interface MbbsData {
  states: StateData[];
}

const TopUniversitiesSection: React.FC = () => {
  const [universities, setUniversities] = useState<UniversityItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const { openPopup } = usePopup();

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch("/mbbs-india.json");
        if (!response.ok) throw new Error("Failed to fetch university data");
        const data: MbbsData = await response.json();
        const topUniversities: UniversityItem[] = [];
        const seenUniversities = new Set<string>();
        data.states.forEach((state) => {
          state.colleges.forEach((college) => {
            if (topUniversities.length < 6 && !seenUniversities.has(college.name)) {
              const slug = college.name.toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, "-");
              topUniversities.push({
                name: college.name,
                description: `${college.type} medical college with ${college.seats} seats and ${college.recognition} recognition.`,
                image: college.image,
                city: college.city,
                fees: college.fees,
                ranking: college.ranking,
                type: college.type,
                slug,
                id: college.id,
              });
              seenUniversities.add(college.name);
            }
          });
        });
        setUniversities(topUniversities.slice(0, 6));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUniversities();
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-sky-100 blur-3xl opacity-40 rounded-lg pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <FaGraduationCap className="text-blue-600 text-sm" />
            <span className="text-blue-700 text-xs font-bold tracking-[2px] uppercase">
              Top Medical Colleges
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
            Top MBBS
            <span className="text-blue-600"> Universities In India</span>
          </h2>

          <p className="mt-5 text-gray-500 text-base lg:text-lg leading-relaxed">
            Discover India&apos;s leading medical universities with world-class
            education, modern infrastructure, and excellent career opportunities.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse bg-gray-200 rounded-2xl h-[500px]" />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {universities.map((university, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/colleges/${university.slug}`} className="group block h-full">
                    <div className="relative h-full bg-white border border-gray-200 rounded-[24px] overflow-hidden hover:border-amber-200 hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20 rounded-full" />

                      <div className="relative h-[240px] overflow-hidden">
                        <img
                          src={university.image}
                          alt={university.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                        {university.ranking && (
                          <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 shadow-sm">
                            <span className="text-xs font-bold text-blue-600">
                              {university.ranking}
                            </span>
                          </div>
                        )}

                        <div className="absolute bottom-5 left-5">
                          <h3 className="text-xl font-black text-white leading-snug max-w-[90%] drop-shadow-lg">
                            {university.name}
                          </h3>
                        </div>
                      </div>

                      <div className="p-7">
                        <div className="flex items-center gap-3 flex-wrap mb-5">
                          {university.type && (
                            <span className={`px-3 py-2 rounded-xl text-xs font-bold ${
                              university.type === "Government"
                                ? "bg-green-50 text-green-700 border border-green-100"
                                : "bg-purple-50 text-purple-700 border border-purple-100"
                            }`}>
                              {university.type}
                            </span>
                          )}
                          {university.city && (
                            <span className="px-3 py-2 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 flex items-center gap-2 border border-blue-100">
                              <FaMapMarkerAlt className="text-[10px]" />
                              {university.city}
                            </span>
                          )}
                        </div>

                        <p className="text-gray-500 leading-7 text-sm font-medium">
                          {university.description}
                        </p>

                        {university.fees && (
                          <div className="mt-5 bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100 rounded-2xl px-5 py-4">
                            <p className="text-sm font-bold text-blue-700">
                              Fees: {university.fees}
                            </p>
                          </div>
                        )}

                        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-gray-900 font-black text-sm">
                            Apply Now
                          </span>
                          <div className="w-11 h-11 rounded-2xl bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 flex items-center justify-center transition-all duration-300">
                            <FaArrowRight className="text-gray-500 group-hover:text-white transition-colors duration-300 text-sm" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link href="/colleges/mbbs-abroad">
                <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm hover:shadow-xl hover:shadow-blue-600/20 hover:scale-105 transition-all duration-300">
                  View All Universities
                </button>
              </Link>
            </div>

            <div className="mt-16 text-center">
              <p className="text-gray-500 leading-8 font-medium max-w-3xl mx-auto mb-8">
                Our expert counselors help students secure admission into India&apos;s
                top medical universities with complete admission guidance and
                counseling support.
              </p>

              <button
                onClick={() => openPopup()}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white h-14 px-8 rounded-xl font-bold text-sm shadow-[0_15px_35px_rgba(245,158,11,0.25)] transition-all duration-300 hover:scale-[1.03]"
              >
                Get Admission Guidance
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 text-xs" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default TopUniversitiesSection;

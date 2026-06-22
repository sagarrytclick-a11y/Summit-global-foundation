"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaUserMd,
  FaUniversity,
  FaUserGraduate,
  FaArrowRight,
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaBookOpen,
  FaUsers,
  FaHandshake,
  FaHeadset,
  FaClipboardCheck,
  FaStethoscope,
} from "react-icons/fa";
import { dataCache, CACHE_KEYS } from "@/lib/data-cache";

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
  admissionProcess?: string;
}

interface StateData {
  id: number;
  name: string;
  slug: string;
  image: string;
  description: string;
  colleges: CollegeData[];
}

interface MdMsData {
  states: StateData[];
}

const MdMsPage: React.FC = () => {
  const [states, setStates] = useState<StateData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedState, setSelectedState] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const collegesPerPage = 12;

  useEffect(() => {
    const loadData = async () => {
      try {
        let data: MdMsData | null = null;
        try {
          const res = await fetch("/md-ms.json");
          if (res.ok) {
            data = await res.json();
          }
        } catch {
          // fallback
        }
        setStates(data?.states || []);
      } catch (err) {
        console.error("Data loading error:", err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const allColleges = useMemo(() => {
    return states.flatMap((state) => state.colleges);
  }, [states]);

  const filteredColleges = useMemo(() => {
    return allColleges.filter((college) => {
      const matchesState =
        selectedState === "" ||
        states.find(
          (s) =>
            s.name === selectedState &&
            s.colleges.some((c) => c.id === college.id)
        );
      const matchesSearch =
        college.name.toLowerCase().includes(search.toLowerCase()) ||
        college.city.toLowerCase().includes(search.toLowerCase());
      return matchesState && matchesSearch;
    });
  }, [allColleges, selectedState, search, states]);

  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
  const indexOfLastCollege = currentPage * collegesPerPage;
  const indexOfFirstCollege = indexOfLastCollege - collegesPerPage;
  const currentColleges = filteredColleges.slice(
    indexOfFirstCollege,
    indexOfLastCollege
  );

  const totalSeats = allColleges.reduce(
    (acc, college) => acc + (college.seats || 0),
    0
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="h-14 w-14 border-4 border-[#1e2259] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg font-medium">Loading MD/MS Colleges...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] py-16 sm:py-20 lg:py-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')]"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#009edb]/10 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-blue-200/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-white font-medium">MD/MS</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1e2259] px-4 py-2 rounded-lg mb-4">
            <FaUserMd className="text-white text-sm" />
            <span className="text-xs font-bold tracking-wider text-white">MD/MS</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              Top{" "}
              <span className="text-[#009edb]">MD/MS Colleges</span>{" "}
              in India
            </h1>
            <p className="text-base sm:text-lg text-blue-100/80 leading-relaxed">
              Discover top government &amp; private medical colleges for MD/MS with complete
              details about fees, seats, rankings and admissions.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-black text-[#009edb]">{states.length}+</p>
              <p className="text-sm text-blue-100/70 mt-1 font-medium">States Covered</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-black text-[#009edb]">{allColleges.length}+</p>
              <p className="text-sm text-blue-100/70 mt-1 font-medium">PG Colleges</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
              <p className="text-3xl sm:text-4xl font-black text-[#009edb]">{totalSeats.toLocaleString()}+</p>
              <p className="text-sm text-blue-100/70 mt-1 font-medium">PG Seats</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-3 rounded-lg font-bold text-sm transition-all"
            >
              Get Free Counselling
              <FaArrowRight className="text-xs" />
            </Link>
            <a
              href="tel:+919354023968"
              className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all"
            >
              <FaHeadset className="text-xs" />
              Speak to an Expert
            </a>
          </div>
        </div>
      </section>

      {/* FEATURE BAR */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaClipboardCheck, text: "NEET PG guidance" },
              { icon: FaBookOpen, text: "College shortlisting" },
              { icon: FaUsers, text: "5000+ students counselled" },
              { icon: FaHandshake, text: "End-to-end support" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1e2259]/10 flex items-center justify-center shrink-0">
                  <item.icon className="text-[#1e2259] text-sm" />
                </div>
                <span className="text-sm font-semibold text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP CARDS */}
      <section className="bg-gray-50 py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: FaCheckCircle,
                title: "NEET PG qualified",
                desc: "Ensure you meet NEET PG eligibility and secure a qualifying score.",
              },
              {
                step: "02",
                icon: FaClipboardCheck,
                title: "Counselling & docs",
                desc: "Complete NEET PG counselling registration and document verification.",
              },
              {
                step: "03",
                icon: FaStethoscope,
                title: "Secure PG seat",
                desc: "Get seat allotment and complete admission at your PG college.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 relative"
              >
                <span className="absolute top-6 right-6 text-5xl font-black text-gray-100">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#1e2259] flex items-center justify-center mb-4">
                  <item.icon className="text-white text-lg" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* College Directory */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-[#1e2259] px-3 py-1.5 rounded-md mb-3">
            <span className="text-xs font-bold tracking-wider text-white">PG COLLEGE DIRECTORY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            Top MD/MS Colleges in India
          </h2>
        </div>

        {/* State Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => {
              setSelectedState("");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              selectedState === ""
                ? "bg-[#1e2259] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All States
          </button>
          {states.map((state) => (
            <button
              key={state.id}
              onClick={() => {
                setSelectedState(state.name);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                selectedState === state.name
                  ? "bg-[#1e2259] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {state.name}
            </button>
          ))}
        </div>

        {/* Colleges Grid */}
        {filteredColleges.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <FaUniversity className="text-5xl text-gray-300 mx-auto mb-4" />
            <p className="text-lg text-gray-400">No colleges found matching your criteria.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {currentColleges.map((college) => (
                <div
                  key={college.id}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#1e2259] text-white text-xs font-bold px-2.5 py-1 rounded-md">
                        MD/MS
                      </span>
                    </div>
                    {college.type && (
                      <div className="absolute top-3 right-3">
                        <span
                          className={`text-white text-xs font-bold px-2 py-1 rounded-md ${
                            college.type === "Government" ? "bg-green-600" : "bg-purple-600"
                          }`}
                        >
                          {college.type}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 leading-snug">
                      {college.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
                      <FaMapMarkerAlt className="text-[10px]" />
                      {college.city}
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500">Seats: <strong className="text-gray-900">{college.seats}</strong></span>
                      <span className="text-xs text-gray-500">{college.ranking}</span>
                    </div>
                    <Link
                      href={`/colleges/md-ms/${college.name
                        .toLowerCase()
                        .replace(/[^a-z0-9\s]/g, "")
                        .replace(/\s+/g, "-")}`}
                      className="inline-flex items-center gap-1.5 text-[#1e2259] text-xs font-bold hover:text-[#009edb] transition-colors"
                    >
                      VIEW FULL DETAILS
                      <FaArrowRight className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-10 flex items-center justify-center gap-2">
                <button
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <FaChevronLeft className="text-xs" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => {
                      setCurrentPage(i + 1);
                      window.scrollTo({ top: 400, behavior: "smooth" });
                    }}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-semibold transition-all ${
                      currentPage === i + 1
                        ? "bg-[#1e2259] text-white"
                        : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() => {
                    setCurrentPage(currentPage + 1);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            )}

            <p className="text-center text-sm text-gray-400 mt-4">
              Page {currentPage} of {totalPages} ({filteredColleges.length} colleges)
            </p>
          </>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            Need MD/MS Admission Guidance?
          </h2>
          <p className="text-blue-100/70 text-sm sm:text-base max-w-2xl mx-auto mb-8">
            Get expert counseling for NEET PG, admission process, documentation and direct
            guidance from our PG admission experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-8 py-3 rounded-lg font-bold text-sm transition-all"
            >
              Get Free Counseling
              <FaArrowRight className="text-xs" />
            </Link>
            <a
              href="tel:+919354023968"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-bold text-sm transition-all"
            >
              <FaHeadset className="text-xs" />
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MdMsPage;

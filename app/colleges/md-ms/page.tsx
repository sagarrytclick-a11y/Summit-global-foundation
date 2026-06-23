"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaUserMd,
  FaUniversity,
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
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
          <div className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded-lg w-64 mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden border border-gray-100">
                  <div className="h-44 bg-gray-200" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                    <div className="h-3 bg-gray-200 rounded w-1/2" />
                    <div className="flex justify-between">
                      <div className="h-3 bg-gray-200 rounded w-1/4" />
                      <div className="h-3 bg-gray-200 rounded w-1/4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] py-20 lg:py-24 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#009edb]/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f59e0b]/5 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-blue-200/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-white font-medium">MD/MS</span>
          </nav>

          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg mb-6">
                <FaUserMd className="text-[#009edb] text-sm" />
                <span className="text-xs font-bold tracking-wider text-white/90 uppercase">Postgraduate Medical Directory 2026</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
                Top <span className="text-[#009edb]">MD/MS Colleges</span> in India
              </h1>
              <p className="text-base sm:text-lg text-blue-100/70 leading-relaxed max-w-xl mb-8">
                Discover top government &amp; private medical colleges for MD/MS with complete
                details about fees, seats, rankings, and admissions process.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#e09300] text-[#0b0e24] px-8 py-4 rounded-xl font-bold text-sm transition-all shadow-lg shadow-[#f59e0b]/20"
                >
                  Get Free Counselling
                  <FaArrowRight className="text-xs" />
                </Link>
                <a
                  href="tel:+919354023968"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-sm transition-all"
                >
                  <FaHeadset className="text-xs" />
                  Speak to an Expert
                </a>
              </div>
            </div>

            {/* Right Side: Clean Counter Dashboard */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <h3 className="text-sm font-bold text-blue-200 uppercase tracking-wider mb-6 text-center lg:text-left">
                Overall Overview
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#141838]/60 border border-white/5 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm text-blue-100/70 font-medium">Total States Covered</span>
                  <p className="text-2xl font-black text-[#009edb]">{states.length}</p>
                </div>
                <div className="bg-[#141838]/60 border border-white/5 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm text-blue-100/70 font-medium">Listed PG Colleges</span>
                  <p className="text-2xl font-black text-[#009edb]">{allColleges.length}</p>
                </div>
                <div className="bg-[#141838]/60 border border-white/5 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm text-blue-100/70 font-medium">Available PG Seats</span>
                  <p className="text-2xl font-black text-[#009edb]">{formatSeats(totalSeats)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE BAR */}
      <section className="bg-white border-b border-gray-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaClipboardCheck, text: "NEET PG Guidance" },
              { icon: FaBookOpen, text: "College Shortlisting" },
              { icon: FaUsers, text: "5000+ Students Counselled" },
              { icon: FaHandshake, text: "End-to-End Support" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#1e2259]/5 flex items-center justify-center shrink-0">
                  <item.icon className="text-[#1e2259] text-sm" />
                </div>
                <span className="text-sm font-semibold text-gray-800">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEP CARDS */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                icon: FaCheckCircle,
                title: "NEET PG Qualified",
                desc: "Ensure you meet NEET PG eligibility and secure a qualifying score.",
              },
              {
                step: "02",
                icon: FaClipboardCheck,
                title: "Counselling & Docs",
                desc: "Complete NEET PG counselling registration and document verification.",
              },
              {
                step: "03",
                icon: FaStethoscope,
                title: "Secure PG Seat",
                desc: "Get seat allotment and complete admission at your PG college.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-5xl font-black text-gray-50 select-none">
                  {item.step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-[#1e2259] flex items-center justify-center mb-4 relative z-10">
                  <item.icon className="text-white text-lg" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed relative z-10">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN CONTENT (DIRECTORY & CARDS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        
        {/* Header & Integrated Search Box */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-gray-100">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1e2259] px-3 py-1.5 rounded-md mb-3">
              <span className="text-xs font-bold tracking-wider text-white uppercase">PG College Directory</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
              Top MD/MS Colleges in India
            </h2>
          </div>

          {/* NEW SEARCH POSITION: Right on top of Cards */}
          <div className="relative w-full md:w-80 shrink-0">
            <input
              type="text"
              placeholder="Search by college or city..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full h-11 pl-10 pr-4 bg-gray-50 text-gray-900 placeholder-gray-400 rounded-xl border border-gray-200 outline-none focus:bg-white focus:border-[#1e2259] focus:ring-2 focus:ring-[#1e2259]/10 text-sm font-medium transition-all"
            />
            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
          </div>
        </div>

        {/* State Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => {
              setSelectedState("");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              selectedState === ""
                ? "bg-[#1e2259] text-white shadow-md shadow-[#1e2259]/10"
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
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedState === state.name
                  ? "bg-[#1e2259] text-white shadow-md shadow-[#1e2259]/10"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {state.name}
            </button>
          ))}
        </div>

        {/* Colleges Grid Layout */}
        {filteredColleges.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
            <FaUniversity className="text-5xl text-gray-300 mx-auto mb-4" />
            <p className="text-lg font-semibold text-gray-400">No colleges found matching your criteria.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentColleges.map((college) => (
                <div
                  key={college.id}
                  className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-44 overflow-hidden bg-gray-100 shrink-0">
                    <img
                      src={college.image || "/fallback-college.jpg"}
                      alt={college.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#1e2259] text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
                        MD / MS
                      </span>
                    </div>
                    {college.type && (
                      <div className="absolute top-3 right-3">
                        <span
                          className={`text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${
                            college.type.toLowerCase() === "government" ? "bg-emerald-600" : "bg-purple-600"
                          }`}
                        >
                          {college.type}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <h3 className="text-sm font-bold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-[#009edb] transition-colors">
                        {college.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                        <FaMapMarkerAlt className="text-gray-400" />
                        {college.city}
                      </div>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center justify-between border-t border-gray-50 pt-3 mb-4">
                        <span className="text-xs text-gray-400">Total Seats: <strong className="text-gray-800 ml-0.5">{college.seats || "N/A"}</strong></span>
                        <span className="text-xs font-semibold px-2 py-0.5 bg-gray-50 rounded text-gray-600">{college.ranking}</span>
                      </div>
                      
                      <Link
                        href={`/colleges/md-ms/${college.name
                          .toLowerCase()
                          .replace(/[^a-z0-9\s]/g, "")
                          .replace(/\s+/g, "-")}`}
                        className="inline-flex items-center gap-2 text-[#1e2259] text-xs font-black tracking-wider uppercase group-hover:translate-x-1 transition-transform"
                      >
                        View Details
                        <FaArrowRight className="text-[10px] text-[#009edb]" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <button
                  onClick={() => {
                    setCurrentPage(currentPage - 1);
                    window.scrollTo({ top: 400, behavior: "smooth" });
                  }}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
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
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                      currentPage === i + 1
                        ? "bg-[#1e2259] text-white shadow-lg shadow-[#1e2259]/20"
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
                  className="w-10 h-10 rounded-xl border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <FaChevronRight className="text-xs" />
                </button>
              </div>
            )}

            <p className="text-center text-xs text-gray-400 mt-4 font-medium">
              Showing page {currentPage} of {totalPages} ({filteredColleges.length} colleges listed)
            </p>
          </>
        )}
      </section>

      {/* FOOTER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] rounded-2xl p-8 sm:p-14 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 tracking-tight">
              Need MD/MS Admission Guidance?
            </h2>
            <p className="text-blue-100/70 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Get expert counseling for NEET PG, choice-filling strategy, documentation, and personalized guidance from our PG admission experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f59e0b] hover:bg-[#e09300] text-[#0b0e24] px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-[#f59e0b]/20"
              >
                Get Free Counseling
                <FaArrowRight className="text-xs" />
              </Link>
              <a
                href="tel:+919354023968"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-bold text-sm transition-all"
              >
                <FaHeadset className="text-xs" />
                Call Expert Counselor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const formatSeats = (num: number) => {
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K+`;
  return num;
};

export default MdMsPage;
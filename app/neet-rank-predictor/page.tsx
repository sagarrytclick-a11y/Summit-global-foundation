"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaArrowRight,
  FaGraduationCap,
  FaUserGraduate,
  FaCheckCircle,
  FaChartLine,
  FaInfoCircle,
  FaSlidersH,
} from "react-icons/fa";

interface RankEntry {
  minScore: number;
  maxScore: number;
  minRank: number;
  maxRank: number;
  label: string;
}

const rankData: RankEntry[] = [
  { minScore: 720, maxScore: 720, minRank: 1, maxRank: 1, label: "AIR 1 (Top of India)" },
  { minScore: 700, maxScore: 719, minRank: 2, maxRank: 800, label: "Top 800 — Premier colleges" },
  { minScore: 680, maxScore: 699, minRank: 801, maxRank: 5000, label: "Top 5K — AIIMS/ top government" },
  { minScore: 650, maxScore: 679, minRank: 5001, maxRank: 20000, label: "Top 20K — Top government colleges" },
  { minScore: 630, maxScore: 649, minRank: 20001, maxRank: 45000, label: "Top 45K — Good government colleges" },
  { minScore: 600, maxScore: 629, minRank: 45001, maxRank: 80000, label: "Top 80K — Mid government / top private" },
  { minScore: 550, maxScore: 599, minRank: 80001, maxRank: 180000, label: "Top 1.8L — Private / deemed colleges" },
  { minScore: 500, maxScore: 549, minRank: 180001, maxRank: 350000, label: "Top 3.5L — Private colleges" },
  { minScore: 450, maxScore: 499, minRank: 350001, maxRank: 580000, label: "Top 5.8L — Private / state colleges" },
  { minScore: 400, maxScore: 449, minRank: 580001, maxRank: 900000, label: "Top 9L — Private colleges (higher fees)" },
  { minScore: 300, maxScore: 399, minRank: 900001, maxRank: 1600000, label: "Top 16L — Limited options" },
  { minScore: 0, maxScore: 299, minRank: 1600001, maxRank: 2400000, label: "May not qualify for MBBS admission" },
];

const collegeCategories = [
  {
    title: "Top Government Colleges",
    rankRange: "1 - 20,000",
    color: "from-green-600 to-emerald-500",
    colleges: ["AIIMS Delhi", "Maulana Azad Medical College", "SMS Medical College Jaipur", "Gandhi Medical College Bhopal", "King George's Medical University"],
  },
  {
    title: "Good Government / Top Private",
    rankRange: "20,000 - 1,80,000",
    color: "from-blue-600 to-cyan-500",
    colleges: ["Hamdard Institute of Medical Sciences", "JSS Medical College Mysore", "Christian Medical College Vellore (non-NEET)", "Kasturba Medical College Manipal"],
  },
  {
    title: "Private / Deemed Colleges",
    rankRange: "1,80,000+",
    color: "from-purple-600 to-pink-500",
    colleges: ["DY Patil Medical College", "SRM Medical College", "Sharda University", "Teerthanker Mahaveer Medical College"],
  },
];

const NeetRankPredictorPage: React.FC = () => {
  const [score, setScore] = useState("");
  const [prediction, setPrediction] = useState<RankEntry | null>(null);
  const [showPrediction, setShowPrediction] = useState(false);

  const handlePredict = () => {
    const numScore = parseInt(score);
    if (isNaN(numScore) || numScore < 0 || numScore > 720) return;

    const matched = rankData.find((r) => numScore >= r.minScore && numScore <= r.maxScore);
    setPrediction(matched || null);
    setShowPrediction(true);
  };

  const formatRank = (rank: number) => {
    if (rank >= 10000000) return `${(rank / 10000000).toFixed(1)} Cr`;
    if (rank >= 100000) return `${(rank / 100000).toFixed(1)} L`;
    if (rank >= 1000) return `${(rank / 1000).toFixed(1)}K`;
    return rank.toString();
  };

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] py-20 lg:py-28">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f59e0b]/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f59e0b]/5 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-sm text-blue-200/70 mb-6">
            <Link href="/" className="hover:text-white transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-white font-medium">NEET Rank Predictor</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg mb-5">
              <FaChartLine className="text-[#f59e0b] text-sm" />
              <span className="text-xs font-bold tracking-wider text-white/80 uppercase">NEET 2026 Rank Predictor</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
              Predict Your
              <span className="block text-[#f59e0b]">NEET Rank</span>
            </h1>
            <p className="text-blue-100/60 text-base lg:text-lg leading-relaxed max-w-xl">
              Estimate your All India Rank based on your NEET UG score using previous year trends.
              This is an approximate prediction — actual rank may vary based on exam difficulty and number of candidates.
            </p>
          </div>
        </div>
      </section>

      {/* PREDICTOR */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10">
          <div className="grid sm:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-2">Enter your NEET Score (out of 720)</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="number"
                  min="0"
                  max="720"
                  value={score}
                  onChange={(e) => { setScore(e.target.value); setShowPrediction(false); }}
                  onKeyDown={(e) => e.key === "Enter" && handlePredict()}
                  placeholder="e.g. 650"
                  className="w-full sm:w-64 h-14 px-5 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 outline-none transition-all text-lg font-bold text-center"
                />
                <button onClick={handlePredict}
                  className="w-full sm:w-auto h-14 px-8 rounded-xl bg-[#f59e0b] text-[#0b0e24] font-bold text-sm hover:bg-[#e09300] transition-all shadow-lg shadow-[#f59e0b]/20 flex items-center justify-center gap-2">
                  Predict Rank
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">Score between 0 — 720</p>
            </div>
          </div>

          {/* PREDICTION RESULT */}
          {showPrediction && (
            <div className={`mt-8 p-6 rounded-xl border ${prediction ? 'bg-[#f59e0b]/5 border-[#f59e0b]/20' : 'bg-red-50 border-red-200'}`}>
              {prediction ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold tracking-wider text-[#f59e0b] uppercase mb-1">Estimated All India Rank</p>
                    <p className="text-4xl sm:text-5xl font-black text-gray-900">
                      {formatRank(prediction.minRank)} — {formatRank(prediction.maxRank)}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">{prediction.label}</p>
                  </div>
                  <div className="flex-shrink-0 bg-white border border-gray-200 rounded-xl px-5 py-3 text-center">
                    <p className="text-xs text-gray-400 mb-1">Score</p>
                    <p className="text-2xl font-black text-[#f59e0b]">{score}/720</p>
                  </div>
                </div>
              ) : (
                <p className="text-red-600 font-semibold">Invalid score. Please enter a score between 0 and 720.</p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* RANK TABLE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 px-4 py-2 rounded-lg mb-4">
            <FaInfoCircle className="text-[#f59e0b] text-xs" />
            <span className="text-xs font-bold tracking-wider text-[#f59e0b] uppercase">Reference Table</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Score vs Rank (Previous Year Trends)</h2>
        </div>

        <div className="overflow-x-auto rounded-xl border border-gray-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#0b0e24] text-white">
                <th className="text-left px-5 py-3 font-semibold">Score Range</th>
                <th className="text-left px-5 py-3 font-semibold">Estimated Rank Range</th>
                <th className="text-left px-5 py-3 font-semibold hidden sm:table-cell">What It Means</th>
              </tr>
            </thead>
            <tbody>
              {rankData.map((row, i) => (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-100 hover:bg-[#f59e0b]/5 transition-colors`}>
                  <td className="px-5 py-3 font-bold text-gray-900">{row.minScore}{row.maxScore !== row.minScore ? ` — ${row.maxScore}` : ''}</td>
                  <td className="px-5 py-3 font-semibold text-[#f59e0b]">{formatRank(row.minRank)} — {formatRank(row.maxRank)}</td>
                  <td className="px-5 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.label}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center">
          * These are approximate ranges based on previous year NEET UG data. Actual ranks depend on exam difficulty and total candidates.
        </p>
      </section>

      {/* COLLEGE CATEGORIES */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 px-4 py-2 rounded-lg mb-4">
              <FaGraduationCap className="text-[#f59e0b] text-xs" />
              <span className="text-xs font-bold tracking-wider text-[#f59e0b] uppercase">College Categories</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Colleges You Can Target</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {collegeCategories.map((cat, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4`}>
                  <FaSlidersH className="text-white text-sm" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-xs font-semibold text-[#f59e0b] mb-4">Rank range: {cat.rankRange}</p>
                <ul className="space-y-2">
                  {cat.colleges.map((c, ci) => (
                    <li key={ci} className="flex items-start gap-2">
                      <FaCheckCircle className="text-green-500 text-xs mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] rounded-2xl p-10 sm:p-14 text-center shadow-xl">
            <FaUserGraduate className="text-[#f59e0b] text-4xl mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Need Help With NEET Counseling?</h2>
            <p className="text-blue-100/60 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Get personalized guidance from expert counselors for college selection, counseling registration, and admission process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-[#0b0e24] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#e09300] transition-all shadow-lg shadow-[#f59e0b]/20">
                Get Free Counseling
                <FaArrowRight className="text-xs" />
              </Link>
              <Link href="/colleges/mbbs-india"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/5 transition-all">
                Browse MBBS Colleges
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NeetRankPredictorPage;

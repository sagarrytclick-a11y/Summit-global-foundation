"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { usePopup } from "../contexts/PopupContext";
import {
  FaArrowRight,
  FaGraduationCap,
  FaExclamationCircle,
} from "react-icons/fa";
import Link from "next/link";
import { SITE_IDENTITY } from "@/app/config/site_identity";

const featuredColleges = [
  "Seth GS Medical College",
  "AIIMS Delhi",
  "JIPMER Puducherry",
  "Lady Hardinge Medical College",
  "King George Medical University",
  "Maulana Azad Medical College",
  "Armed Forces Medical College",
  "Grant Medical College",
];

const HeroSection = () => {
  const { openPopup } = usePopup();
  const [typedText, setTypedText] = useState("");
  const [collegeIndex, setCollegeIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    courseInterest: "",
    neetScore: "",
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.mobile.trim()) errs.mobile = "Mobile is required";
    else if (!/^[6-9]\d{9}$/.test(form.mobile)) errs.mobile = "Enter a valid 10-digit mobile number";
    if (!form.neetScore.trim()) errs.neetScore = "NEET score is required";
    else if (Number(form.neetScore) < 0 || Number(form.neetScore) > 720) errs.neetScore = "Score must be 0–720";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const typewriterEffect = useCallback(() => {
    const currentCollege = featuredColleges[collegeIndex];

    if (!isDeleting && charIndex < currentCollege.length) {
      setTypedText(currentCollege.substring(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    } else if (!isDeleting && charIndex === currentCollege.length) {
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      setTypedText(currentCollege.substring(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCollegeIndex((prev) => (prev + 1) % featuredColleges.length);
    }
  }, [charIndex, isDeleting, collegeIndex]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(typewriterEffect, speed);
    return () => clearTimeout(timer);
  }, [typewriterEffect, isDeleting]);

  return (
    <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px]">
      {/* GRADIENT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e24] via-[#141838] to-[#1e2259]" />

      {/* SUBTLE GRID PATTERN */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOBE WATERMARK */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] opacity-[0.04]">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <ellipse
            cx="100"
            cy="100"
            rx="40"
            ry="80"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="20"
            y1="100"
            x2="180"
            y2="100"
            stroke="white"
            strokeWidth="0.5"
          />
          <line
            x1="100"
            y1="20"
            x2="100"
            y2="180"
            stroke="white"
            strokeWidth="0.5"
          />
          <path
            d="M 30 60 Q 100 40 170 60"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <path
            d="M 30 140 Q 100 160 170 140"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* DOCTOR IMAGE OVERLAY — RIGHT SIDE */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] hidden lg:block">
        <div className="relative w-full h-full">
          <img
            src="/medical.png"
            alt="Medical Professional"
            className="absolute inset-0 w-full h-full object-cover object-left"
            style={{
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0e24] via-[#0b0e24]/80 to-transparent" />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[500px] lg:min-h-[580px]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl lg:max-w-2xl"
          >
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm px-4 py-2 mb-6">
              <FaGraduationCap className="text-amber-400 text-sm" />
              <span className="text-xs sm:text-sm font-medium text-white/80">
                MBBS in India &amp; Abroad — Trusted Partner
              </span>
            </div>

            {/* HEADING */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] text-white mb-5">
              Study MBBS in
              <span className="block text-amber-400 mt-1">
                India&apos;s Top
              </span>
              <span className="block">Colleges</span>
            </h1>

            {/* FEATURED COLLEGE CARD — TYPING EFFECT */}
            <div className="mb-5 bg-white/8 backdrop-blur-md border border-white/12 rounded-xl px-5 py-4 max-w-md">
              <p className="text-[10px] sm:text-xs font-bold tracking-[3px] uppercase text-white/50 mb-1">
                Featured College (India)
              </p>
              <p className="text-lg sm:text-xl font-bold text-white min-h-[28px]">
                {typedText}
                <span className="inline-block w-[2px] h-5 bg-amber-400 ml-0.5 animate-pulse align-middle" />
              </p>
            </div>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-base lg:text-lg leading-7 text-white/60 max-w-lg mb-8">
              Admission guidance for MBBS across India — counseling, college
              shortlisting, and documentation support.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={openPopup}
                className="
                  group
                  h-12 sm:h-14
                  px-6 sm:px-8
                  rounded-xl
                  bg-amber-500
                  hover:bg-amber-400
                  text-[#0b0e24]
                  font-bold
                  shadow-[0_8px_30px_rgba(245,158,11,0.3)]
                  hover:shadow-[0_12px_40px_rgba(245,158,11,0.4)]
                  transition-all
                  duration-300
                  flex
                  items-center
                  justify-center
                  gap-3
                  hover:scale-[1.03]
                  text-sm sm:text-base
                  w-full sm:w-auto
                "
              >
                Get Expert Counselling
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1 text-xs" />
              </button>

              <Link href="/colleges/mbbs-india">
                <button
                  className="
                    h-12 sm:h-14
                    px-6 sm:px-8
                    rounded-xl
                    border-2
                    border-white/20
                    bg-transparent
                    text-white
                    font-bold
                    hover:bg-white/10
                    hover:border-white/30
                    transition-all
                    duration-300
                    text-sm sm:text-base
                    w-full sm:w-auto
                  "
                >
                  Explore States
                </button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT — GLASS ENQUIRY FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[420px] bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl p-5 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              {/* FORM HEADER */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-amber-400 rounded-full" />
                <h3 className="text-xs sm:text-sm font-bold tracking-[2px] uppercase text-white/80">
                  Quick Enquiry
                </h3>
              </div>

              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  if (!validate()) return;
                  setSubmitStatus('loading');
                  try {
                    const payload = {
                      name: form.name,
                      email: form.email,
                      mobile: form.mobile,
                      courseInterest: form.courseInterest,
                      neetScore: form.neetScore,
                    };
                    const res = await fetch('/api/send-email', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(payload),
                    });
                    if (res.ok) {
                      setSubmitStatus('success');
                      setForm({ name: '', email: '', mobile: '', courseInterest: '', neetScore: '' });
                      setErrors({});
                      setTimeout(() => setSubmitStatus('idle'), 3000);
                    } else {
                      setSubmitStatus('error');
                      setTimeout(() => setSubmitStatus('idle'), 3000);
                    }
                  } catch {
                    setSubmitStatus('error');
                    setTimeout(() => setSubmitStatus('idle'), 3000);
                  }
                }}
                className="space-y-3"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-semibold text-white/50 mb-1.5 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      setErrors((p) => ({ ...p, name: '' }));
                    }}
                    placeholder="Enter your full name"
                    className={`w-full bg-white/8 border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:bg-white/12 transition-all ${
                      errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-amber-400/50'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><FaExclamationCircle className="text-[10px]" />{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-semibold text-white/50 mb-1.5 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      setErrors((p) => ({ ...p, email: '' }));
                    }}
                    placeholder="you@example.com"
                    className={`w-full bg-white/8 border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:bg-white/12 transition-all ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-amber-400/50'
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><FaExclamationCircle className="text-[10px]" />{errors.email}</p>}
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-[11px] font-semibold text-white/50 mb-1.5 uppercase tracking-wide">
                    Mobile *
                  </label>
                  <input
                    type="tel"
                    value={form.mobile}
                    onChange={(e) => {
                      setForm({ ...form, mobile: e.target.value });
                      setErrors((p) => ({ ...p, mobile: '' }));
                    }}
                    placeholder="10-digit mobile number"
                    className={`w-full bg-white/8 border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:bg-white/12 transition-all ${
                      errors.mobile ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-amber-400/50'
                    }`}
                  />
                  {errors.mobile && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><FaExclamationCircle className="text-[10px]" />{errors.mobile}</p>}
                </div>

                {/* Course Interest */}
                <div>
                  <label className="block text-[11px] font-semibold text-white/50 mb-1.5 uppercase tracking-wide">
                    Course Interest *
                  </label>
                  <select
                    value={form.courseInterest}
                    onChange={(e) =>
                      setForm({ ...form, courseInterest: e.target.value })
                    }
                    className="w-full bg-white/8 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:border-amber-400/50 focus:bg-white/12 transition-all appearance-none"
                  >
                    <option value="" className="bg-[#141838] text-white/50">Select course</option>
                    <option value="MBBS India" className="bg-[#141838]">MBBS India</option>
                    <option value="MBBS Abroad" className="bg-[#141838]">MBBS Abroad</option>
                    <option value="MD/MS" className="bg-[#141838]">MD/MS</option>
                  </select>
                </div>

                {/* NEET Score */}
                <div>
                  <label className="block text-[11px] font-semibold text-white/50 mb-1.5 uppercase tracking-wide">
                    NEET Score *
                  </label>
                  <input
                    type="text"
                    value={form.neetScore}
                    onChange={(e) => {
                      setForm({ ...form, neetScore: e.target.value });
                      setErrors((p) => ({ ...p, neetScore: '' }));
                    }}
                    placeholder="Enter your NEET score"
                    className={`w-full bg-white/8 border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:bg-white/12 transition-all ${
                      errors.neetScore ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-amber-400/50'
                    }`}
                  />
                  {errors.neetScore && <p className="text-red-500 text-[11px] mt-1 flex items-center gap-1"><FaExclamationCircle className="text-[10px]" />{errors.neetScore}</p>}
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className="
                    w-full
                    h-12
                    rounded-xl
                    bg-amber-500
                    hover:bg-amber-400
                    text-[#0b0e24]
                    font-bold
                    text-sm
                    shadow-[0_6px_20px_rgba(245,158,11,0.25)]
                    hover:shadow-[0_8px_25px_rgba(245,158,11,0.35)]
                    transition-all
                    duration-300
                    mt-2
                    disabled:opacity-60
                  "
                >
                  {submitStatus === 'loading' ? 'Submitting...' : submitStatus === 'success' ? 'Submitted ✓' : submitStatus === 'error' ? 'Failed - Try Again' : 'Submit'}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;

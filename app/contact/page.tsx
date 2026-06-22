"use client";

import React, { useState } from "react";
import SiteIdentity from "@/components/SiteIdentity";
import { SITE_IDENTITY } from "../config/site_identity";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaUserGraduate,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "mbbs-abroad",
    neetScore: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Invalid email address";
    if (!formData.phone.trim()) errs.phone = "Phone is required";
    else if (!/^[6-9]\d{9}$/.test(formData.phone)) errs.phone = "Enter a valid 10-digit mobile number";
    if (formData.neetScore && (Number(formData.neetScore) < 0 || Number(formData.neetScore) > 720))
      errs.neetScore = "NEET score must be between 0 and 720";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");
    if (!validate()) return;
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        mobile: formData.phone,
        courseInterest: formData.service,
        neetScore: formData.neetScore,
      };
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "mbbs-abroad", neetScore: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: FaPhone,
      title: "Call Us",
      detail: SITE_IDENTITY.contact.phone,
      href: `tel:${SITE_IDENTITY.contact.phone.replace(/[^0-9+]/g, "")}`,
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      detail: SITE_IDENTITY.contact.email,
      href: `mailto:${SITE_IDENTITY.contact.email}`,
    },
    {
      icon: FaMapMarkerAlt,
      title: "Visit Office",
      detail: `${SITE_IDENTITY.address.area}, ${SITE_IDENTITY.address.city} - ${SITE_IDENTITY.address.pincode}`,
      href: "#",
    },
    {
      icon: FaClock,
      title: "Working Hours",
      detail: `Mon-Sat ${SITE_IDENTITY.officeHours.mondayToSaturday}`,
      href: "#",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] py-20 lg:py-28">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f59e0b]/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f59e0b]/5 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg mb-5">
                <FaUserGraduate className="text-[#f59e0b] text-sm" />
                <span className="text-xs font-bold tracking-wider text-white/80 uppercase">{SITE_IDENTITY.name}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
                Let&apos;s Build Your
                <span className="block text-[#f59e0b]">Medical Career</span>
              </h1>

              <p className="text-blue-100/60 text-base lg:text-lg leading-relaxed max-w-xl mb-8">
                Connect with expert counselors for MBBS admissions in India & Abroad.
                We guide you through counseling, admissions, visas, scholarships, and everything in between.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={`tel:${SITE_IDENTITY.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#0b0e24] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#e09300] transition-all shadow-lg shadow-[#f59e0b]/20">
                  <FaPhone className="text-xs" />
                  Call Now
                </a>
                <a href="#contact-form"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/5 transition-all">
                  Get Free Counseling
                  <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>

            {/* RIGHT - Contact Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {contactCards.map((card, i) => (
                <a key={i} href={card.href}
                  className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-[#f59e0b]/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="text-[#f59e0b] text-lg" />
                  </div>
                  <h3 className="text-white font-bold text-base mb-1">{card.title}</h3>
                  <p className="text-blue-100/50 text-sm leading-relaxed break-all">{card.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAIN - Form + Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
          {/* FORM */}
          <div id="contact-form">
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 bg-[#f59e0b]/10 px-4 py-2 rounded-lg mb-4">
                <FaPaperPlane className="text-[#f59e0b] text-xs" />
                <span className="text-xs font-bold tracking-wider text-[#f59e0b] uppercase">Get in Touch</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-3 mb-3">
                Free MBBS Counseling
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Fill out the form and our expert counselor will contact you within 24 hours.
              </p>
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl flex items-center gap-3 text-sm">
                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                Your inquiry has been submitted successfully.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl text-sm">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Full Name</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange}
                    placeholder="Enter your name"
                    className={`w-full h-12 px-4 rounded-xl border bg-gray-50 focus:ring-2 outline-none transition-all text-sm ${
                      errors.name ? "border-red-400 focus:border-red-400 focus:ring-red/10" : "border-gray-200 focus:border-[#f59e0b] focus:ring-[#f59e0b]/10"
                    }`} />
                  {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle />{errors.name}</p>}
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Phone Number</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange}
                    placeholder="Enter your number"
                    className={`w-full h-12 px-4 rounded-xl border bg-gray-50 focus:ring-2 outline-none transition-all text-sm ${
                      errors.phone ? "border-red-400 focus:border-red-400 focus:ring-red/10" : "border-gray-200 focus:border-[#f59e0b] focus:ring-[#f59e0b]/10"
                    }`} />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle />{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700 block mb-1.5">Email Address</label>
                <input type="email" name="email" required value={formData.email} onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full h-12 px-4 rounded-xl border bg-gray-50 focus:ring-2 outline-none transition-all text-sm ${
                    errors.email ? "border-red-400 focus:border-red-400 focus:ring-red/10" : "border-gray-200 focus:border-[#f59e0b] focus:ring-[#f59e0b]/10"
                  }`} />
                {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle />{errors.email}</p>}
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">Interested In</label>
                  <select name="service" value={formData.service} onChange={handleChange}
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/10 outline-none transition-all text-sm">
                    <option value="mbbs-abroad">MBBS Abroad</option>
                    <option value="mbbs-india">MBBS India</option>
                    <option value="neet-ug">NEET UG Counseling</option>
                    <option value="neet-pg">NEET PG Counseling</option>
                    <option value="general-inquiry">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 block mb-1.5">NEET Score</label>
                  <input type="number" name="neetScore" min="0" max="720" value={formData.neetScore} onChange={handleChange}
                    placeholder="e.g. 620"
                    className={`w-full h-12 px-4 rounded-xl border bg-gray-50 focus:ring-2 outline-none transition-all text-sm ${
                      errors.neetScore ? "border-red-400 focus:border-red-400 focus:ring-red/10" : "border-gray-200 focus:border-[#f59e0b] focus:ring-[#f59e0b]/10"
                    }`} />
                  {errors.neetScore && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FaExclamationCircle />{errors.neetScore}</p>}
                </div>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="group w-full h-12 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-[#0b0e24] font-bold text-sm shadow-lg shadow-[#f59e0b]/20 hover:shadow-xl hover:shadow-[#f59e0b]/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70">
                {isSubmitting ? "Submitting..." : (
                  <>
                    Submit Inquiry
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* MAP */}
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 overflow-hidden">
              <h3 className="text-lg font-black text-gray-900 mb-3">Visit Our Office</h3>
              <div className="rounded-xl overflow-hidden h-[240px]">
                <iframe src="https://maps.google.com/maps?q=Wave%20Silver%20Tower,%20Unit%20No-%20415,%204th%20Floor,%20Noida%20Sector-18,%20Noida,%20Uttar%20Pradesh%20201301&t=&z=15&ie=UTF-8&iwloc=&output=embed"
                  width="100%" height="100%" loading="lazy" style={{ border: 0 }} className="w-full h-full" />
              </div>
              <p className="text-sm text-gray-500 mt-3">
                {SITE_IDENTITY.address.building}, {SITE_IDENTITY.address.landmark}, {SITE_IDENTITY.address.details},{" "}
                {SITE_IDENTITY.address.area}, {SITE_IDENTITY.address.city} - {SITE_IDENTITY.address.pincode}
              </p>
            </div>

            {/* QUICK CONTACT */}
            <div className="bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] rounded-2xl p-6 text-white shadow-lg">
              <h3 className="text-xl font-black mb-2">Need Immediate Help?</h3>
              <p className="text-blue-100/50 text-sm mb-6 leading-relaxed">
                Speak directly with our MBBS admission experts for quick counseling support.
              </p>
              <div className="space-y-3">
                <a href={`tel:${SITE_IDENTITY.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3.5 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center">
                    <FaPhone className="text-[#f59e0b] text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200/60">Call Us</p>
                    <p className="font-semibold text-sm">{SITE_IDENTITY.contact.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${SITE_IDENTITY.contact.email}`}
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3.5 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#f59e0b]/20 flex items-center justify-center">
                    <FaEnvelope className="text-[#f59e0b] text-sm" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200/60">Mail Us</p>
                    <p className="font-semibold text-sm break-all">{SITE_IDENTITY.contact.email}</p>
                  </div>
                </a>
              </div>
            </div>

            {/* TRUST */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-black text-gray-900 mb-4">Why Choose Us?</h3>
              <div className="space-y-3">
                {[
                  "5000+ students counselled successfully",
                  "15+ years of experience in medical admissions",
                  "50+ partner colleges across India & abroad",
                  "End-to-end support from application to visa",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <FaCheckCircle className="text-[#f59e0b] text-sm mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteIdentity />
    </div>
  );
};

export default ContactPage;

"use client"
import Link from 'next/link';
import React from 'react';
import {
  FaGraduationCap,
  FaUsers,
  FaAward,
  FaClock,
  FaCheckCircle,
  FaQuoteLeft,
  FaArrowRight,
  FaPhone,
  FaStar,
} from 'react-icons/fa';
import { SITE_IDENTITY } from '@/app/config/site_identity';

const AboutPage: React.FC = () => {
  const stats = [
    { number: "5000+", label: "Students Counselled", icon: FaUsers },
    { number: "100+", label: "Partner Colleges", icon: FaGraduationCap },
    { number: "15+", label: "Years Experience", icon: FaClock },
    { number: "98%", label: "Success Rate", icon: FaAward },
  ];

  const testimonials = [
    {
      name: "Ananya Singh",
      course: "MBBS - AIIMS Delhi",
      quote: "Summit Global guided me through the entire NEET counseling process. Their expert team made everything smooth and transparent.",
      rating: 5,
    },
    {
      name: "Rahul Kumar",
      course: "MBBS - Philippines",
      quote: "Thanks to their guidance, I'm now pursuing my MBBS dream abroad. From university selection to visa processing, they handled everything.",
      rating: 5,
    },
    {
      name: "Priya Nair",
      course: "MBBS - KMC Manipal",
      quote: "Professional and trustworthy service with excellent support. They helped me secure admission in one of India's top medical colleges.",
      rating: 5,
    },
  ];

  const achievements = [
    "5000+ Successful Placements",
    "100+ Partner Colleges Worldwide",
    "15+ Years of Excellence",
    "98% Success Rate",
    "Expert Counseling Team",
    "Complete Admission Support",
  ];

  const values = [
    {
      title: "Our Mission",
      desc: "To simplify MBBS admissions for every aspiring doctor by providing transparent, expert guidance from counseling to final admission.",
    },
    {
      title: "Our Vision",
      desc: "To become India's most trusted medical admission consultancy, helping students achieve their dreams of becoming doctors worldwide.",
    },
    {
      title: "Our Approach",
      desc: "Personalized guidance for every student based on their budget, preferences, academic profile, and career goals with complete end-to-end support.",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] py-20 lg:py-28">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#f59e0b]/5 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#f59e0b]/5 blur-3xl rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg mb-5">
                <FaGraduationCap className="text-[#f59e0b] text-sm" />
                <span className="text-xs font-bold tracking-wider text-white/80 uppercase">Trusted MBBS Consultancy</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white leading-tight mb-5">
                Building Future
                <span className="block text-[#f59e0b]">Doctors Since 2008</span>
              </h1>

              <p className="text-blue-100/60 text-base lg:text-lg leading-relaxed max-w-xl mb-8">
                {SITE_IDENTITY.name} has helped thousands of students secure admissions in top medical colleges
                across India and abroad with expert counseling and complete admission support.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#0b0e24] px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-[#e09300] transition-all shadow-lg shadow-[#f59e0b]/20">
                  Start Your Journey
                  <FaArrowRight className="text-xs" />
                </Link>
                <Link href="/blog"
                  className="inline-flex items-center gap-2 border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/5 transition-all">
                  Explore Blogs
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://i.pinimg.com/736x/b9/bf/dd/b9bfdd1e6eee463b2abfb77f91b016ad.jpg" loading="lazy" decoding="async"
                  alt={`About ${SITE_IDENTITY.name}`}
                  className="w-full h-[450px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e24]/60 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4">
                  <h3 className="text-white font-bold text-lg">5000+ Students Guided</h3>
                  <p className="text-blue-100/60 text-sm">Your trusted partner for MBBS admissions in India & Abroad.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {stats.map((stat, i) => (
              <div key={i}
                className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="w-10 h-10 sm:w-14 sm:h-14 mx-auto rounded-xl bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 flex items-center justify-center mb-3 sm:mb-4">
                  <stat.icon className="text-base sm:text-xl text-[#f59e0b]" />
                </div>
                <h3 className="text-xl sm:text-3xl font-black text-gray-900 mb-1">{stat.number}</h3>
                <p className="text-xs sm:text-sm text-gray-500 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY + VALUES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT - Story */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 px-4 py-2 rounded-lg mb-4">
                <span className="text-xs font-bold tracking-wider text-[#f59e0b] uppercase">Our Story</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-6 leading-tight">
                Helping Students Achieve Their Medical Dreams
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  {SITE_IDENTITY.name} started with a mission to simplify MBBS admissions for students who dream of becoming doctors.
                </p>
                <p>
                  With years of experience and trusted partnerships with top medical universities, we provide complete support from counseling to final admission.
                </p>
                <p>
                  Our dedicated team ensures every student receives personalized guidance according to their budget, preferences, and career goals.
                </p>
              </div>
            </div>

            {/* RIGHT - Values */}
            <div className="space-y-5">
              {values.map((v, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#f59e0b]/20 to-[#f59e0b]/5 flex items-center justify-center">
                      <FaCheckCircle className="text-[#f59e0b] text-sm" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{v.title}</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed pl-[52px]">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACHIEVEMENTS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-16">
            {achievements.map((item, i) => (
              <div key={i}
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 sm:p-5 hover:border-[#f59e0b]/20 hover:shadow-md transition-all duration-300">
                <div className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-[#f59e0b] text-sm flex-shrink-0" />
                  <p className="text-sm font-semibold text-gray-800">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-lg mb-4">
              <FaQuoteLeft className="text-[#f59e0b] text-xs" />
              <span className="text-xs font-bold tracking-wider text-white/80 uppercase">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Student <span className="text-[#f59e0b]">Success</span> Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#f59e0b]/20 transition-all duration-300">
                <FaQuoteLeft className="text-[#f59e0b]/30 text-3xl mb-4" />
                <p className="text-blue-100/70 text-sm leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="border-t border-white/10 pt-4">
                  <h3 className="font-bold text-white text-base">{t.name}</h3>
                  <p className="text-[#f59e0b] text-xs font-semibold mb-2">{t.course}</p>
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, ri) => (
                      <FaStar key={ri} className="text-[#f59e0b] text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="bg-gradient-to-br from-[#0b0e24] via-[#141838] to-[#1e2259] rounded-2xl p-10 sm:p-14 shadow-xl">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready To Start Your MBBS Journey?
            </h2>
            <p className="text-blue-100/60 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
              Connect with our expert counselors today and get personalized guidance for MBBS admissions in India and Abroad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#f59e0b] text-[#0b0e24] px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#e09300] transition-all shadow-lg shadow-[#f59e0b]/20">
                Get Free Counseling
                <FaArrowRight className="text-xs" />
              </Link>
              <a href={`tel:${SITE_IDENTITY.contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/5 transition-all">
                <FaPhone className="text-xs" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
